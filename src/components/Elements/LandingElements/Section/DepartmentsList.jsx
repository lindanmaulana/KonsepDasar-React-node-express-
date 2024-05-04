const DepartmentsList = (props) => {
    const {children} = props
  return (
    <div className="flex justify-between items-center gap-x-[146px] mb-[80px]">
      {children}
    </div>
  );
};

export default DepartmentsList;
