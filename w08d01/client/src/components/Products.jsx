import {useEffect, useState} from 'react';
import axios from 'axios';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:12345/api/products')
      .then(res => {
        setProducts(res.data);
      });
  }, []);

  // const displayProducts = [];

  // for (let i = 0; i < products.length; i++) {
  //   const product = products[i];
  //   const element = <h3 key={i}>Product: {product.product_name} ({product.id})</h3>;
  //   displayProducts.push(element);
  // }

  // const displayProducts = products.map((product, index) => {
  //   return <h3 key={index}>Product: {product.product_name} ({product.id})</h3>;
  // });

  // const displayProducts = products.map((product, index) => (
  //   <h3 key={index}>Product: {product.product_name} ({product.id})</h3>
  // ));

  return (
    <div>
      <h2>Product Listing</h2>

      { products.map((product, index) => (
        // <h3 key={index}>Product: {product.product_name} ({product.id})</h3>
        <Product
          key={product.id} 
          // id={product.id}
          // product_name={product.product_name}
          // price={product.price}
          {...product}
        />
      )) }
    </div>
  );
};

export default Products;
