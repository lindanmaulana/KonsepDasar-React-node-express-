import { useEffect, useRef, useState } from "react";
import { formLogin } from "../services/auth.services";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/cartSlices";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import ImageForm from "../components/Elements/Form/ImageForm";

const LoginPage = () => {
  // state handle read password
  const password = useRef(null);

  // state redux dispatch
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);

  // state error
  const [error, setError] = useState(null);

  // state loading
  const [loading, setLoading] = useState("");

  // read
  const [readPassword, setReadPassword] = useState(false);

  /* Handle inputan & hit api */
  const handleForm = async (event) => {
    event.preventDefault();
    setLoading("connection loading..");

    // Input dari form login user
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    // validate username & password
    try {
      if (data.username && data.password) {
        await formLogin(data)
          .then((res) => {
            // validate nilai res
            if (res) dispatch(login(data.username));

            // send status login
            if (res === data.username) {
              window.location.href = "/dashboard";
            } else {
              window.location.href = "/login";
              throw new Error("Akun tidak sesuai");
            }
          })
          .finally(() => {
            setLoading("");
          });
      } else {
        setError("Data tidak boleh kosong!!!");
      }
    } catch (error) {
      console.error("server ", error);
      setError(error);
    }
  };

  // Lihat password dan sembunyikan password
  const handlePassword = (event) => {
    event.preventDefault();
    if (!readPassword) {
      password.current.type = "text";
      setReadPassword(true);
    } else {
      password.current.type = "password";
      setReadPassword(false);
    }
  };

  return (
    <>
      {/* login page */}
      <section className="w-full h-screen ">
        <div className="container mx-auto ">
          <div className="flex">
            {/* login left */}
            <ImageForm />
            {/* <div className="relative w-[960px] h-screen flex justify-center items-center">
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
            </div> */}

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
                    <div className="w-full flex justify-between">
                      <div className="w-[140.28px] flex gap-x-[8px]">
                        <img
                          src="../public/login/loginForgot.svg"
                          alt="remember"
                          className="self-center w-3.5 h-3.5"
                        />
                        <p className="text-[14px] text-[#5867DD]">
                          Forgot Password?
                        </p>
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

export default LoginPage;
