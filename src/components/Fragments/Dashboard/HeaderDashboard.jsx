import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const HeaderDashboard = () => {
  return (
    <div className="flex w-full py-3 pt-5">
      <div className="flex self-center justify-between w-full mx-8">
        <div>
          <Link
            to={"#"}
            className="self-center text-2xl font-bold text-[#374BAE]"
          >
            Dashboard
          </Link>
          <p className="self-center text-md text-[#374BAE]">
            Hi, Wellcome In Dashboard
          </p>
        </div>
        <div className="flex self-center gap-x-2">
          <CgProfile className="self-center text-3xl text-[#374BAE]" />
          <h3 className="self-center text-[14px] text-light text-slate-600">
            Wellcome <span className="font-semibold">Lindan</span>
          </h3>
          <button className="text-slate-600">
            <BsChevronDown />
          </button>
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
