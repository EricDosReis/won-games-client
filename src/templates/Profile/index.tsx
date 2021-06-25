import Base from 'templates/Base';
import { useRouter } from 'next/router';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Grid from 'components/Grid';
import ProfileMenu from 'components/ProfileMenu';

import theme from 'styles/theme';

import * as S from './styles';

export type ProfileTemplateProps = {
  children: React.ReactNode;
};

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter();

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <Grid md={1} custom="32rem 1fr" gap={`0 ${theme.grid.gutter}`}>
          <ProfileMenu activeLink={asPath} />

          <S.Content>{children}</S.Content>
        </Grid>
      </Container>
    </Base>
  );
};

export default Profile;
