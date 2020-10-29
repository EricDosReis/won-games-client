import * as S from './styles';

const Main = ({
  title = 'NextJS Starter',
  subtitle = 'A simple boilerplate to work with NextJS, TypeScript, React, Jest and Styled Components',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer writing some code"
    />
  </S.Wrapper>
);

export default Main;
