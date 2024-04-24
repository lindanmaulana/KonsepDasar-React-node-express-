import { useEffect, useRef, useState } from "react";
import { formLogin } from "../services/auth.services";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/slices/cartSlices";

const Login = () => {
  // state handle read password
  const password = useRef(null);
  const [read, setRead] = useState(false);

  // state redux dispatch
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  
  // state count id
  const [count, setCount] = useState(1);

  // state error
  const [error, setError] = useState(null);

  // state login
  const [validLogin, setValidLogin] = useState('')

  /* Handle inputan & hit api */
  const handleForm = async (event) => {
    event.preventDefault();

    // Input dari form login user
    const data = {
      id: count,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    // validate username & password
    if (data.username && data.password) {
      setCount(count + 1);

      // Hit api
      await formLogin(data).then((res) => {
        // validate nilai res
        if (res) dispatch(register(res));

        // send status login
        if (res === "login_berhasil") setValidLogin(res);
        console.log({
          res: res,
        });
      });
    } else {
      setError("Data tidak boleh kosong!!!");
    }
  };

  // swap pages
  useEffect(() => {
    if(validLogin){
      window.location.href = "/";
    }
  }, [validLogin])

  // handle read password
  const handlePassword = () => {
    if (read === false) {
      setRead(true);
    } else {
      setRead(false);
    }
  };

  useEffect(() => {
    read
      ? (password.current.type = "text")
      : (password.current.type = "password");
  }, [read]);

  console.log(state);
  console.log(count);
  return (
    <>
      {/* login page */}
      <section className="w-full h-screen ">
        <div className="container mx-auto ">
          <div className="flex">
            {/* login left */}
            <div className="relative w-[960px] h-screen flex justify-center items-center">
              <img
                src="../../public/Layer.svg"
                alt="layer"
                className="absolute top-0 w-full h-full"
              />
              <div className="w-[508px] h-[313px] z-50">
                <img
                  src="../../public/login/LoginSvg1.svg"
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
                      Sign in to continue to Income Tax.
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

                      {/* Element error */}
                      {error && (
                        <p className="text-[10px] text-red-600">{error}</p>
                      )}
                      
                    </div>

                    {/* remember password */}
                    <div className="w-[120.28px] flex gap-x-[8px] ml-[2px]">
                      <input
                        type="checkbox"
                        name=""
                        onChange={handlePassword}
                        id=""
                        className="self-center w-3 h-3 mt-[1px]"
                      />
                      <p className="self-center text-[14px] text-[#5867DD]">
                        Remember me
                      </p>
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
                        src="../public/login/loginForgot.svg"
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

        {/* footer content */}
        <footer className="fixed bottom-0 w-full">
          <div className="absolute bottom-2 right-0 w-[860px] flex justify-between px-8">
            <p className="w-[236px] text-[14px] text-[#5867DD] ">
              © 2023 | All rights reserved
            </p>
            <ul className="flex gap-x-8 text-[14px] text-[#5867DD] ">
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Legal</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Login;
