import React from 'react'

import CollectionCard from '../CollectionCard'

import './index.css'

const PunkList = ({punkListData, setselectedPunk}) => {
  return (
    <div className="punkList">
      {punkListData.map((punk, index) => (
        <div
          onClick={() => {
            setselectedPunk(punk)
          }}
          key={index}
        >
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.amount}
          />
        </div>
      ))}
    </div>
  )
}

export default PunkList
