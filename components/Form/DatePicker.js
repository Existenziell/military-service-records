import { useEffect, useState, useContext } from "react"
import { AppContext, localStorageKey } from '../../context/AppContext'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const DPicker = ({ name, styles }) => {
  const [startDate, setStartDate] = useState(Date.now())
  const { handleChange } = useContext(AppContext)

  const handleFirst = (date) => {
    setStartDate(date)
    const value = new Intl.DateTimeFormat('en-US').format(date)
    handleChange({ name, value })
  }

  useEffect(() => {
    // If date is in local storage, set local date in DatePicker
    const stickyValues = JSON.parse(window.localStorage.getItem(localStorageKey))
    if (stickyValues && stickyValues[name] !== '') {
      setStartDate(Date.parse(stickyValues[name]))
    }
  }, [])

  return (
    <div className={styles}>
      <DatePicker selected={startDate} onChange={date => handleFirst(date)} name={name} className='rounded px-4 py-2 text-center text-brand' />
    </div>
  )
}

export default DPicker
