import Base from 'templates/Base';
import Container from 'components/Container';
import Empty from 'components/Empty';

export default function NotFoundPage() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: not found"
          description="Ops ... this page does not exist. Go back to the store and enjoy our offers."
          hasLink
        />
      </Container>
    </Base>
  );
}
