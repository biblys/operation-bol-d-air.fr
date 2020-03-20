import React from 'react';

import './SubscribePage.css';

export default function HomePage() {
  return (
    <div id="subscribe" className="SubscribePage page">
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
