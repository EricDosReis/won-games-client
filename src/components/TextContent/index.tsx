import Heading from 'components/Heading';
import * as S from './styles';

export type TextContentProps = {
  title?: string;
  content: string;
};

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineColor="secondary" lineLeft>
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
);

export default TextContent;
