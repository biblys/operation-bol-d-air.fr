import React from 'react';

import backgroundResizer from '../lib/backgroundResizer';

import biblysLogo from './propulse-par-biblys.png';

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
        <h2 className="section-title">Bol d'air, c'est quoi&nbsp;?</h2>
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
          Si c'est gratuit, c'est moi le produit&nbsp;?
        </h2>
        <p>
          L’opération Bol d’air respecte votre privée, n’utilise aucun pisteur
          de réseau social et autre traqueurs publicitaires, ne collecte aucune
          donnée à caractère personnelle sur son site, sauf éventuellement votre
          adresse e-mail avec votre consentement éclairé et préalable.
        </p>

        <p>Si vous choisissez de nous confier votre adresse e-mail&nbsp;:</p>
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
          Mais ne nous croyez pas sur parole, voyez par vous-même,{' '}
          <a href="https://github.com/biblys/operation-bol-d-air.fr">
            le code source du site est libre
          </a>
          .
        </p>

        <h2 className="section-title">Quels éditeurs peuvent participer&nbsp;?</h2>
        <p>
          Tout éditeur indépendant inquiet pour ses lecteurs en situation de
          confinement peut participer. Il lui suffit pour cela de proposer un
          livre numérique gratuit sur ses canaux de vente habituels.
        </p>
        <p>Quelques conditions&nbsp;:</p>
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
          <li>Le livre ne doit pas être auto-édité.</li>
        </ul>
        <p>
          Pour savoir comment participer, contactez{' '}
          <a
            href="https://www.biblys.fr/contact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clément Bourgoin
          </a>
          .
        </p>

        <h2 className="section-title">
          D'où viennent toutes ces belles images de chèvres&nbsp;?
        </h2>
        <p>Le logo&nbsp;:</p>
        <ul>
          <li>
            Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </li>
          <li>
            Icon made by <a href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </li>
        </ul>
        <p>Les fonds d'écrans&nbsp;:</p>
        <ul>
          <li>
            Page d'accueil&nbsp;:{' '}
            <span>
              Photo by{' '}
              <a href="https://unsplash.com/@nandhukumarndd?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Nandhu Kumar
              </a>{' '}
              on{' '}
              <a href="/collections/9721391/bol-d'air?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          </li>
          <li>
            Page livres&nbsp;:{' '}
            <span>
              Photo by{' '}
              <a href="https://unsplash.com/@claudelrheault?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Claudel Rheault
              </a>{' '}
              on{' '}
              <a href="/collections/9721391/bol-d'air?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          </li>
          <li>
            Page newsletter&nbsp;:{' '}
            <span>
              Photo by{' '}
              <a href="https://unsplash.com/@mana5280?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                mana5280
              </a>{' '}
              on{' '}
              <a href="/collections/9721391/bol-d'air?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          </li>
        </ul>

        <h2 className="section-title">
          J'imagine fort bien que c'est fait dans l'urgence, mais une petite
          mention pour indiquer qui gère cet endroit ou on largue une adresse
          mail, et/ou donner un moyen de contact serait chouette et vraiment
          vite fait.
        </h2>
        <p>
          Bien entendu, voici les <strong>mentions légales</strong>&nbsp;:
        </p>
        <p>
          Le présent site est édité et hébergé par Clément Bourgoin,
          auto-entrepreneur, immatriculé&nbsp;à l’Insee sous le numéro 504 299
          371, dont le siège social est sis à Paris (75015). Il est mis à la
          disposition des utilisateurs sous réserve de leur acceptation
          inconditionnelle des conditions et des avertissements rappelés
          ci-dessous.
        </p>
        <p>
          L’éditeur du site met tout en œuvre pour
          assurer l’exactitude et la mise à jour de l’ensemble des informations
          fournies mais il ne peut garantir que ces informations sont complètes,
          précises, exactes, exhaustives et dépourvues de toute erreur.
        </p>
        <p>
          L’éditeur du site se réserve le droit de corriger ou de modifier, à
          tout moment et sans préavis, son contenu.
        </p>
        <p>
          Les sites gérés par Biblys ont fait l’objet d’une déclaration auprès
          de la Commission nationale de l’informatique et des libertés (CNIL).
          En application de la loi 78-17 du 6 janvier 1978, les utilisateurs
          disposent à tout moment d’un droit d’accès, de modification, de
          rectification et de suppression des données personnelles qui les
          concernent. Pour exercer ce droit, vous pouvez{' '}
          <a
            href="https://www.biblys.fr/contact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            utiliser ce formulaire
          </a>
          .
        </p>

        <h2 className="section-title">
          J'ai encore une question, qui contacter&nbsp;?
        </h2>
        <p>
          <a
            href="https://www.biblys.fr/contact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clément Bourgoin
          </a>
        </p>

        <a
          href="https://www.biblys.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={biblysLogo}
            className="biblys-logo"
            alt="Propulsé par biblys"
          />
        </a>
      </div>
    </div>
  );
}
