import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
      <p>ChronosTrade</p>
      <div>
        <button type="button" name="facebook-link">
          <FontAwesomeIcon icon={faFacebook} />
        </button>
        <button type="button" name="twitter-link">
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <a href="https://github.com/ChronosTrade" aria-label="a link to ChronosTrade Github" name="github-link" target="_blank" rel="noopener noreferrer">
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
