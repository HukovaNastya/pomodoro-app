import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MainNavigationWrapper = styled(Box)({
  paddingTop: "60px",
  maxWidth: "1200px",
  margin: "0 auto",
});

const ButtonStyles = styled(Button)({
  background: "#161932",
  textTransform: "lowercase",
  padding: "6px 0px",
  borderRadius: "26.5px",
  color: "#D7E0FF",
  fontFamily: "Kumbh Sans",
  fontWeight: "700",
  width: "100%",
  fontSize: "14px",
  '&:hover': {
    background: "#F87070",
    color: '#1E213F',
  }
});

const Wrapper = styled(Grid)({
  width: "120px",
  marginLeft: "10px",
});

const MainNavigation:React.FC = () => {
  return (
    <MainNavigationWrapper>
      <Grid container justifyContent="center" alignItems="center">
        <Wrapper item >
          <ButtonStyles variant="contained">pomodoro</ButtonStyles>
        </Wrapper>
        <Wrapper item >
          <ButtonStyles variant="contained">short break</ButtonStyles>
        </Wrapper>
        <Wrapper item >
          <ButtonStyles variant="contained">long break</ButtonStyles>
        </Wrapper>
      </Grid>
    </MainNavigationWrapper>
  )
}

export default MainNavigation;