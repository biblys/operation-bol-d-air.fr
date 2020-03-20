import React from 'react';

import backgroundResizer from '../lib/backgroundResizer';

import './AboutPage.css';

const backgroundImageFile = 'About-page-background.jpg';
const backgroundImage = backgroundResizer(
  backgroundImageFile,
  window.innerWidth,
  window.innerHeight,
  window.devicePixelRatio
);

export default function AboutPage() {
  return (
    <div id="about" className="AboutPage" style={{ backgroundImage }}>
      <h1 className="page-title">À propos</h1>
      <div className="text">
        <h2 className="section-title">Bol d'air, c'est quoi ?</h2>
        <p>
          C'est une opération organisée par un regroupement d'éditeurs
          indépendants et propulsée par{' '}
          <a
            href="https://www.biblys.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Biblys
          </a>
          , l'outil e-commerce au service de la librairie et de l'édition
          indépendante.
        </p>
        <p>
          Elle consiste pour ces éditeurs à offrir chaque jour que durera la
          période de confinement française un livre numérique gratuit, sans DRM,
          à leur lecteurs.
        </p>
        <p>
          L'opération existe via le présent site, une{' '}
          <a href="#subscribe">newsletter quotidienne</a> et une{' '}
          <a
            href="https://www.facebook.com/operationboldair/"
            target="_blank"
            rel="noopener noreferrer"
          >
            page Facebook
          </a>
          .
        </p>

        <h2 className="section-title">
          Si c'est gratuit, c'est que c'est moi le produit ?
        </h2>
        <p>
          L’Opération bol d’air respecte votre privée, n’utilise aucun pisteur
          de réseau social et autre traqueurs publicitaires, ne collecte aucune
          donnée à caractère personnelle sur son site, sauf éventuellement votre
          adresse e-mail avec votre consentement éclairé et préalable.
        </p>

        <p>Si vous choisissez de nous confier votre adresse e-mail :</p>
        <ul>
          <li>
            Celle-ci sera utilisée uniquement dans le cadre de l’opération
          </li>
          <li>
            Vous recevrez un e-mail par jour avec un livre numérique, ni plus,
            ni moins, plus un dernier e-mail récapitulatif à la fin de
            l’opération
          </li>
          <li>
            Vous ne serez abonné à aucune autre newsletter et votre adresse ne
            sera JAMAIS partagée avec des tiers, dans le strict respect du RGPD
          </li>
          <li>Vous pourrez mettre fin à votre abonnement à tout moment</li>
        </ul>
        <p>
          Mais ne nous croyez pas sur parole, allez voir par vous-même,{' '}
          <a href="https://github.com/biblys/operation-bol-d-air.fr">
            le code source du site est libre
          </a>
          .
        </p>

        <h2 className="section-title">Quels éditeurs peuvent participer ?</h2>
        <p>
          Tout éditeur indépendant inquiet pour ses lecteurs en situation de
          confinement peut participer. Il lui suffit pour cela de proposer un
          livre numérique gratuit sur ses canaux de vente habituels.
        </p>
        <p>Quelques conditions :</p>
        <ul>
          <li>
            L'opération de gratuité doit commencer le jour de la mise en avant
            dans le cadre de l'opération Bol d'air mais peut se prolonger
            au-delà.
          </li>
          <li>
            Le jour de la mise en avant, l'édieur s'engage à faire la promotion
            de l'opération dans son ensemble en relayant notamment la page du
            mini-site consacrée à son livre.
          </li>
          <li>
            La gratuité du titre doit être répercutée sur toutes les plateformes
            où le livre est en vente, en accord avec la loi{' '}
            <a
              href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000024079563&categorieLien=id"
              target="_blank"
              rel="noopener noreferrer"
            >
              PULN
            </a>
            .
          </li>
          <li>Le livre doit être proposé au téléchargement sans DRM.</li>
        </ul>
      </div>
    </div>
  );
}
