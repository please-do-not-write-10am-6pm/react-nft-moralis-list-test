import React from 'react'

import CollectionCard from '../CollectionCard'

import './index.css'

const PunkList = ({punkListData, setselectedPunk}) => {
  return (
    <div className="punkList">
      {punkListData.map((punk, index) => (
        <div
          onClick={() => {
            setselectedPunk(punk.token_id)
          }}
          key={index}
        >
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  )
}

export default PunkList
