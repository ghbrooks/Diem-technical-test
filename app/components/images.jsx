import React from 'react';

export default function Images({ product }) {
  return (
    <section className="product-images">
      <div className="product-images-primary">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="product-images-secondary">
        {product.images.slice(1).map((image) => (
          <a href={image} target="_blank">
            <img src={image} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
}
