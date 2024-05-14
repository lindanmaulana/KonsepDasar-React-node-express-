import { useEffect, useState } from "react";
import DashboardLayouts from "../components/Layouts/Dashboard/DashboardLayouts";
import { useDispatch, useSelector } from "react-redux";
import {
  amountClasses,
  amountCollegeLesson,
  amountStudents,
  dashboardHeader,
} from "../redux/slices/cartSlices";
import SideBar from "../components/Fragments/Dashboard/SideBar";
import TaskList from "../components/Fragments/Dashboard/TaskList";
import UserList from "../components/Fragments/Dashboard/UserList";
import HeaderDashboard from "../components/Fragments/Dashboard/HeaderDashboard";
import {
  amountDataClasses,
  amountDataCollegeLesson,
  amountDataStudents,
} from "../services/dashboard.services";
const DashboardPage = () => {
  const [headerState, setHeaderState] = useState(false);

  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => state.dashboard);
  console.log({ state });
  const handleHeader = () => {
    setHeaderState(!headerState);
  };

  useEffect(() => {
    dispatch(dashboardHeader(headerState));
  }, [dispatch, headerState]);

  useEffect(() => {
    amountDataClasses().then((results) => {
      results.data.payload.datas.map((items) =>
        dispatch(amountClasses(items.nama))
      );
    });

    amountDataStudents().then((results) => {
      results.data.payload.datas.map((items) =>
        dispatch(amountStudents(items.nama))
      );
    });

    amountDataCollegeLesson().then((results) =>
      results.data.payload.datas.map((items) =>
        dispatch(amountCollegeLesson(items.mata_kuliah))
      )
    );
  }, [dispatch]);

  return (
    <DashboardLayouts sidebar={<SideBar />}>
      <HeaderDashboard handleState={handleHeader} />
      <TaskList />
      <UserList />
    </DashboardLayouts>
  );
};

export default DashboardPage;
