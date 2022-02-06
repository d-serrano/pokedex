import React, { useEffect } from 'react';
import styled from 'styled-components';
// components
import Pokemon from './pokemon';
import Header from './header';

const StyledLayout = styled.main`
  max-width:1600px;
  display:grid;
  grid-template-columns: 2fr 1fr;
  padding: 2rem 4rem 2rem 4rem;
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