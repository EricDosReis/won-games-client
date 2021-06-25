import Grid from 'components/Grid';
import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import Heading from 'components/Heading';
import TextField from 'components/TextField';

import theme from 'styles/theme';

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <Grid md={1} columns={2}>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />

      <TextField
        name="email"
        placeholder="Email"
        label="Email"
        type="email"
        disabled
      />

      <TextField
        name="password"
        placeholder="Type your password"
        label="Password"
        type="password"
      />

      <TextField
        name="newPassword"
        placeholder="New Password"
        label="New Password"
        type="password"
      />
    </Grid>

    <FlexBox justifyContent="flex-end" mt={theme.grid.gutter}>
      <Button>Save</Button>
    </FlexBox>
  </>
);

export default FormProfile;
