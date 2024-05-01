import { Link } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useRef, useState } from "react";

const FormHero = (props) => {
  const { handleForm, loading, error } = props;

  const [readPassword, setReadPassword] = useState(false)
  const password = useRef(null)

  const handlePassword = () => {
    if(!readPassword) {
        password.current.type = 'text'
        setReadPassword(false)
    } else {
        password.current.type = 'password'
        setReadPassword(true)
    }
  }

  return (
    <div className="w-[960px] h-screen flex justify-center items-center">
      <div className="w-[508px] ">
        <form
          onSubmit={handleForm}
          className="flex flex-col justify-center items-center gap-y-[30px]"
        >
          {/* form title */}
          <div className="w-[300px] flex justify-between items-center ">
            <img src="../../public/login/loginRight1.svg" alt="logo" />
            <h2 className="font-bold text-[35px] text-[#000000]">
              Digital Admin
            </h2>
          </div>

          {/* form opening */}
          <div className="w-[337.28px] text-center">
            <h2 className="text-[28px] font-bold text-[#000000]">
              Wellcome Back! Admin
            </h2>
            <p className="text-[15px] text-[#777777]">
              Sign in to continue to Income Tax. <span>{loading}</span>
            </p>
          </div>

          {/* form input */}
          <div className="w-[371.22px] flex flex-col gap-y-[18px]  ">
            {/* username */}
            <div className="w-full h-[45px] flex items-center border border-[#5867DD] rounded-[50px]  ">
              <label htmlFor="username">
                <img
                  src="../../public/login/loginUsername.svg"
                  alt="username"
                  className="w-[25px] h-[25px] ml-[22.53px]"
                />
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
                required
              />
            </div>

            {/* password */}
            <div className="relative w-full h-[45px] flex items-center border border-[#5867DD] rounded-[50px]  ">
              <label htmlFor="password">
                <img
                  src="../public/login/loginPassword.svg"
                  alt="username"
                  className="w-[25px] h-[25px] ml-[22.53px]"
                />
              </label>
              <input
                type="password"
                ref={password}
                id="password"
                placeholder="Password"
                className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
              />
              <button
                onClick={handlePassword}
                className="absolute right-5 self-center text-[14px] text-[#5867DD]"
              >
                {readPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>

              {/* Element error */}
              {error && <p className="text-[10px] text-red-600">{error}</p>}
            </div>

            {/* button login */}
            <div className="w-full h-[45px] flex items-center bg-[#5867DD] rounded-[50px]">
              <button className="w-full h-full text-[18px] text-[#FFFFFF]">
                LOGIN
              </button>
            </div>

            {/* forgot password */}
            <div className="w-full flex justify-between">
              <div className="w-[140.28px] flex gap-x-[8px]">
                <img
                  src="../public/login/loginForgot.svg"
                  alt="remember"
                  className="self-center w-3.5 h-3.5"
                />
                <p className="text-[14px] text-[#5867DD]">Forgot Password?</p>
              </div>
              <Link
                to={"/register"}
                className="self-center text-[14px] text-[#5867DD]"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormHero;
