export default function backgroundResizer(
    imageFile: string,
    windowWidth = 1024,
    windowHeight = 1024,
    ratio = 1,
) {
    const baseUrl = process.env.NODE_ENV === 'development' ? '/' : 'https://afmsmgripo.cloudimg.io/v7/operation-bol-d-air.fr/';
    let param, value;

    if (windowWidth > windowHeight) {
        param = 'w';
        value = windowWidth;
    } else {
        param = 'h';
        value = windowHeight;
    }

    const realValue = value * ratio;
    const roundValue = Math.ceil(realValue / 100) * 100;
    return `url(${baseUrl}${imageFile}?${param}=${roundValue})`;
}