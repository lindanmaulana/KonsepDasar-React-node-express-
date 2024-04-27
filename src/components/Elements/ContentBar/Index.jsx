import MenuContent from "./MenuContent";

const ContentDashboard = () => {
  return (
    <div className="w-full h-full flex justify-end items-center ">
      {/* dahsboard List */}
      <div className="w-[980px] h-full flex justify-center items-start mt-16">
        <div className="w-full h-full bg-[#EEEEEE] flex flex-wrap gap-4 justify-center items-center">
          <MenuContent
            amount="8"
            title="Groups Pending Setup"
            description="Total Groups Pending for Approval"
            src="dashboard/groups/groupsPending.svg"
          />

          <MenuContent
            amount="28"
            title="Groups"
            description="Total Groups"
            src="dashboard/groups/groups.svg"
          />
          <MenuContent
            amount="28"
            title="Sub Groups"
            description="Total Sub Groups"
            src="dashboard/groups/subGroups.svg"
          />
          <MenuContent
            amount="38"
            title="Institutes"
            description="Total Institutes"
            src="dashboard/groups/institutes.svg"
          />
          <MenuContent
            amount="349"
            title="Staff"
            description="Total Onboard"
            src="dashboard/groups/staff.svg"
          />
          <MenuContent
            amount="95"
            title="Surveys in Progress"
            description="Surveys in Progress for Submission"
            src="dashboard/groups/surveyes.svg"
          />
          <MenuContent
            amount="9271"
            title="Feedbacks"
            description="Total Captured"
            src="dashboard/groups/feedbacks.svg"
          />
          <MenuContent
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
