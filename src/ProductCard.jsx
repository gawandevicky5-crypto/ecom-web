import { FaStar } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="product-card">

     
      <img src={product.thumbnail} alt={product.title} className="product-image"/>

      <div className="product-content">

        <h3 className="fs-1">{product.title}</h3>

        <div className="rating border">
          <FaStar color="orange" />
          <span>{product.rating}</span>
        </div>

       
        <h4>${product.price}</h4>

        <button type="button" onClick={add()}>
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
