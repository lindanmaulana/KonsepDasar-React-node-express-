import DashboardLayouts from "../../components/Layouts/Dashboard/DashboardLayouts";
import SideBar from "../../components/Fragments/Dashboard/SideBar";
import ProfileFragments from "../../components/Fragments/Dashboard/ProfileFragments";

const ProfilePage = () => {
  return (
    <DashboardLayouts sidebar={<SideBar />}>
      <ProfileFragments />
    </DashboardLayouts>
  );
};

export default ProfilePage;
