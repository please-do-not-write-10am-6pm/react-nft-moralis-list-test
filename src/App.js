import {useState, useEffect, useMemo} from 'react'
// import axios from 'axios'
import {useWeb3} from '@3rdweb/hooks'
import {ThirdwebSDK} from '@3rdweb/sdk'

// import CollectionCard from './components/CollectionCard'
import Header from './components/Header'
import PunkList from './components/PunkList'
import Main from './components/Main'

import './App.css'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  const handleSelectedPunk = (token_id) => {
    setSelectedPunk(token_id)
  }

  const {provider} = useWeb3()

  // const getMyNfts = async () => {
  //   const openSeaData = await axios.get(
  //     'https://testnets.opensea.io/assets/goerli/0x744df993f93c89801cadbea8a4a3fd2b4a443d2c/1754'
  //   )
  //   console.log('openSeaData.data.assets', openSeaData.data.assets)
  //   setPunkListData(openSeaData.data.assets)
  // }

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const marketAddr = '0x93A771F7ce845C33381f677489cF21a5964EDD0b'
    const url =
      'https://eth-rinkeby.alchemyapi.io/v2/BGCbYsNijEj8yuoqWm6Srd8ybug3zlzi'

    const sdk = new ThirdwebSDK(provider.getSigner(), url)
    return sdk.getMarketplaceModule(marketAddr)
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      setPunkListData(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])

  console.log('PunkList State : ', punkListData)
  return (
    <div className="app">
      <Header />
      {/* <CollectionCard
        id={0}
        name="Bandana Punk"
        traits={[{value: 7}]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
      /> */}
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setselectedPunk={(token_id) => handleSelectedPunk(token_id)}
          />
        </>
      )}
    </div>
  )
}

export default App
