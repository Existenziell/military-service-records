import { useEffect, useState, useContext } from "react"
import { AppContext, localStorageKey } from '../../context/AppContext'
import { BirthdayPicker } from "react-birthday-picker"

const BPicker = ({ name }) => {

  const [date, setDate] = useState(["Day", "Month", "Year"])
  const { handleChange } = useContext(AppContext)

  const handleFirst = (date) => {
    if (date) {
      // Format: dd/mm/yyyy
      const value = date.split('/').reverse().join('/')
      setDate(value)
      handleChange({ name, value })
    }
  }

  useEffect(() => {
    // If date is in local storage, set local date in BirthdayPicker
    const stickyValues = JSON.parse(window.localStorage.getItem(localStorageKey))
    if (stickyValues && stickyValues[name] !== '') {
      setDate(stickyValues[name].split('/'))
    }
  }, [])

  return (
    <BirthdayPicker
      onChange={handleFirst}
      placeHolders={date}
    />
  )
}

export default BPicker
