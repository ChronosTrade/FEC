import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  FooterContainer,
  Copyright,
} from './FooterStyles';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <h3>ChronosTrade</h3>
      <div>
        <button type="button">
          <FontAwesomeIcon icon={faFacebook} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <a href="https://github.com/ChronosTrade" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <Copyright>
        ©
        {year}
        {' '}
        ChronosTrade. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
