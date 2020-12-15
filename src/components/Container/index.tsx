import * as S from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <S.Wrapper>{children}</S.Wrapper>
);

export default Container;
