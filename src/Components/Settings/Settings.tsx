import react from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const SettingsContainer = styled(Container)({
    paddingTop: "50px",
  });

const Settings = () => {
  return (
    <SettingsContainer maxWidth="lg">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Button>
              <img src="/img/Settings.png" alt="settings"></img>

          </Button>
        </Grid>
      </Grid>

    </SettingsContainer>
  )
}

export default Settings;