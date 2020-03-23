import React from 'react';
//@ts-ignore
import { Link } from 'react-scroll';

import backgroundResizer from '../lib/backgroundResizer';

import './SubscribePage.css';

const backgroundImageFile = 'subscribe-page-background.jpg';
const backgroundImage = backgroundResizer(
  backgroundImageFile,
  window.innerWidth,
  window.innerHeight,
  window.devicePixelRatio
);

export default function SubscribePage() {
  return (
    <div
      id="subscribe"
      className="SubscribePage page with-background-image"
      style={{ backgroundImage }}
    >
      <iframe
        title="mailjet"
        className="mailjet-iframe"
        src="https://app.mailjet.com/statics/widget/iframe/qWS/pVu"
        scrolling="no"
        frameBorder="0"
      >
        <p>Votre navigateur ne supporte pas l'élément iframe</p>
      </iframe>
      <footer id="subscribe-footer" className="footer">
        <Link to="subscribe-footer" smooth={true} duration={250}>
          Mais au fait… vous êtes qui ?{' '}
          <span role="img" aria-label="pensif">
            🤔
          </span>
        </Link>
      </footer>
    </div>
  );
}
