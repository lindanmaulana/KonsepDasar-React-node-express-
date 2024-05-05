import { useRef, useState } from "react"
import FooterForm from "../../Elements/Form/FooterForm"
import ImageForm from "../../Elements/Form/ImageForm"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginFragments = (props) => {
    const {title, handleForm, onUsername, onPassword, value, loading, error, link, loginToRole} = props

    const password = useRef(null)
    const [readPassword, setReadPassword] = useState(false)
    const handlePassword = (event) => {
        event.preventDefault()
        if(!readPassword) {
            password.current.type = "text"
            setReadPassword(true)
        }else {
            password.current.type = "password"
            setReadPassword(false)
        }
    }

  return (
    <>
    {/* login page */}
    <section className="w-full h-screen ">
      <div className="container mx-auto ">
        <div className="flex">
          {/* login left */}
          <ImageForm />

          {/* login right */}
          <div className="w-[960px] h-screen flex justify-center items-center">
            <div className="w-[508px] ">
              {/* Authlayouts */}
              <div className="flex flex-col justify-center items-center gap-y-[30px] mb-[30px]">
                <div className="w-[300px] flex justify-between items-center ">
                  <img src="../../public/authIcons/authLogo.svg" alt="logo" />
                  <h2 className="font-bold text-[35px] text-[#000000]">
                    Digital Admin
                  </h2>
                </div>
                <div className="min-w-[337.28px] text-center">
                  <h2 className="text-[28px] font-bold text-[#000000]">
                    Wellcome Back! {title}
                  </h2>
                  <p className="text-[15px] text-[#777777]">
                    Sign in to continue to Income Tax. <span>{loading}</span>
                  </p>
                </div>
              </div>

              {/* form start */}
              <form
                onSubmit={handleForm}
                className="flex items-center justify-center"
              >
                <div className="w-[371.22px] flex flex-col gap-y-[18px]  ">
                  {/* username */}
                  <div className="w-full h-[45px] flex items-center border border-[#5867DD] rounded-[50px]  ">
                    <label htmlFor="username">
                      <img
                        src="/public/authIcons/authUsername.svg"
                        alt="username"
                        className="w-[25px] h-[25px] ml-[22.53px]"
                      />
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username"
                      onChange={onUsername}
                      value={value.username}
                      className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
                      required
                    />
                  </div>

                  {/* password */}
                  <div className="relative w-full h-[45px] flex items-center border border-[#5867DD] rounded-[50px]  ">
                    <label htmlFor="password">
                      <img
                        src="/public/authIcons/authPassword.svg"
                        alt="username"
                        className="w-[25px] h-[25px] ml-[22.53px]"
                      />
                    </label>
                    <input
                      type="password"
                      ref={password}
                      id="password"
                      placeholder="Password"
                      onChange={onPassword}
                      value={value.password}
                      className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
                    />
                    <button
                      onClick={handlePassword}
                      className="absolute right-5 self-center text-[14px] text-[#5867DD]"
                    >
                      {readPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </button>

                    {/* Element error */}
                    {error && (
                      <p className="text-[10px] text-red-600">{error}</p>
                    )}
                  </div>

                  {/* button login */}
                  <div className="w-full h-[45px] flex items-center bg-[#5867DD] rounded-[50px]">
                    <button className="w-full h-full text-[18px] text-[#FFFFFF]">
                      LOGIN
                    </button>
                  </div>

                  {/* Link switch page */}
                  <div className="flex justify-between w-full">
                    <div className="w-[140.28px] flex gap-x-[8px]">
                      <img
                        src="/public/authIcons/authForgot.svg"
                        alt="remember"
                        className="self-center w-3.5 h-3.5"
                      />
                      <Link to="/" className="text-[14px] text-[#5867DD]">
                        Back to Home?
                      </Link>
                    </div>
                    <Link
                      to={`/${link}`}
                      className="self-center text-[14px] text-[#5867DD]"
                    >
                      Log in as a {loginToRole}
                    </Link>
                  </div>
                </div>
              </form>
              {/* form end */}
            </div>
          </div>
        </div>
      </div>

      {/* footer content */}
      <FooterForm />
    </section>
  </>
  )
}

export default LoginFragments
