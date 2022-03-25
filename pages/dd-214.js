import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext } from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import Nav from '../components/Form/Nav'
import Step1 from '../components/Form/Step1'
import Step2 from '../components/Form/Step2'
import Step3 from '../components/Form/Step3'
import { AppContext } from '../context/AppContext'

const DD214 = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { values, setValues, currentStep, setCurrentStep } = useContext(AppContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = values

    try {
      const res = await fetch(`/api/addStudent`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      setLoading(false)
      setSuccess(true)
      setCurrentStep(1)
      return res
    } catch (error) {
      // console.error(error);
      return error
    }
  }

  return (
    <>
      <Head>
        <title>DD214 | Military Service Records</title>
      </Head>

      <div className="pt-12">

        <div className='text-center md:text-left'>
          <h1 className='text-4xl mb-2'>DD-214 Form</h1>
          <p className='mb-12'>CERTIFICATE OF RELEASE OR DISCHARGE FROM ACTIVE DUTY </p>
        </div>
        {success ?
          <div className='flex flex-col items-start'>
            <h1 className='text-2xl mb-2'>Transaction was successful</h1>
            <a href='https://ropsten.etherscan.io/tx/0x8a360917e01c35eb118de1792836f92770654f02c35d19ff51972e28de6c247a' className='link mb-8' target='_blank'>&rarr; Verify transaction on Blockchain</a>
            <Link href='/reports'><a className='link'>Download documents</a></Link>
            <Link href='/account'><a className='link'>See Account</a></Link>
          </div>
          :
          loading ?
            <div className='mt-32 ml-40'>
              <ClimbingBoxLoader color={'var(--color-brand)'} loading={loading} size={25} />
            </div>
            :
            <form onSubmit={handleSubmit} className='px-4 pt-12 pb-8 sm:px-12 rounded bg-form bg-cover text-white'>
              {currentStep === 1 && <Step1 />}
              {currentStep === 2 && <Step2 />}
              {currentStep === 3 && <Step3 />}
              <Nav />
            </form>
        }
      </div>
    </>
  )
}

export default DD214
