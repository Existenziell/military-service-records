import { validateInput } from "../../lib/validate"

const Input = ({ type, id, name, value, placeholder, handleChange, required, disabled, styles }) => {

  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        className={`${styles} peer w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded px-5 py-4 text-2xl border-2 border-transparent`}
        onChange={e => handleChange({ name: e.target.name, value: e.target.value })}
        onBlur={validateInput}
      />
      <label
        htmlFor={id}
        className='absolute -top-5 left-0 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-white peer-focus:text-sm'>
        {placeholder}
      </label>
    </>
  )
}

export default Input
