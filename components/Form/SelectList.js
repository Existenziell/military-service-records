import { useEffect, useState, useContext } from "react"
import { AppContext, localStorageKey } from '../../context/AppContext'
import Select from 'react-select'

const SelectList = ({ options, name, label, styles }) => {

  const [selectedOption, setSelectedOption] = useState(null)
  const { handleChange } = useContext(AppContext)

  const handleFirst = (selection) => {
    const value = selection.value
    setSelectedOption({ selection })
    handleChange({ name, value })
  }

  useEffect(() => {
    // If option is present in local storage, set local selectedOption
    const stickyValues = JSON.parse(window.localStorage.getItem(localStorageKey))
    if (stickyValues && stickyValues[name] !== '') {
      const filtered = options.filter(o => (o.value === stickyValues[name]))[0]
      setSelectedOption(filtered)
    }
  }, [handleChange])

  return (
    <div className={`${styles} flex flex-col md:flex-row items-start md:items-center md:space-x-4`}>
      <label
        htmlFor={name}
        className='mb-2 md:mb-0 min-w-max text-left'>
        {label}
      </label>
      <div className="w-full">
        <Select
          defaultValue={selectedOption}
          onChange={handleFirst}
          options={options}
          instanceId={1337}
          placeholder={selectedOption?.label}
          className='text-brand'
        />
      </div>
    </div>
  )
}

export default SelectList
