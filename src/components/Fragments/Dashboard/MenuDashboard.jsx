import DashboardItems from "../../Elements/DashboardElements/DashboardItems";
const MenuDashboard = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full  flex flex-wrap justify-start gap-x-[80px] items-center pl-8">
        <DashboardItems
          amount="8"
          title="Explore Classes"
          description="Total class Awaiting Approval"
          src="groupsPending.svg"
        />

        <DashboardItems
         to="Students"
          amount="12"
          title="Students"
          description="Total Students"
          src="groups.svg"
        />
        <DashboardItems
          amount="28"
          title="Sub Groups"
          description="Total Sub Groups"
          src="subGroups.svg"
        />
        <DashboardItems
         to="college-lessons"
          amount="38"
          title="College Lessons"
          description="A Number of College Courses"
          src="institutes.svg"
        />
        <DashboardItems
          amount="349"
          title="Staff"
          description="Total Onboard"
          src="staff.svg"
        />
        <DashboardItems
          amount="95"
          title="Surveys in Progress"
          description="Surveys in Progress for Submission"
          src="surveys.svg"
        />
        <DashboardItems
          amount="9271"
          title="Feedbacks"
          description="Total Captured"
          src="feedbacks.svg"
        />
        <DashboardItems
          amount="29"
          title="Pending Feedbacks for Approval"
          description="Pending Feedbacks for Approval"
          src="pending.svg"
        />
      </div>
    </div>
  );
};

export default MenuDashboard;

{
  /* <div className="w-[300px] h-[98%] rounded-3xl my-auto bg-[#5867DD] fixed left-2 top-2 z-50">
<div className="flex flex-col items-center justify-center h-full px-4 gap-y-4">
  <div className="flex items-center justify-center w-full">
    <img src="../../public/dashboard/dashboardMenu.svg" alt="dashboard" />
  </div>

  <div className="justify-start w-full pb-2 border-b border-slate-400 group">
    <button className="flex gap-x-3 w-full py-2 rounded-xl my-auto bg-[#374BAE] scale-105 px-3">
      <IoQrCodeOutline className="self-center text-white scale-125" />
      <h2 className="text-[18px] text-[#FFFFFF]">Dashboard</h2>
    </button>
  </div>

  <ListBar titleList="REPORTS">
    <MenuBar
      src="dashboard/reportsPending.svg"
      titleMenu="Pending Reports"
    />
    <MenuBar
      src="dashboard/reportsSubmitted.svg"
      titleMenu="Submitted Reports"
    />
  </ListBar>

  <ListBar titleList="CLIENTS">
    <MenuBar
      src="dashboard/clientsView.svg"
      titleMenu="View / Add Groups"
    />
  </ListBar>

  <ListBar titleList="DATASET">
    <MenuBar
      src="dashboard/datasetEntity.svg"
      titleMenu="1. Entity Types"
    />
    <MenuBar
      src="dashboard/datasetPackages.svg"
      titleMenu="2. Packages"
    />
    <MenuBar
      src="dashboard/datasetChange.svg"
      titleMenu="Change Password"
    />
    <MenuBar
      src="dashboard/datasetSign.svg"
      titleMenu="Sign Out"
      href=""
    />
  </ListBar>
</div>
</div> */
}
