import "../../../App.css";
import { useSelector } from "react-redux";

const DashboardLayouts = (props) => {
  const { sidebar, children } = props;

  const stateRedux = useSelector((stateRed) => stateRed.cart.dashboard.sideBar);

  return (
    <div className="flex h-screen">
      <div className={`z-10 ${ stateRedux ? "w-[100px]" : "w-1/5" } shadow-right transition-global duration-700`}>
        {sidebar}
      </div>

      <div className="flex-1 overflow-y-scroll bg-[#EEEEEE] px-10">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayouts;
