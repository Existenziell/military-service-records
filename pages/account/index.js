import Head from 'next/head'
import { useState, useContext } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Wallet from '../../components/Wallet'
import { AppContext } from '../../context/AppContext'

const Account = () => {

  const [qrRevealed, setQrRevealed] = useState(false)
  const { walletConnected, setWalletConnected } = useContext(AppContext)

  const data = {
    firstname: "John",
    middlename: "Peter",
    lastname: "Doe",
    email: "john@doe.com",
    birthdate: "02/11/1971",
    department: 'Infantry',
    socialsecurity: 'AAA-GG-SSSS',
    grade: 'Lieutenant',
    paygrade: 'W4',
    birthdate: '1974/04/12',
    message: 'testing...',
    date: "2021/09/16"
  }

  return (
    <>
      <Head>
        <title>Account | Military Service Records</title>
      </Head>

      <div className="py-12">
        <h1 className='text-4xl text-center md:text-left mb-12'>Account</h1>
        <h2 className='text-2xl'>Welcome back, John Doe.</h2>

        <hr className='border-b border-dashed border-gray-300 my-6' />

        <div className='flex items-center'>
          <h3 className='text-lg w-1/6'>Authentication:</h3>

          {walletConnected ?
            qrRevealed ?
              <>
                <svg className='w-96 h-96' viewBox="-1 -1 23 23" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" id="qr code"><rect id="qr background" fillOpacity="1" fill="rgb(255, 255, 255)" x="-1" y="-1" width="23" height="23"></rect><path fillOpacity="1" fill="rgb(0, 0, 0)" id="qr pixels" fillRule="evenodd" d="M 9 0 L 10 0 L 10 1 L 9 1 z M 12 0 L 13 0 L 13 1 L 12 1 z M 8 1 L 9 1 L 9 2 L 8 2 z M 11 1 L 12 1 L 12 2 L 11 2 z M 9 2 L 10 2 L 10 3 L 9 3 z M 8 3 L 9 3 L 9 4 L 8 4 z M 11 3 L 12 3 L 12 4 L 13 4 L 13 8 L 14 8 L 14 9 L 13 9 L 13 10 L 12 10 L 12 8 L 10 8 L 10 6 L 9 6 L 9 7 L 8 7 L 8 5 L 10 5 L 10 4 L 11 4 zM 11 5 L 12 5 L 12 7 L 11 7 z M 0 8 L 5 8 L 5 9 L 4 9 L 4 11 L 5 11 L 5 13 L 0 13 L 0 12 L 3 12 L 3 9 L 1 9 L 1 10 L 0 10 z M 6 8 L 10 8 L 10 9 L 9 9 L 9 10 L 7 10 L 7 9 L 6 9 z M 15 8 L 16 8 L 16 9 L 15 9 z M 17 8 L 18 8 L 18 9 L 19 9 L 19 8 L 20 8 L 20 9 L 21 9 L 21 10 L 20 10 L 20 11 L 19 11 L 19 12 L 18 12 L 18 13 L 19 13 L 19 14 L 20 14 L 20 15 L 19 15 L 19 16 L 18 16 L 18 17 L 17 17 L 17 18 L 16 18 L 16 19 L 17 19 L 17 20 L 18 20 L 18 21 L 15 21 L 15 19 L 13 19 L 13 18 L 15 18 L 15 17 L 16 17 L 16 15 L 18 15 L 18 14 L 16 14 L 16 15 L 14 15 L 14 16 L 15 16 L 15 17 L 13 17 L 13 18 L 12 18 L 12 16 L 11 16 L 11 17 L 10 17 L 10 14 L 9 14 L 9 15 L 8 15 L 8 12 L 9 12 L 9 11 L 11 11 L 11 12 L 12 12 L 12 13 L 13 13 L 13 14 L 15 14 L 15 13 L 16 13 L 16 11 L 18 11 L 18 10 L 16 10 L 16 9 L 17 9 zM 11 14 L 12 14 L 12 15 L 11 15 z M 10 9 L 11 9 L 11 10 L 10 10 z M 1 10 L 2 10 L 2 11 L 1 11 z M 6 10 L 7 10 L 7 11 L 6 11 z M 11 10 L 12 10 L 12 11 L 11 11 z M 13 10 L 15 10 L 15 11 L 14 11 L 14 12 L 13 12 z M 6 12 L 7 12 L 7 13 L 6 13 z M 14 12 L 15 12 L 15 13 L 14 13 z M 20 12 L 21 12 L 21 14 L 20 14 z M 20 15 L 21 15 L 21 17 L 20 17 z M 8 16 L 9 16 L 9 19 L 10 19 L 10 21 L 8 21 z M 18 17 L 19 17 L 19 20 L 18 20 z M 10 18 L 12 18 L 12 19 L 10 19 z M 11 20 L 12 20 L 12 21 L 11 21 z M 19 20 L 20 20 L 20 21 L 19 21 z"></path><path id="qr squares" d="M0,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M14,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM15,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM16,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M0,14h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,15h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,16h3h0v0v3v0h0h-3h0v0v-3v0h0z" fillRule="evenodd" fillOpacity="1" fill="rgb(0, 0, 0)"></path></svg>
                <button onClick={() => setQrRevealed(!qrRevealed)} className='link text-sm ml-8'>Show NFT</button>
              </>
              :
              <>
                <motion.div
                  animate={{ x: [1000, -100, 50, -10, 0] }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className='flex flex-col items-center justify-evenly bg-nftbg bg-cover bg-center w-96 h-96 shadow-lg rounded'>
                  <div className='rounded text-white font-mono bg-black/40 backdrop-blur-sm px-4 py-2 flex flex-col items-center'>
                    <span>AR Token</span>
                  </div>
                  <div className='rounded text-white font-mono bg-black/40 backdrop-blur-sm px-4 py-2 flex flex-col items-center'>
                    <span>John Doe</span>
                    <span className='text-xs'>0x6bx5...xz70</span>
                  </div>
                </motion.div>
                <button onClick={() => setQrRevealed(!qrRevealed)} className='link text-sm ml-8'>Reveal QR</button>
              </>
            :
            <Wallet />
          }
        </div>

        <hr className='border-b border-dashed border-gray-300 my-6' />

        <div className='flex items-center'>
          <h3 className='text-lg w-1/6'>Activity:</h3>
          <p>Since your last visit, there has been<span className='font-bold text-xl'> 3 </span>new entries.<br />Review all activity <Link href='/account/activity'><a className='link'>here</a></Link>.</p>
        </div>

        <hr className='border-b border-dashed border-gray-300 my-6' />

        <div className='flex items-center'>
          <h3 className='text-lg w-1/6'>Stored Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <span className='link text-sm ml-8'>Request change</span>
        </div>

        <hr className='border-b border-dashed border-gray-300 my-6' />

        <div className='flex items-center'>
          <h3 className='text-lg w-1/6'>Notifications:</h3>
          <p>
            Currently, notifications are set to <span className='font-bold text-xl'> Email </span>
            <span className='link ml-8 text-sm'>change</span>
          </p>
        </div>


      </div>
    </>
  )
}

export default Account
