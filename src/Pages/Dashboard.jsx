const Dashboard = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          {/* dashboard Menu */}
          <div className="absolute left-[10px] w-[300px] h-[95%] rounded-[25px] my-3 bg-[#5867DD]">
            <div className="h-full mx-7 flex flex-col justify-center items-center gap-y-4">
              {/* list 1 */}
              <div className="w-full">
                <img
                  src="../../public/dashboard/dashboardMenu.svg"
                  alt="dashboard"
                />
              </div>

              {/* list 2 */}
              <div className="w-[270px] h-[50px] flex items-center rounded-[15px] gap-x-5 bg-[#374BAE] ">
                <img
                  src="../../public/dashboard/dashboardTitle.svg"
                  alt="qr dashboard"
                  className="ml-5"
                />
                <h2 className="text-[18px] text-[#FFFFFF]">Dashboard</h2>
              </div>

              {/* list 3 */}
              <div className="w-full flex flex-col gap-y-3">
                <h3 className="text-[16px] font-bold text-[#FFFFFF]  ">
                  REPORTS
                </h3>

                {/* menu 1 */}
                <div className="w-full justify-start border-b border-[#FFFFFF] pb-3">
                  <div className="flex gap-x-3">
                    <img
                      src="../../public/dashboard/menuGrades.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      Pending Reports
                    </h3>
                  </div>
                </div>

                {/* menu 2 */}
                <div className="w-full justify-start border-b border-[#FFFFFF] pb-3">
                  <div className="flex gap-x-3">
                    <img
                      src="../../public/dashboard/menuSubmitted.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[14px] text-[#FFFFFF]  ">
                      Submitted Reports
                    </h3>
                  </div>
                </div>
              </div>

              {/* list 4 */}
              <div className="w-full flex flex-col gap-y-3">
                <h3 className="text-[16px] font-bold text-[#FFFFFF]  ">
                  CLIENTS
                </h3>

                {/* menu 1 */}
                <div className="w-full justify-start border-b border-[#FFFFFF] pb-3">
                  <div className="flex gap-x-3">
                    <img
                      src="../../public/dashboard/menuView.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[14px] text-[#FFFFFF]  ">
                      View / Add Groups
                    </h3>
                  </div>
                </div>
              </div>

              {/* list 5 */}
              <div className="w-full flex flex-col gap-y-3">
                <h3 className="text-[16px] font-bold text-[#FFFFFF]  ">
                  REPORTS
                </h3>

                {/* menu 1 */}
                <div className="w-full justify-start border-b border-[#FFFFFF] pb-2">
                  <div className="flex gap-x-3">
                    <img
                      src="../../public/dashboard/menuEntities.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      1.Entity Types
                    </h3>
                  </div>
                </div>

                {/* menu 2 */}
                <div className="w-full justify-start border-b border-[#FFFFFF] pb-2">
                  <div className="flex gap-x-3">
                    <img
                      src="../../public/dashboard/menuPackages.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      2.Packages
                    </h3>
                  </div>
                </div>

                {/* menu 3 */}
                <div className="w-full justify-start border-b border-[#FFFFFF] pb-2">
                  <div className="flex gap-x-3">
                    <img
                      src="../../public/dashboard/menuParameters.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      3.Parameters
                    </h3>
                  </div>
                </div>

                {/* menu 4 */}
                <div className="w-full justify-start border-b border-[#FFFFFF] pb-2">
                  <div className="flex gap-x-3">
                    <img
                      src="../../public/dashboard/menuQuestions.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      4.Questions
                    </h3>
                  </div>
                </div>

                {/* menu 9 */}
                <div className="w-full justify-start pb-2">
                  <div className="flex gap-x-3">
                    <img
                      src="../../public/dashboard/menuChange.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      Change Password
                    </h3>
                  </div>
                </div>

                {/* menu 10 */}
                <div className="w-full justify-start pb-2">
                  <div className="flex gap-x-3">
                    <img
                      src="../../public/dashboard/menuSignOut.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      Sign out
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div className="w-full h-[55px] flex justify-end border-b-[2px]">
            <div className="self-center w-[70%] flex justify-between mx-5">
              <h3 className="left-[300px] self-center text[24px] font-bold ">
                Dashboard
              </h3>
              <div className="self-center flex gap-x-2 top-2 right-6">
                <h3 className="self-center text-[14px] text-light">
                  Wellcome <span className="font-semibold">Super Admin</span>
                </h3>
                <img
                  src="../../public/dashboard/dashboardAdmin.svg"
                  alt="admin"
                  className="rounded-full w-[40px]"
                />
                <button>V</button>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="w-full flex justify-end items-center">
            <div className="w-[75%] bg-[#EEEEEE] flex flex-wrap py-7 gap-7">
              {/* menu 1 */}
              <div className="w-[410px] h-[250px] bg-[#FFFFFF] flex p-[30px] rounded-[40px]">
                <div className="w-[230px] flex flex-col">
                <h2 className="text-[45px] font-extrabold text-[#5867DD] ">8</h2>
                <h3 className="text-[25px] font-extrabold text-[#000000]  ">Groups Pending Setup</h3>
                <p className="text-[17px] text-[#000000] ">Total Groups Pending for Approval</p>
                </div>
                <div className="w-[190px] flex">
                <img src="../../public/dashboard/groups/groupsPending.svg" alt="Groups pending" className="self-center"/>
                </div>
              </div>

              {/* menu 2 */}
              <div className="w-[410px] h-[250px] bg-[#FFFFFF] flex p-[30px] rounded-[40px]">
                <div className="w-[230px] flex flex-col">
                <h2 className="text-[45px] font-extrabold text-[#5867DD] ">28</h2>
                <h3 className="text-[25px] font-extrabold text-[#000000]  ">Groups</h3>
                <p className="text-[17px] text-[#000000] ">Total Groups</p>
                </div>
                <div className="w-[190px] flex">
                <img src="../../public/dashboard/groups/groups.svg" alt="Groups" className="self-center"/>
                </div>
              </div>

              {/* menu 2 */}
              <div className="w-[410px] h-[250px] bg-[#FFFFFF] flex p-[30px] rounded-[40px]">
                <div className="w-[230px] flex flex-col">
                <h2 className="text-[45px] font-extrabold text-[#5867DD] ">28</h2>
                <h3 className="text-[25px] font-extrabold text-[#000000]  ">Sub Groups</h3>
                <p className="text-[17px] text-[#000000] ">Total Sub Groups</p>
                </div>
                <div className="w-[190px] flex">
                <img src="../../public/dashboard/groups/subGroups.svg" alt="subGroups" className="self-center"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
