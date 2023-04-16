import React, {useState} from 'react';
import {client, urlFor} from "../../lib/client";
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Product} from "../../components";

import {useStateContext} from "../../context/StateContext";

const ProductDetails = ({product, products}) => {
  const {image, name, details, price} = product;
  const [index, setIndex] = useState(0);
  const [productInCart, setProductInCart] = useState(false)
  const {decQty, incQty, qty, onAdd, cartItems, setShowCart} = useStateContext()
  
  const addItem = (product, qty) => {
    let foundProduct = cartItems.find((item) => item._id === product._id);  // True if item is already in cart
    
    if (foundProduct) {
      setProductInCart(true)
    } else {
      onAdd(product, qty)
      setProductInCart(false)
      console.log(productInCart)
    }
  }
  
  const handleBuyNow = (product, qty) => {
    onAdd(product, qty);
    setShowCart(true);
  }
  
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
                    key={i}
                  />
                ))}
              </section>
            
            </section>
            
            <section className="flex flex-col gap-4">
              <h1 className="font-bold text-4xl">{name}</h1>
              <section className="text-navyBlue-300 mt-2.5 flex gap-1 align-middle">
                <section className="flex items-center">
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
              <section>
                <h4>Details: </h4>
                <p>{details}</p>
              </section>
              <p className="text-navyBlue-300 bold text-2xl mt-3">${price}</p>
              <section className="flex g-4 items-center | mt-2">
                <h3 className="mr-2">Quantity:</h3>
                <p className="flex | justify-center items-center gap-2 | text-lg | cursor-pointer">
                  <i className="fa-solid fa-circle-minus" onClick={decQty}></i>
                  <span className=""> {qty}</span>
                  <i className="fa-solid fa-circle-plus" onClick={incQty}></i>
                </p>
              </section>
              <section className="flex gap-4">
                <button
                  type="button"
                  className="add-to-cart | button | transition duration-500"
                  onClick={() => addItem(product, qty)}
                  disabled={productInCart}
                >
                  {productInCart ? "In Cart" : "Add to Cart"}
                </button>
                <button
                  type="button"
                  className="buy-now | button | transition duration-500"
                  onClick={() => handleBuyNow(product, qty)}
                >
                  Buy now
                </button>
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