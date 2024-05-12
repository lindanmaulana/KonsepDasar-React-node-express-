import { useEffect, useState } from "react";
import DashboardLayouts from "../components/Layouts/Dashboard/DashboardLayouts";
import { useDispatch } from "react-redux";
import { dashboardHeader, dashboardSideBar } from "../redux/slices/cartSlices";
import SideBar from "../components/Fragments/Dashboard/SideBar";
import TaskList from "../components/Fragments/Dashboard/TaskList";
import UserList from "../components/Fragments/Dashboard/UserList";
import HeaderDashboard from "../components/Fragments/Dashboard/HeaderDashboard";
const DashboardPage = () => {
  const [sideBarState, setSideBarState] = useState(false);
  const [headerState, setHeaderState] = useState(false);

  // redux
  const dispatch = useDispatch();

  const handleSideBar = () => {
    setSideBarState(!sideBarState);
  };

  const handleHeader = () => {
    setHeaderState(!headerState);
  };

  useEffect(() => {
    dispatch(dashboardSideBar(sideBarState));
    dispatch(dashboardHeader(headerState));
  }, [dispatch, sideBarState, headerState]);

  return (
    <DashboardLayouts sidebar={<SideBar handleState={handleSideBar} />}>
      <HeaderDashboard handleState={handleHeader} />
      <TaskList />
      <UserList />
    </DashboardLayouts>
  );
};

export default DashboardPage;
