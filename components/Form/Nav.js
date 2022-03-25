import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Nav = () => {
  const { currentStep, setCurrentStep, lastStep } = useContext(AppContext)

  return (
    <div className='flex items-center justify-between'>
      <div>
        {currentStep > 1 &&
          <p className='button' onClick={() => setCurrentStep(currentStep - 1)}>Back</p>
        }
      </div>
      <div>
        {currentStep < lastStep &&
          <p className='button' onClick={() => setCurrentStep(currentStep + 1)}>Next</p>
        }
      </div>
      {currentStep === lastStep &&
        <button type='submit' className='button'>Submit</button>
      }
    </div>
  )
}

export default Nav
