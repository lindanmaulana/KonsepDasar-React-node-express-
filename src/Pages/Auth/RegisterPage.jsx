import { useRef, useState } from "react";
import { formRegist } from "../../services/auth.services";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import ImageForm from "../../components/Elements/Form/ImageForm";
import FooterForm from "../../components/Elements/Form/FooterForm";

const RegisterPage = () => {
  // Hook redux untuk dispatch
  // const dispatch = useDispatch();

  // Hook redux untuk mengambil data store
  // const state = useSelector((state) => state.cart);

  // state password
  const [readPassword, setReadPassword] = useState(false);

  // HANDLE FORM SUBMIT
  const handleSubmit = async (event) => {
    const data = {
      username: event.target.username.value,
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

  return (
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
                <div className="w-[337.28px] text-center">
                  <h2 className="text-[28px] font-bold text-[#000000]">
                    Wellcome Back! Admin
                  </h2>
                  <p className="text-[15px] text-[#777777]">
                    register your account
                  </p>
                </div>
              </div>

              {/* form */}
              <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center"
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
                      name="username"
                      placeholder="Username"
                      className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
                      required
                    />
                  </div>

                  {/* asal */}
                  <div className="w-full h-[45px] flex items-center border border-[#5867DD] rounded-[50px]  ">
                    <label htmlFor="asal">
                      <AiOutlineHome className="w-[25px] h-[25px] ml-[22.53px] text-[#5867DD]" />
                    </label>
                    <input
                      type="text"
                      id="asal"
                      name="asal"
                      placeholder="Asal"
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
                      name="password"
                      placeholder="Password"
                      className="placeholder:text-[#5867DD] ml-[12px] bg-transparent outline-none "
                    />
                    <button
                      onClick={handlePassword}
                      className="absolute right-5 self-center text-[14px] text-[#5867DD]"
                    >
                      {readPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </button>
                  </div>

                  {/* button login */}
                  <div className="w-full h-[45px] flex items-center bg-[#5867DD] rounded-[50px]">
                    <button className="w-full h-full text-[18px] text-[#FFFFFF]">
                      REGISTER
                    </button>
                  </div>

                  {/* forgot password */}
                  <div className="w-[200px] flex justify-center items-center mx-auto">
                    <Link to={"/login"} className="text-[14px] text-[#5867DD]">
                      already have an account ?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* footer content */}
      <FooterForm />
    </section>
  );
};

export default RegisterPage;
