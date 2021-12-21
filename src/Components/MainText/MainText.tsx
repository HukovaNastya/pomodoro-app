import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const MainTextContainer = styled(Container)({
  maxWidth: "1200px",
  paddingTop: "50px",
  margin: "0 auto",
});

const MainTypography = styled(Typography)({
  color: "#D7E0FF",
  fontFamily: "Kumbh Sans",
  fontWeight: "700",
  fontSize: "32px",
  textAlign: "center"

});

const MainText:React.FC = () => {
  return (
    <MainTextContainer>
      <MainTypography 
        variant="h1" 
      >
        pomodoro
      </MainTypography >   
    </MainTextContainer>
  )
}

export default MainText;