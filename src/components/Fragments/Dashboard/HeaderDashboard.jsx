import { BsChevronDown } from "react-icons/bs";
const HeaderDashboard = (props) => {
    const {username} = props
    return(
        <div className="w-full h-[55px] bg-[#FFFFFF] flex justify-end border-b-[2px] fixed top-0 right-0">
            <div className="self-center w-[900px] flex justify-between mx-5">
              <h3 className="left-[300px] self-center text[24px] font-bold ">
                Dashboard
              </h3>
              <div className="self-center flex gap-x-2 top-2 right-6">
                <h3 className="self-center text-[14px] text-light">
                  Wellcome <span className="font-semibold">{username}</span>
                </h3>
                <img
                  src="../../public/dashboard/dashboardAdmin.svg"
                  alt="admin"
                  className="rounded-full w-[40px]"
                />
                <button><BsChevronDown /></button>
              </div>
            </div>
          </div>
    )
}

export default HeaderDashboard