import { useEffect, useRef, useState } from "react";

// import Regist from "./Pages/Regist";
function App() {
  const password = useRef(null)
  const [read, setRead] = useState(false)

  const handleForm = (event) => {
    event.preventDefault();
  };

  // handle read password
  const handlePassword = () => {
    if(read === false) {
      setRead(true)
    } else {
      setRead(false)
    }
  }

  useEffect(() => {
    (read ? password.current.type = 'text' : password.current.type = 'password')
  }, [read])

  return (
    <>
      {/* <Regist /> */}
      {/* login page */}
      <section className="w-full h-screen ">
        <div className="container mx-auto ">
          <div className="flex">
            {/* login left */}
            <div className="relative w-[960px] h-screen flex justify-center items-center">
              <img
                src="../public/Layer.svg"
                alt="layer"
                className="absolute top-0 w-full h-full"
              />
              <div className="w-[508px] h-[313px] z-50">
                <img
                  src="/public/LoginSvg1.svg"
                  alt="svg"
                  className="self-center w-full h-full"
                />
              </div>
            </div>
            {/* login right */}
            <div className="w-[960px] h-screen flex justify-center items-center">
              <div className="w-[508px] ">
                <form
                  onSubmit={handleForm}
                  className="flex flex-col justify-center items-center gap-y-[30px]"
                >
                  {/* form title */}
                  <div className="w-[300px] flex justify-between items-center ">
                    <img src="../public/loginRight1.svg" alt="logo" />
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
                      Sign in to continue to Income Tax.
                    </p>
                  </div>

                  {/* form input */}
                  <div className="w-[371.22px] flex flex-col gap-y-[18px]  ">
                    {/* username */}
                    <div className="w-full h-[45px] flex items-center border border-[#5867DD] rounded-[50px]  ">
                      <label htmlFor="username">

                      <img
                        src="../public/loginUsername.svg"
                        alt="username"
                        className="w-[25px] h-[25px] ml-[22.53px]"
                      />
                      </label>
                      <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
                      />
                    </div>

                    {/* password */}
                    <div className="w-full h-[45px] flex items-center border border-[#5867DD] rounded-[50px]  ">
                      <label htmlFor="password">
                        <img
                          src="../public/loginPassword.svg"
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
                    </div>

                    {/* remember password */}
                    <div className="w-[120.28px] flex gap-x-[8px] ml-[2px]">
                      <input type="checkbox" name="" onChange={handlePassword} id="" className="self-center w-3 h-3 mt-[1px]"/>
                      <p className="self-center text-[14px] text-[#5867DD]">Remember me</p>
                    </div>

                    {/* button login */}
                    <div className="w-full h-[45px] flex items-center bg-[#5867DD] rounded-[50px]">
                      <button className="w-full h-full text-[18px] text-[#FFFFFF]">
                        LOGIN
                      </button>
                    </div>

                    {/* forgot password */}
                    <div className="w-[140.28px] flex gap-x-[8px] mx-auto">
                      <img
                        src="../public/loginForgot.svg"
                        alt="remember"
                        className="self-center w-3.5 h-3.5"
                      />
                      <p className="text-[14px] text-[#5867DD]">
                        Forgot Password?
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
