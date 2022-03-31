/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
