import React from 'react';
import { styled } from '@mui/material/styles';
import MainText from '../../Components/MainText/MainText';
import MainNavigation from '../../Components/MainNavigation/MainNavigation';
import PomodotoClock from '../../Components/PomodotoClock/PomodotoClock';

const HomeBody = styled('div')({
    width: "100%",
    height: "100vh",
    background: "#1E213F",
});
  
const Home:React.FC = () => {
  return (
    <HomeBody>
      <MainText/>
      <MainNavigation/>
      <PomodotoClock></PomodotoClock>
    </HomeBody>
  )
}

export default Home;