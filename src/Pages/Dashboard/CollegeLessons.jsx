import { useEffect, useState } from "react";
import CollegeLessonsFragments from "../../components/Fragments/Dashboard/ListDashboardFragments/CollegeLessonsFragments";
import SideBar from "../../components/Fragments/Dashboard/SideBar";
import DashboardLayouts from "../../components/Layouts/Dashboard/DashboardLayouts";
import { getDataCollegeLeson } from "../../services/dashboard.services";

const CollegeLessons = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getDataCollegeLeson().then((res) => setData(res.payload.datas));
  }, []);

  return (
    <DashboardLayouts sidebar={<SideBar />}>
      <CollegeLessonsFragments data={data}/>
    </DashboardLayouts>
  );
};

export default CollegeLessons;
