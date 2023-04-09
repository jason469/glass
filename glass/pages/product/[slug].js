import React, {useState} from 'react';
import {client, urlFor} from "../../lib/client";
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Product} from "../../components";

const ProductDetails = ({product, products}) => {
  const {image, name, details, price} = product;
  const [index, setIndex] = useState(0);
  
  return (
    <section>
      <section className="product-detail-container">
        <section className="" style={{gap: "2rem"}}>
          <section className="flex" style={{gap: "2rem"}}>
            <section className="flex flex-col" style={{gap: "2rem"}}>
              <section className="image-container">
                <img src={urlFor(image && image[index])} alt="" className="product-detail-image"/>
              </section>
              
              <section className="small-images-container">
                {image?.map((item, i) => (
                  <img
                    src={urlFor(item)}
                    alt=""
                    className={i === index ? 'small-image selected-image' : 'small-image'}
                    onMouseEnter={() => setIndex(i)}
                  />
                ))}
              </section>
            
            </section>
            
            <section className="product-detail-desc">
              <h1 className="font-bold">{name}</h1>
              <section className="reviews">
                <section className="flex">
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiOutlineStar/>
                </section>
                <p>
                  (20)
                </p>
              </section>
              <h4>Details: </h4>
              <p>{details}</p>
              <p className="price">${price}</p>
              <section className="quantity">
                <h3>Quantity: </h3>
                <p className="quantity-desc">
                <span
                  className="minus"
                  onClick=""
                >
                  <AiOutlineMinus/>
                </span>
                  <span
                    className="num"
                    onClick=""
                  >
                  0
                </span>
                  <span
                    className="plus"
                    onClick=""
                  >
                  <AiOutlinePlus/>
                </span>
                </p>
              </section>
              <section className="buttons">
                <button type="button" className="add-to-cart">Add to Cart</button>
                <button type="button" className="buy-now">Buy now</button>
              </section>
            </section>
          </section>
          <section className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <section className="marquee">
              <section className="maylike-products-container track">
                {products.map((item) => (
                  <Product key={item._id} product={item}/>
                ))}
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  )
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
  slug {
    current
    }
  }
  `;
  
  const products = await client.fetch(query)
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));
  
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({params: {slug}}) => {
  const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product"]`;
  const product = await client.fetch(productQuery)
  const products = await client.fetch(productsQuery)
  
  return {
    props: {
      product,
      products,
    }
  }
}


export default ProductDetails;