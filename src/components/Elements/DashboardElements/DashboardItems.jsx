const DashboardItems = (props) => {
  const { to, amount, title, description, src } = props;

  const handleDashboardPage = () => {
    window.location.href = `/dashboard/${to&& to}`;
  };
  return (
    <>
      <div
      onClick={handleDashboardPage}
      className="w-[300px] bg-[#FFFFFF] flex p-[30px] rounded-[20px] text-left"
    >
      <div className="w-[200px] flex flex-col">
        <h2 className="text-[20px] font-extrabold text-[#5867DD] ">{amount}</h2>
        <h3 className="text-[15px] font-extrabold text-[#000000]  ">{title}</h3>
        <p className="text-[10px] text-[#000000] ">{description}</p>
      </div>
      <div className="w-[100px] flex">
        <img
          src={`/public/dashboard/groups/${src}`}
          alt="subGroups"
          className="self-center"
        />
      </div>
    </div>
    </>
  );
};

export default DashboardItems;
