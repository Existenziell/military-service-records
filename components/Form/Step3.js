import { useEffect, useContext } from 'react'
import { AppContext, localStorageKey, } from '../../context/AppContext'
import DPicker from './DatePicker'
import BPicker from './BirthdayPicker'
import Textarea from './Textarea'
import { motion } from 'framer-motion'

const Step3 = () => {

  const { values, setValues, handleChange } = useContext(AppContext)

  useEffect(() => {
    const stickyValues = window.localStorage.getItem(localStorageKey)
    if (stickyValues !== null) {
      setValues({ ...JSON.parse(stickyValues) })
    }
  }, [])

  return (
    <>
      <div className='flex items-center justify-between mb-12 mr-2 w-full'>
        <label
          htmlFor='gradelevel'
          className='mr-4 min-w-max'>
          Date of Birth:
        </label>

        <BPicker name='birthdate' />
      </div>

      <div className='relative'>
        <Textarea id='message' name='message' placeholder='Notes' rows={10} message={values.message}
          handleChange={handleChange} required={true} disabled={false} />
      </div>

      <div className='flex items-center space-x-8'>
        <label
          htmlFor='gradelevel'
          className='mr-4 min-w-max'>
          Date of Grade:
        </label>
        <DPicker name='date' styles='my-8 inline' />
      </div>
    </>
  )
}

export default Step3
