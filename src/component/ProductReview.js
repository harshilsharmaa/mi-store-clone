import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/ProductReview.css'

const ProductReview = ({productReviews}) => {
  return (
    <div className="ProductReview">

        {productReviews.map((item,index)=>(
            <ProductReviewCard key={item.image} image={item.image} review={item.review} name={item.name} review={item.review} price={item.price}/>

        ))}
    </div>
  )
}

export default ProductReview