import {useMemo} from 'react'

import './index.css'

const Modal = (punk, handleClose) => {
  const metadata = useMemo(() => {
    if (punk.metadata) {
      return JSON.parse(punk.metadata)
    }
  }, [punk])

  return (
    <div className="collectionCard">
      <div className="details">
        <div className="name">
          {punk.name} <div className="id">.#{punk.token_id}</div>
        </div>
        <div className="priceContainer">
          <div className="wethImage">{metadata?.description}</div>
          <div className="price">{punk.amount}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
