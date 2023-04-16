import React from 'react';
import Head from 'next/head'

import {Navbar} from "../../components";
import {Footer} from "../../components";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
const Layout = ({children}) => {
  return (
    <section className="layout">
      <Head>
        <title>Glass</title>
      </Head>
      
      <header>
        <HeaderBanner/>
        <Navbar />
      </header>
      
      <main className="main-container">
        {children}
      </main>
      
      <footer>
        <Footer />
      </footer>
    </section>
  )
};

export default Layout;