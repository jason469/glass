import React from 'react';
import Head from 'next/head'

import {Navbar} from "../../components";
import {Footer} from "../../components";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
const Layout = ({children}) => {
  return (
    <section className="mt-3">
      <Head>
        <title>Glass</title>
      </Head>
      
      <header>
        <HeaderBanner/>
        <Navbar />
      </header>
      
      <main className="flex items-center justify-center flex-col">
        {children}
      </main>
      
      <footer>
        <Footer />
      </footer>
    </section>
  )
};

export default Layout;