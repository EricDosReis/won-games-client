import * as S from './styles';

const Main = ({
  title = 'NextJS Starter',
  subtitle = 'NextJS, TypeScript, ReactJS and Styled Components Boilerplate',
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
