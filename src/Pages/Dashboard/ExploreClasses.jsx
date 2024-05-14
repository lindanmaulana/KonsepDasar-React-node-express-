import ExploreClasessFragments from "../../components/Fragments/Dashboard/ListDashboardFragments/ExploreClasessFragments";
import SideBar from "../../components/Fragments/Dashboard/SideBar";
import DashboardLayouts from "../../components/Layouts/Dashboard/DashboardLayouts";

const ExploreClasses = () => {
  return (
    <DashboardLayouts sidebar={<SideBar />}>
      <ExploreClasessFragments />
    </DashboardLayouts>
  );
};

export default ExploreClasses;
