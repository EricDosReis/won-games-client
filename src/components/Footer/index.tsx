import Link from 'next/link';

import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        <a href="tel:+55016999991111">+55 16 99999-1111</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/games">
            <a>Store</a>
          </Link>

          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>

        <address>
          <span>Av. Bandeirantes, 3500</span>
          <span>Vila do Chaves, 14801000</span>
          <span>Araraquara - SP</span>
        </address>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
  </S.Wrapper>
);

export default Footer;
