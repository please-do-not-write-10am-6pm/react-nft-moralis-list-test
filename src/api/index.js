import {default as Moralis} from 'moralis'
import {EvmChain} from '@moralisweb3/common-evm-utils'

;(async () => {
  if (!Moralis.Core.isStarted) {
    await Moralis.start({
      apiKey: 'b1g1MKT6OZCab2lxT4LuGGbGHEWTJAbJVc2T1GswrFKyIu6uZepVtN4Y0Mlc25RB'
    })
  }
})()

const address = '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'
const chain = EvmChain.ETHEREUM

export const getNFTs = async () => {
  const result = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain
  })
  return result
}
