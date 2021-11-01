const Product = (props) => {
  console.log(props);
  const {product_name, price} = props;

  return (
    <div>
      <h3>Product: {product_name}</h3>
      <h3>Price: ${price}</h3>
    </div>
  )
};

export default Product;
