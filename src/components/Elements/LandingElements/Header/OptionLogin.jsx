import { Link } from "react-router-dom";

const OptionLogin = (props) => {
    const {loading} = props
    
  return (
    <div
      className={`fixed top-0 right-[50%] translate-x-[50%] flex flex-col justify-center items-center w-full h-full transition-all ${
        loading ? "opacity-1" : "opacity-0"
      } duration-1000 backdrop-blur-md bg-black/80 ease-in-out z-50`}
    >
      <div className="px-20 py-10 bg-white rounded-md backdrop-blur-md">
        <h3 className="mb-10 text-3xl font-bold">Login to your account</h3>
        <div className="flex flex-col items-center justify-center text-center text-white gap-y-2">
          <Link
            to="/login-admin"
            className="btn-login bg-[#335DFF] hover:bg-white border hover:text-[#335DFF] hover:border-[#335DFF]"
          >
            Admin
          </Link>
          <Link
            to="/login-mahasiswa"
            className="border btn-login bg-slate-700 hover:bg-white hover:border-slate-700 hover:text-slate-700"
          >
            Mahasiswa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OptionLogin;
