import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {

  return (
    <>
      <div className='pt-12'>
        {/* <h1 className='text-4xl md:text-6xl text-center my-16'>Military Service Records</h1> */}
        <div className='w-2/3 mx-auto'>
          <Image src='/logo.png' width={812} height={232} layout='responsive' alt='Logo' />
        </div>
        <div className='flex flex-col items-center justify-center space-x-4 w-full'>

          <motion.div animate={{ y: [-50, 40, -30, 20, -10, 5, 0] }}
            transition={{ ease: "easeInOut", duration: 1 }} className='text-center my-12 flex items-center justify-center gap-4 max-h-32'>
            <div className='hover:scale-110 transition-all'>
              <Image src='/service_badge_1.png' width={80} height={80} alt='Badge1' />
            </div>
            <div className='hover:scale-110 transition-all'>
              <Image src='/service_badge_2.png' width={80} height={80} alt='Badge2' />
            </div>
            <div className='hover:scale-110 transition-all'>
              <Image src='/service_badge_3.png' width={80} height={80} alt='Badge3' />
            </div>
            <div className='hover:scale-110 transition-all'>
              <Image src='/service_badge_4.png' width={80} height={80} alt='Badge4' />
            </div>
            <div className='hover:scale-110 transition-all'>
              <Image src='/service_badge_5.png' width={80} height={80} alt='Badge5' />
            </div>
          </motion.div>
          <p className='max-w-lg text-xl text-justify'>Submit a military records request to get your DD214 or other military service records through this website.</p>
          <Link href='/dd-214'><a className='button my-16 mx-auto text-2xl hover:scale-105'>Start</a></Link>
        </div>

      </div>
    </>
  )
}
