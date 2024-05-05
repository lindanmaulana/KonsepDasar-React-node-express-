import DepartmentsImg from "../../../Elements/LandingElements/Section/DepartmentsImg";
import DepartmentsList from "../../../Elements/LandingElements/Section/DepartmentsList";
import DepartmentsText from "../../../Elements/LandingElements/Section/DepartmentsText";

const Departments = () => {
  return (
    <section id="departments" className="pt-[70px] pb-[20px] md:pb-[67px]">
      <div className="container">
        <h2 className="text-center text-[40px] text-[#030F4B] font-bold mb-[80px]">
          Explore the departments
        </h2>
        <DepartmentsList flexDirection="flex-col">
          <DepartmentsImg src="departments-image.png" />
          <DepartmentsText
            title="Chemical Engineering"
            description="All of the students that are enrolled in the Chemical
                  Engineering program receive a Chemist’s Kit to practice while
                  learning from home."
          />
        </DepartmentsList>

        <DepartmentsList flexDirection="flex-col-reverse">
          <DepartmentsText
            title="Computer Science"
            description="Our computer science department has multiple learning paths,
                  from Mobile and Web development, to Machine Learning and Data
                  Science."
          />
          <DepartmentsImg src="departments-image.png" />
        </DepartmentsList>

        <DepartmentsList flexDirection="flex-col">
          <DepartmentsImg src="departments-image.png" />
          <DepartmentsText
            title="Business & Economics"
            description="The future CEOs and Entrepreneurs have an opportunity to study the business climate and analyize real world case studies of business success stories."
          />
        </DepartmentsList>
      </div>
    </section>
  );
};

export default Departments;
