import Heading from 'components/Heading';
import Logo from 'components/Logo';
import Link from 'next/link';

import * as S from './styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.Banner>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>

          <S.BannerSubtitle>
            <strong>WON</strong> is the best and most complete gaming platform
          </S.BannerSubtitle>
        </div>

        <S.BannerFooter>Won Games 2020 © All Rights Reserved</S.BannerFooter>
      </S.BannerContent>
    </S.Banner>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
