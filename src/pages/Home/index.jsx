import React from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles'
import Header from "../../components/Header";
import MobileMenuHeader from '../../components/MobileMenuHeader';
import Hero from '../../components/Home/Hero';
import Numbers from '../../components/Home/Numbers';  
import Convence from '../../components/Home/Convence';
import GreenBar from '../../components/Home/GreenBar';
import ServicesPrest from '../../components/Home/ServicesPrest';
import Investment from '../../components/Home/Investment';
import OrcamentPast from '../../components/Home/OrcamentPast';
import Footer from '../../components/Footer';


function Home() {
  return (
    <>
    
<MobileMenuHeader />
<Header /> 
<Hero />
<Numbers />
<Convence />
<GreenBar />
<ServicesPrest />
<Investment />
<OrcamentPast />
<Footer />

    </>
  )
}

export default Home