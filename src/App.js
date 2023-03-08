import {useState, useEffect} from 'react'

import {getNFTs} from './api'

import Header from './components/Header'
import PunkList from './components/PunkList'
import Main from './components/Main'
import Modal from './components/Modal'

import './App.css'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleSelectedPunk = (punk) => {
    setSelectedPunk(punk)
    setShowModal(true)
  }

  useEffect(() => {
    ;(async () => {
      const res = await getNFTs()
      const {result} = res.toJSON()
      console.log('result', result)

      if (result) {
        setPunkListData(result)
      }
    })()
  }, [])

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setselectedPunk={(punk) => handleSelectedPunk(punk)}
          />
        </>
      )}
      {showModal && selectedPunk && (
        <Modal item={selectedPunk} handleClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default App
