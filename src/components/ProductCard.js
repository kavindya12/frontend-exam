import React from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />);
      } else if (i - 0.5 <= rating) {
        stars.push(
          <div key={i} style={{ position: 'relative', display: 'inline-block' }}>
            <Star size={16} stroke="#e5e7eb" fill="#e5e7eb" />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', overflow: 'hidden' }}>
              <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} size={16} stroke="#e5e7eb" fill="#e5e7eb" />);
      }
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-badge">
        {product.stock < 10 && <span className="badge low-stock">Low Stock</span>}
        {product.rating >= 4.5 && <span className="badge best-seller">Best Seller</span>}
      </div>

      {/* 🔥 GRID IMAGE WRAPPER */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>

        <div className="rating">
          {renderStars(product.rating)}
          <span className="rating-value">({product.rating})</span>
        </div>

        <div className="product-footer">
          <div className="price-info">
            <p className="price">LKR {product.price.toFixed(2)}</p>
            <p className="stock">Stock: {product.stock}</p>
          </div>

          <button className="btn btn-primary" onClick={() => addToCart(product)} disabled={product.stock === 0}>
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ❌ LIST VIEW — NOT CHANGED */
const ProductListView = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-list-view">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">LKR {product.price.toFixed(2)}</p>
        <p className="stock">Stock: {product.stock}</p>
        <button onClick={() => addToCart(product)} disabled={product.stock === 0}>
          {product.stock === 0 ? 'Out' : 'Add'}
        </button>
      </div>
    </div>
  );
};

export { ProductCard, ProductListView };
export default ProductCard;
