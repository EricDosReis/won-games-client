import Container from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import * as S from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu username="EricDosReis" />
    </Container>

    <S.Content>{children}</S.Content>

    <S.FooterWrapper>
      <Container>
        <Footer />
      </Container>
    </S.FooterWrapper>
  </S.Wrapper>
);

export default Base;
