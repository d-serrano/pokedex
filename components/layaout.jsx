import React, { useEffect } from 'react';
// components
import List from '../views/list';
import PokeTable from '../views/table';
import Gallery from '../views/gallery';
import Header from './header';

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
};

export default Layout;