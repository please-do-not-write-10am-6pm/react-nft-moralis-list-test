import React from 'react'

import weth from '../../assets/weth.png'

import './index.css'

const CollectionCard = ({id, name, traits}) => {
  return (
    <div className="collectionCard">
      {/* <img src={image} alt={name} /> */}
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="" />
          <div className="price">{traits}</div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
