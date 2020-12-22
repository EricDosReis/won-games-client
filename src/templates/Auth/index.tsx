import Heading from 'components/Heading';
import Logo from 'components/Logo';

import * as S from './styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.Banner>
      <S.BannerContent>
        <Logo id="banner" />

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
        <Logo id="content" color="black" size="large" />

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
