import DashboardItems from "../../Elements/DashboardElements/DashboardItems";

const UserList = () => {
  return (
    <div className="flex flex-col w-full pt-5 gap-y-3">
      <div>
        <h2 className="text-lg font-semibold tracking-tighter text-slate-600">Daftar User Login</h2>
      </div>
      <div className="flex flex-wrap items-start justify-between w-full h-full ">
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
          to="college-lessons"
          amount="38"
          title="College Lessons"
          description="A Number of College Courses"
          src="institutes.svg"
        />
      </div>
    </div>
  );
};

export default UserList;
