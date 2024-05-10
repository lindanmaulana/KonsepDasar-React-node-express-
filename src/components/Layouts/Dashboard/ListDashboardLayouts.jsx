import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const ListDashboardLayouts = (props) => {
    const {children} = props
  return (
    <div className="flex h-screen bg-[#6754B3] ">
      <div className="w-1/12">
        <div className="flex flex-col items-center justify-center w-full h-full pl-2 gap-y-4">
          <Link
            to={"/dashboard"}
            className="bg-[#FFFFFF] rounded-md hover:scale-125 btn-transition"
          >
            <IoIosArrowBack className="text-3xl text-[#6754B3]" />
          </Link>
          <Link
            to={"/"}
            className="bg-[#FFFFFF] rounded-md hover:scale-125 btn-transition"
          >
            <AiOutlineHome className="text-3xl text-[#6754B3]" />
          </Link>
        </div>
      </div>
      <section className="py-2 flex-1 overflow-y-scroll">
        <div className="flex flex-col w-full bg-[#FFFFFF] px-8 rounded-2xl">
          {children}
        </div>
      </section>
    </div>
  );
};

export default ListDashboardLayouts;
