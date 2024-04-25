import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { formRegist } from "../services/auth.services";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

const Regist = () => {
  // Hook redux untuk dispatch
  // const dispatch = useDispatch();

  // Hook redux untuk mengambil data store
  const state = useSelector((state) => state.cart);

  // state password
  const [readPassword, setReadPassword] = useState(false);

  // HANDLE FORM SUBMIT
  const handleSubmit = async (event) => {
    const data = {
      nama: event.target.username.value,
      password: event.target.password.value,
      asal: event.target.asal.value,
    };

    try {
      if (data) {
        await formRegist(data, (status, results) => {
          if (status) console.log("Register succesfully", results);
        });
      } else {
        throw new Error("Data kosong!!");
      }
    } catch (error) {
      console.error("Terjadi kesalahan: ", error);
    }

    // Add data store redux
    // dispatch(
    //   register({
    //     namaDepan: event.target.namaDepan.value,
    //     namaBelakang: event.target.namaBelakang.value,
    //   })
    // );
  };

  // HANDLE PASSWORD
  const password = useRef(null);
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

  //   mengirim data ke server
  useEffect(() => {
    const data = state.data.register;

    formRegist(data, (callback) => {
      console.log(callback);
    });
  }, [state.data]);

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
                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
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
                      Wellcome To Digital Admin
                    </h2>
                    <p className="text-[15px] text-[#777777]">
                      register your account
                    </p>
                  </div>

                  {/* form register */}
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
                        name="username"
                        id="username"
                        placeholder="Username"
                        className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
                        required
                      />
                    </div>

                    {/* asal */}
                    <div className="relative w-full h-[45px] flex items-center border border-[#5867DD] rounded-[50px]  ">
                      <label htmlFor="asal">
                        <AiOutlineHome className="w-[25px] h-[25px] ml-[22.53px] text-[#5867DD]" />
                      </label>
                      <input
                        type="text"
                        name="asal"
                        id="asal"
                        placeholder="Asal"
                        className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
                      />

                      {/* Element error */}
                      {/* {error && (
                        <p className="text-[10px] text-red-600">{error}</p>
                      )} */}
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
                        name="password"
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
                      {/* {error && (
                        <p className="text-[10px] text-red-600">{error}</p>
                      )} */}
                    </div>

                    {/* button login */}
                    <div className="w-full h-[45px] flex items-center bg-[#5867DD] rounded-[50px]">
                      <button className="w-full h-full text-[18px] text-[#FFFFFF]">
                        REGISTER
                      </button>
                    </div>

                    {/* forgot password */}
                    <div className="w-[200px] flex gap-x-[8px] mx-auto">
                      <img
                        src="../public/login/loginForgot.svg"
                        alt="remember"
                        className="self-center w-3.5 h-3.5"
                      />
                      <p className="text-[14px] text-[#5867DD]">
                        already have an account ?
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

export default Regist;
