import { useState } from "react"
import {IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
const InputForm = (props) => {
    const {htmlFor, src, alt, type, name, password, id, placeholder}  = props
    const [readPassword, setReadPassword] = useState(false)
    const handlePassword = () => {
        if(!readPassword) {
            password.type.current = 'text'
            setReadPassword(false)
        } else {
            password.current.type = 'password'
            setReadPassword(true)
        }
    }
  return (
    <div className="relative w-full h-[45px] flex items-center border border-[#5867DD] rounded-[50px]  ">
    <label htmlFor={htmlFor}>
      <img
        src={`../public/${src}`}
        alt={alt}
        className="w-[25px] h-[25px] ml-[22.53px]"
      />
    </label>
    <input
      type={type}
      name={name}
      ref={password}
      id={id}
      placeholder={placeholder}
      className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
    />
    <button
      onClick={handlePassword}
      className="absolute right-5 self-center text-[14px] text-[#5867DD]"
    >
      {readPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
    </button>

    {/* Element error */}
    {/* {error && (
      <p className="text-[10px] text-red-600">{error}</p>
    )} */}
  </div>
  )
}

export default InputForm
