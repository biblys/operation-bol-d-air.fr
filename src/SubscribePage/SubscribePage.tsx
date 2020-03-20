import React from 'react';

import backgroundResizer from '../lib/backgroundResizer';

import './SubscribePage.css';

const backgroundImageFile = 'subscribe-page-background.jpg';
const backgroundImage = backgroundResizer(
  backgroundImageFile, window.innerWidth, window.innerHeight, window.devicePixelRatio
);

export default function SubscribePage() {
  return (
    <div id="subscribe" className="SubscribePage page" style={{ backgroundImage }}>
      <iframe 
        title="mailjet"
        className="mailjet-iframe" 
        src="https://app.mailjet.com/statics/widget/iframe/qWS/pVu" 
        scrolling="no"
        frameBorder="0" 
        allowTransparency={true}
      >
        <p>Votre navigateur ne supporte pas l'élément iframe</p>
      </iframe>
    </div>
  );
}
