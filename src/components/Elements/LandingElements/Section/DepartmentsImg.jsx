const DepartmentsImg = (props) => {
  const { src } = props;
  return (
    <div className="w-full max-w-[400px] overflow-hidden shadow-lg shadow-slate-400 rounded-[16px]">
      <img
        src={`/src/assets/images/LandingImages/departments/${src}`}
        alt=""
        className="w-full h-full "
      />
    </div>
  );
};

export default DepartmentsImg;
