import react from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const PomodotoClockWrapper = styled(Grid)({
  paddingTop: "60px",
  background: "#1E213F",
});


const BoxStyles = styled(Box)({
  borderRadius: "50%",
  background: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
  boxShadow: "-50px -50px 100px  #272C5A, 100px 0px 300px  #121530",
})

const PomodotoClock =() => {
  return (
    <Container maxWidth="lg" style={{margin: "0 auto"}}>
      <Grid container justifyContent="center" alignItems="center">
        <PomodotoClockWrapper  item>
          <BoxStyles>
            <CountdownCircleTimer
              isPlaying
              duration={45}
              strokeWidth={6}
              size={220}
              trailColor="#151932"
              colors={[
                ['#F87070', 0.33],
                ['#F87070', 0.33],
                ['#F87070', 0.33],
              ]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </BoxStyles>
        </PomodotoClockWrapper >
      </Grid>
    </Container>

  )
}

export default PomodotoClock;