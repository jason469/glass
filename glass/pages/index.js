import React from 'react';
import {Product, FooterBanner, HeroBanner} from "../components";
import {client} from "../lib/client";

const Home = ({products, bannerData}) => {
  return (
    <section>
      <HeroBanner heroBanner={bannerData.length & bannerData[0]}></HeroBanner>
      <section className="products-heading">
        <h2>Best Selling Products</h2>
        <p className="">Speakers of many variations</p>
      </section>
      
      <section className="products-container">
        {products?.map(product =>
          <Product/>
        )}
      </section>
      
      <FooterBanner></FooterBanner>
    
    </section>
  )
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery)
  
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)
  
  return {
    props: {
      products,
      bannerData
    }
  }
}

export default Home;