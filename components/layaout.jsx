import React, { useEffect } from 'react';
import styled from 'styled-components';
// components
import Pokemon from './pokemon';
import Header from './header';
//styles
import { device } from '../styles/mediaQueries';

console.log({device})
const StyledLayout = styled.main`
  max-width:1600px;
  display:grid;
  margin auto;
  grid-template-columns: 2fr 1fr;
  padding: 16px 32px 16px 32px;
  gap:20px;


  @media ${device.laptop} { 
    grid-template-columns: 1.5fr 1fr;
    max-width: 1000px;
  }
  @media ${device.mobile} { 
    max-width: 700px;
    grid-template-columns: 1fr 1fr;
    padding: 4px;
  }

`;

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <StyledLayout>
        {children}
        <Pokemon/>
    
    </StyledLayout>
    </>
  );
};

export default Layout;