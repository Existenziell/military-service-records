import { useEffect, useContext } from 'react'
import SelectList from './SelectList'
import Input from './Input'
import { AppContext, localStorageKey } from '../../context/AppContext'
import { motion } from 'framer-motion'

const Step2 = () => {

  const { values, setValues, handleChange } = useContext(AppContext)

  const paygrades = [
    { value: 'E-1', label: 'E-1' },
    { value: 'E-2', label: 'E-2' },
    { value: 'E-3', label: 'E-3' },
    { value: 'E-4', label: 'E-4' },
    { value: 'E-5', label: 'E-5' },
    { value: 'E-6', label: 'E-6' },
    { value: 'E-7', label: 'E-7' },
    { value: 'E-8', label: 'E-8' },
    { value: 'E-9', label: 'E-9' },
    { value: 'W-1', label: 'W-1' },
    { value: 'W-2', label: 'W-2' },
    { value: 'W-3', label: 'W-3' },
    { value: 'W-4', label: 'W-4' },
    { value: 'W-5', label: 'W-5' },
    { value: 'O-1', label: 'O-1' },
    { value: 'O-2', label: 'O-2' },
    { value: 'O-3', label: 'O-3' },
    { value: 'O-4', label: 'O-4' },
    { value: 'O-5', label: 'O-5' },
    { value: 'O-6', label: 'O-6' },
    { value: 'O-7', label: 'O-7' },
    { value: 'O-8', label: 'O-8' },
    { value: 'O-9', label: 'O-9' },
    { value: 'O-10', label: 'O-10' },
  ]

  useEffect(() => {
    const stickyValues = window.localStorage.getItem(localStorageKey)
    if (stickyValues !== null) {
      setValues({ ...JSON.parse(stickyValues) })
    }
  }, [])

  return (
    <motion.div
      animate={{ x: [1000, -100, 50, -10, 0] }}
      transition={{ ease: "easeInOut", duration: 1 }}>

      <div className='rounded-full border mb-8 w-8 h-8 flex items-center justify-center bg-brand text-white'>2</div>
      <div className='relative mb-8 mr-2 w-full'>
        <Input
          type='text' id='department' name='department' value={values.department} placeholder='Department, component and branch'
          handleChange={handleChange} required={true} disabled={false} />
      </div>

      <div className='rounded-full border mb-8 w-8 h-8 flex items-center justify-center bg-brand text-white'>3</div>
      <div className='relative mb-8 mr-2 w-full'>
        <Input
          type='number' id='socialsecurity' name='socialsecurity' value={values.socialsecurity} placeholder='Social Security Number'
          handleChange={handleChange} required={true} disabled={false}
        />
      </div>

      <div className='rounded-full border mb-8 w-8 h-8 flex items-center justify-center bg-brand text-white'>4</div>

      <div className='flex items-center justify-center mb-20'>
        <div className='relative mr-2 w-1/2'>
          <Input
            type='text' id='grade' name='grade' value={values.grade} placeholder='Grade, Rate or Rank'
            handleChange={handleChange} required={true} disabled={false}
          />
        </div>
        <div className='relative mr-2 w-1/2'>
          <SelectList
            options={paygrades}
            name='paygrade'
            label='Pay grade'
            styles=''
          />
        </div>
      </div>

    </motion.div>
  )
}

export default Step2
