import React from 'react';
import Link from "next/link";

const HeroBanner = ({heroBanner}) => {
  return (
    <section className="hero-banner-container">
      <section>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src="" alt="heapdhones" className="hero-banner-image"/>
        <section>
          <Link href="/product/ID">
            <button type="button">BTTON TEXT</button>
          </Link>
          <section className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </section>
        </section>
      </section>
    </section>
  )
};

export default HeroBanner;