import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoArrowUndoOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const HeaderDashboard = (props) => {
  const { handleState } = props;

  // redux
  const stateRedux = useSelector(state => state.cart.dashboard.headerBar)

  return (
    <div className="flex w-full py-3 pt-5">
      <div className="flex self-center justify-between w-full">
        <div>
          <Link
            to={"#"}
            className="self-center text-2xl font-bold text-[#374BAE]">
            Dashboard
          </Link>
          <p className="self-center text-md text-[#374BAE]">
            Hi, Wellcome In Dashboard
          </p>
        </div>
        
        <div className="relative flex flex-col items-center self-center justify-center">  
          <div className="flex gap-x-3">
            <CgProfile className="self-center text-3xl text-[#374BAE]" />
            <h3 className="self-center text-[14px] text-light text-slate-600">
              Wellcome <span className="font-semibold">Lindan</span>
            </h3>
            <button onClick={handleState} className="text-slate-600">
              {stateRedux ? <BsChevronUp /> : <BsChevronDown />}
            </button>
          </div>
          
          {stateRedux && (
            <div
              className={`bg-[#FFFFFF] py-4 px-3 shadow-xl gap-y-3 rounded-md flex flex-col absolute top-8 transition-global w-3/5`}
            >
              <Link to={"/dashboard/profile"} className="flex items-center gap-x-3 text-slate-400 group">
                <CgProfile className="text-xl group-hover:text-[#374BAE] transition-global duration-500" />
                <h2 className="text-xs font-semibold group-hover:text-[#374BAE] transition-global duration-500">
                  Profile
                </h2>
              </Link>
              <Link className="flex items-center gap-x-3 text-slate-400 group">
                <IoSettingsOutline className="text-xl group-hover:text-[#374BAE] transition-global duration-500" />
                <h2 className="text-xs font-semibold group-hover:text-[#374BAE] transition-global duration-500">
                  Setting
                </h2>
              </Link>
              <Link to="/login-mahasiswa" className="flex items-center gap-x-3 text-slate-400 group">
                <IoArrowUndoOutline className="text-xl group-hover:text-[#374BAE] transition-global duration-500" />
                <h2 className="text-xs font-semibold group-hover:text-[#374BAE] transition-global duration-500">
                  Keluar
                </h2>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;

{
  /* <div className="w-full h-[55px] bg-[#FFFFFF] flex justify-end border-b-[2px] fixed top-0 right-0">
      <div className="self-center w-[70%] flex justify-between mx-5">
        <Link
          to={"#"}
          className="self-center text[24px] font-bold shadow shadow-[#5867DD] text-[#5867DD] px-4 py-1 rounded"
        >
          Dashboard
        </Link>
        <div className="flex self-center gap-x-2 top-2 right-6">
          <h3 className="self-center text-[14px] text-light">
            Wellcome <span className="font-semibold">{username}</span>
          </h3>
          <img
            src="../../public/dashboard/dashboardAdmin.svg"
            alt="admin"
            className="rounded-full w-[40px]"
          />
          <button>
            <BsChevronDown />
          </button>
        </div>
      </div>
    </div> */
}
