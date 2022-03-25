import { createContext, useContext, useState } from 'react'

export const AppContext = createContext()
export const localStorageKey = 'AR_FormData'

// App State
export const StateProvider = ({ children }) => {

  const [currentStep, setCurrentStep] = useState(1)
  const lastStep = 3
  const [walletConnected, setWalletConnected] = useState(false)

  const [values, setValues] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    department: '',
    socialsecurity: '',
    grade: '',
    paygrade: '',
    birthdate: '',
    message: '',
    date: '',
  })

  const handleChange = ({ name, value }) => {
    setValues({ ...values, [name]: value })
    window.localStorage.setItem(localStorageKey, JSON.stringify({ ...values, [name]: value }))
  }

  return (
    <AppContext.Provider value={{ values, setValues, handleChange, currentStep, setCurrentStep, lastStep, walletConnected, setWalletConnected }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
