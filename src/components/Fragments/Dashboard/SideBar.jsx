import { IoQrCodeOutline } from "react-icons/io5";
import ListBar from "../../Elements/DashboardElements/ListBar";
import MenuBar from "../../Elements/DashboardElements/MenuBar";
import { BiMessageDots, BiMessageCheck } from "react-icons/bi";
import { HiRectangleGroup } from "react-icons/hi2";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { GrCluster } from "react-icons/gr";
import { LuPackageOpen } from "react-icons/lu";
import { TbPasswordFingerprint } from "react-icons/tb";
import { IoArrowUndoOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardSideBar } from "../../../redux/slices/cartSlices";

const SideBar = () => {
  const [timeInfo, setTimeInfo] = useState("");
  const [state, setState] = useState(false)
  const dispatch = useDispatch()
  
  // redux
  const stateSideBar = useSelector(stat => stat.cart.dashboard.sideBar)

  useEffect(() => {
    const date = new Date();
    const time = date.toDateString();
    setTimeInfo(time);
  }, [timeInfo]);

  const handleState = () => {
    setState(!state)
  }

  useEffect(() => {
    dispatch(dashboardSideBar(state))
  }, [dispatch, state])


  return (
    <div className="flex flex-col items-center justify-between h-full px-4 py-5">
      <div className="flex flex-col items-center gap-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-center w-full">
          <h2 className="text-3xl tracking-tight font-bold text-[#374BAE]">
            {stateSideBar ? "CI" : "Classes Informatic"}
          </h2>
        </div>

        {/* HERO BAR */}
        <div className="justify-start w-full pb-2 group">
          <button className="flex gap-x-3 w-full py-2 rounded-xl my-auto bg-[#374BAE] scale-105 px-3 shadow-lg shadow-black/30">
            <IoQrCodeOutline className="self-center text-white scale-125" />
            {stateSideBar ? <h2 className="text-[18px] text-[#FFFFFF]">Da</h2> : (
              <h2 className="text-[18px] text-[#FFFFFF]">Dashboard</h2>
            )}
          </button>
        </div>

        {/* LIST BAR */}
        <ListBar titleList="REPORTS">
          <MenuBar
            to="a"
            icons={
              <BiMessageDots
                className={`${
                  stateSideBar ? "text-2xl" : "text-xl"
                } sidebar-dashboard`}
              />
            }
            secondTitle="PR"
            titleMenu="Pending Reports"
            state={stateSideBar}
          />
          <MenuBar
            to="a"
            icons={
              <BiMessageCheck
                className={`${
                  stateSideBar ? "text-2xl" : "text-xl"
                } sidebar-dashboard`}
              />
            }
            secondTitle="SR"
            titleMenu="Submitted Reports"
            state={stateSideBar}
          />
        </ListBar>

        <ListBar titleList="CLIENTS">
          <MenuBar
            to="a"
            icons={
              <HiRectangleGroup
                className={`${
                  stateSideBar ? "text-2xl" : "text-xl"
                } sidebar-dashboard`}
              />
            }
            secondTitle="V/A"
            titleMenu="View / Add Groups"
            state={stateSideBar}
          />
        </ListBar>

        <ListBar titleList="DATASET">
          <MenuBar
            icons={
              <GrCluster
                className={`${
                  stateSideBar ? "text-2xl" : "text-xl"
                } sidebar-dashboard`}
              />
            }
            to="a"
            secondTitle="ET"
            titleMenu="Entity Types"
            state={stateSideBar}
          />
          <MenuBar
            icons={
              <LuPackageOpen
                className={`${
                  stateSideBar ? "text-2xl" : "text-xl"
                } sidebar-dashboard `}
              />
            }
            to="a"
            secondTitle="PC"
            titleMenu="Packages"
            state={stateSideBar}
          />
          <MenuBar
            icons={
              <TbPasswordFingerprint
                className={`${
                  stateSideBar ? "text-2xl" : "text-xl"
                } sidebar-dashboard`}
              />
            }
            to="a"
            secondTitle="CP"
            titleMenu="Change Password"
            state={stateSideBar}
          />
          <MenuBar
            icons={
              <IoArrowUndoOutline
                className={`${
                  stateSideBar ? "text-2xl" : "text-xl"
                } sidebar-dashboard`}
              />
            }
            to="/dashboard"
            secondTitle="BC"
            titleMenu="Back"
            state={stateSideBar}
          />
        </ListBar>
      </div>

      <div className="flex flex-col items-center justify-center w-full ">
        <button onClick={handleState}>
          {stateSideBar ? (
            <FaCircleChevronRight className="text-4xl text-[#374BAE]" />
          ) : (
            <FaCircleChevronLeft className="text-4xl text-[#374BAE]" />
          )}
        </button>

        <p
          className={`${
            stateSideBar ? "text-xs" : "text-md"
          } font-semibold text-black/70 text-center`}
        >
          {timeInfo}
        </p>
      </div>
    </div>
  );
};

export default SideBar;
