
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import { hasEthereum } from '../lib/ethereum'
import { ConnectWallet } from './connectWallet'
import { AppContext } from '../context/AppContext'
import Link from 'next/link'

const Wallet = () => {
  const [connectedWalletAddress, setConnectedWalletAddress] = useState('')
  const router = useRouter()

  const { walletConnected, setWalletConnected } = useContext(AppContext)

  const context = useContext(AppContext)

  useEffect(() => {
    async function setAddress() {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      try {
        const signerAddress = await signer.getAddress()
        setConnectedWalletAddress(signerAddress)
        setWalletConnected(true)
      } catch {
        setWalletConnected(false)
        setConnectedWalletAddress('')
      }
    }

    if (hasEthereum()) setAddress()

    window.ethereum?.on('connect', (accounts) => {
      // console.log('Connected:', accounts, getNameFromChainId(parseInt(accounts.chainId, 16)))
    })

    window.ethereum?.on('accountsChanged', (accounts) => {
      // console.log('accountsChanged', accounts)
      router.reload(window.location.pathname)
    })

    window.ethereum?.on('chainChanged', (chainId) => {
      // console.log("chainChanged", chainId);
    })
  }, [router])

  return (
    <div className='button text-xs'>
      {walletConnected ?
        <Link href='/wallet'>
          <a className='bla'>
            {connectedWalletAddress.substring(0, 5)}&#8230;{connectedWalletAddress.slice(connectedWalletAddress.length - 4)}
          </a>
        </Link>
        :
        <ConnectWallet />
      }
    </div>
  )
}

export default Wallet
