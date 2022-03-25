import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Head from 'next/head'
import PacmanLoader from 'react-spinners/PacmanLoader'
import Input from '../components/Form/Input'
import Textarea from '../components/Form/Textarea'

const Connect = () => {
  const [formData, setFormData] = useState()
  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  function setData(e) {
    const { name, value } = e
    setFormData({ ...formData, ...{ [name]: value } })
  }

  const submitForm = async e => {
    e.preventDefault()
    setSending(true)

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      res.ok ?
        setErrorMsg('That was successful, thank you!') && setIsSuccess(true)
        // Router.push('/success')
        :
        setErrorMsg(`Sorry, an error occured: ${res.statusText}`)
    } catch (error) {
      setErrorMsg('Sorry, an error occured. Have you tried turning it off and on again?')
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Military Service Records</title>
      </Head>

      <div className='pt-12 px-4 md:px-8 lg:w-2/3 lg:mx-auto'>
        <h1 className='text-4xl text-center md:text-left mb-8'>Contact</h1>

        <div className='px-4 pt-8 pb-0 sm:px-12 mt-6 shadow w-full bg-form bg-cover bg-no-repeat rounded-lg backdrop-blur-md text-left'>
          <form onSubmit={submitForm} className='pb-4 text-white'>

            <div className='relative mb-8'>
              <Input type='text' id='name' name='name' placeholder='Name'
                handleChange={setData} required={true} disabled={sending || isSuccess} />
            </div>
            <div className='relative mb-8'>
              <Input type='email' id='email' name='email' placeholder='Email'
                handleChange={setData} required={true} disabled={sending || isSuccess} />
            </div>
            <div className='relative'>
              <Textarea id='message' name='message' placeholder='Message' rows={10}
                handleChange={setData} required={true} disabled={sending} />
            </div>

            {errorMsg ?
              <div className='text-left bg-brand text-white block p-4 mt-4'>
                {errorMsg}
              </div>
              :
              sending ?
                <div className='my-8 h-16 mr-16 opacity-60 mb-8 mt-4'>
                  <PacmanLoader color={'white)'} size={30} />
                </div>
                :
                <input type='submit' className='button mb-8 mt-4' aria-label='Send Contact Form' value='Send'></input>
            }
          </form>
        </div>
      </div>
    </>
  )
}

export default Connect
