import DashboardList from "../../Elements/DashboardElements/DashboardList";

const ContentDashboard = () => {
  return (
    <div className="w-full h-full flex justify-end items-center bg-red-800">
      {/* dahsboard List */}
        <div className="w-[950px] h-full flex justify-center items-start mt-16">
          <div className="w-full h-full bg-[#EEEEEE] flex flex-wrap gap-4 justify-center items-center">
            <DashboardList
              amount="8"
              title="Groups Pending Setup"
              description="Total Groups Pending for Approval"
              src="dashboard/groups/groupsPending.svg"
            />

            <DashboardList
              href="Students"
              amount="28"
              title="Students"
              description="Total Students"
              src="dashboard/groups/groups.svg"
            />
            <DashboardList
              amount="28"
              title="Sub Groups"
              description="Total Sub Groups"
              src="dashboard/groups/subGroups.svg"
            />
            <DashboardList
              amount="38"
              title="Institutes"
              description="Total Institutes"
              src="dashboard/groups/institutes.svg"
            />
            <DashboardList
              amount="349"
              title="Staff"
              description="Total Onboard"
              src="dashboard/groups/staff.svg"
            />
            <DashboardList
              amount="95"
              title="Surveys in Progress"
              description="Surveys in Progress for Submission"
              src="dashboard/groups/surveys.svg"
            />
            <DashboardList
              amount="9271"
              title="Feedbacks"
              description="Total Captured"
              src="dashboard/groups/feedbacks.svg"
            />
            <DashboardList
              amount="29"
              title="Pending Feedbacks for Approval"
              description="Pending Feedbacks for Approval"
              src="dashboard/groups/pending.svg"
            />
          </div>
        </div>
    </div>
  );
};

export default ContentDashboard;
