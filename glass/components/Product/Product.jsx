import React from 'react';
import Link from 'next/link'

import {urlFor} from "../../lib/client";

const Product = ({product: {image, name, slug, price}}) => {
  return (
    <section>
      <Link href={`/product/${slug.current}`}>
        <section className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </section>
      </Link>
    </section>
  )
};

export default Product;