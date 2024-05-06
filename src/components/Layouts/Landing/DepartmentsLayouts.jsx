import Departments from "../../Fragments/Landing/Section/Departments";

const DepartmentsLayouts = () => {
  return (
    <section id="departments" className="pt-[70px] pb-[20px] md:pb-[67px]">
      <div className="container">
        <h2 className="text-center text-[40px] text-[#030F4B] font-bold mb-[80px]">
          Explore the departments
        </h2>
        <Departments />
      </div>
    </section>
  );
};

export default DepartmentsLayouts;
