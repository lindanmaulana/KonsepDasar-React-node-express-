const DepartmentsList = (props) => {
    const {flexDirection, children} = props
  return (
    <div className={`flex ${flexDirection} justify-between items-center md:gap-x-[50px] mb-[80px] md:flex-row lg:gap-x-[110px] px-2 md:px-0`}>
      {children}
    </div>
  );
};

export default DepartmentsList;
