import React from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles'
import Header from "../../components/Header";
import MobileMenuHeader from '../../components/MobileMenuHeader';
import Hero from '../../components/Home/Hero';
import Numbers from '../../components/Home/Numbers';  

function Home() {
  return (
    <>
    
<MobileMenuHeader />
<Header /> 
<Hero />
<Numbers />






    </>
  )
}

export default Home