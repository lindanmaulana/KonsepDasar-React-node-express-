const Dashboard = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          {/* dashboard Menu */}
          <div className="absolute left-[10px] w-[300px] h-[95%] my-3 bg-[#5867DD]">
            <h1>hello world</h1>
          </div>
          {/* Dashboard */}
          <div className="w-full h-[55px] flex justify-end border-b-[2px]">
            <div className="self-center w-[70%] flex justify-between mx-6">
              <h3 className="left-[300px] self-center text[24px] font-bold ">
                Dashboard
              </h3>
              <div className="self-center flex gap-x-2 top-2 right-6">
                <h3 className="self-center text-[14px] text-light">
                  Wellcome <span className="font-semibold">Super Admin</span>
                </h3>
                <img
                  src="../../public/dashboardAdmin.svg"
                  alt="admin"
                  className="rounded-full w-[40px]"
                />
                <button>V</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
