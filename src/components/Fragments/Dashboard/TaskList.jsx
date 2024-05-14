import { useSelector } from "react-redux";
import DashboardItems from "../../Elements/DashboardElements/DashboardItems";
const TaskList = () => {
  const state = useSelector(state => state.cart.dashboard.amount)

  return (
    <div className="flex w-full pt-5">
      <div className="flex flex-wrap items-start justify-between w-full h-full ">
        <DashboardItems
          to="explore-classes"
          amount={state.classes}
          title="Explore Classes"
          description="Total class Awaiting Approval"
          src="groupsPending.svg"
        />

        <DashboardItems
          to="students"
          amount={state.students}
          title="Students"
          description="Total Students"
          src="groups.svg"
        />

        <DashboardItems
          to="college-lessons"
          amount={state.college_lesson}
          title="College Lessons"
          description="A Number of College Courses"
          src="institutes.svg"
        />
      </div>
    </div>
  );
};

export default TaskList;