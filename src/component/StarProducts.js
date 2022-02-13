import React from 'react'
import '../styles/StarProducts.css'


const StarProducts = ({starProduct}) => {
  return (
    <div className="starproduct">
        <div><a href={starProduct[0].url}><img src={starProduct[0].image} alt="" /></a></div>
        <div className=''>
        <a href={starProduct[1].url}><img src={starProduct[1].image} alt="" /></a>
        <a href={starProduct[2].url}><img src={starProduct[2].image} alt="" /></a>
        <a href={starProduct[3].url}><img src={starProduct[3].image} alt="" /></a>
        </div>
    </div>
  )
}

export default StarProducts