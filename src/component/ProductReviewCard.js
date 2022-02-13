import React from 'react'
import '../styles/ProductReviewCard.css'

const ProductReviewCard = ({image, name, price, index, review}) => {
  return (
    <div className="ProductReviewCard">
        <img src={image} alt={`${index} image`} />
        <h6>{name}</h6>
        <p>{review}<span>{price}</span></p>
        
    </div>
  )
}

export default ProductReviewCard