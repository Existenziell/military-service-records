import { validateTextarea } from "../../lib/validate"

const Textarea = ({ id, name, message, placeholder, rows, handleChange, required, disabled }) => {
  return (
    <>
      <textarea
        id={id}
        name={name}
        onChange={e => handleChange({ name: e.target.name, value: e.target.value })}
        defaultValue={message}
        rows={rows}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className='peer h-full w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4 py-4'
        onBlur={validateTextarea}
      >
      </textarea>
      <label
        htmlFor={id}
        className='absolute -top-5 left-0 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-white peer-focus:text-sm'>
        {placeholder}
      </label>
    </>
  )
}

export default Textarea
