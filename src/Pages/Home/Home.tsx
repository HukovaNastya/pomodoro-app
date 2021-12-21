import React from 'react';
import { styled } from '@mui/material/styles';
import MainText from '../../Components/MainText/MainText';
import MainNavigation from '../../Components/MainNavigation/MainNavigation';
import PomodotoClock from '../../Components/PomodotoClock/PomodotoClock';
import Settings from '../../Components/Settings/Settings';

const HomeBody = styled('div')({
    width: "100%",
    minHeight: "100vh",
    background: "#1E213F",
});
  
const Home:React.FC = () => {
  return (
    <HomeBody>
      <MainText/>
      <MainNavigation/>
      <PomodotoClock/>
      <Settings/>
    </HomeBody>
  )
}

export default Home;