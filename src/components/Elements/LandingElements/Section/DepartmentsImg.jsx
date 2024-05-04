const DepartmentsImg = (props) => {
    const {src} = props
  return (
    <div>
      <img
        src={`/src/assets/images/departments/${src}`}
        alt=""
        className="rounded-[16px] shadow-lg shadow-black/40"
      />
    </div>
  );
};

export default DepartmentsImg;
