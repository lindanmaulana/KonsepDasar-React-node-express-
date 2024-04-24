const Dashboard = () => {
  return (
    <>
      <section>
      <div className="container mx-auto">
        {/* dashboard Menu */}

        {/* parent */}
        <div className="w-full h-screen flex">
          {/* child 1 */}
          <div className="w-[300px] h-[98%] rounded-3xl my-auto bg-[#5867DD]">
            <div className="h-full mx-7 flex flex-col justify-center items-center gap-y-4">
              {/* list 1 */}
              <div className="w-full flex justify-center items-center">
                <img
                  src="../../public/dashboard/dashboardMenu.svg"
                  alt="dashboard"
                />
              </div>

              {/* list 2 */}
              <div className="w-full justify-start border-b border-slate-400 pb-2 group">
                <button className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
                  <img
                    src="../../public/dashboard/dashboardTitle.svg"
                    alt="qr dashboard"
                    className="self-center"
                  />
                  <h2 className="text-[18px] text-[#FFFFFF]">Dashboard</h2>
                </button>
              </div>

              {/* list 3 */}
              <div className="w-full flex flex-col gap-y-2">
                <h3 className="text-[16px] font-bold text-[#FFFFFF]  ">
                  REPORTS
                </h3>

                {/* menu 1 */}
                <div className="w-full justify-start border-b border-slate-400 pb-2 group">
                  <button className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
                    <img
                      src="../../public/dashboard/menuGrades.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      Pending Reports
                    </h3>
                  </button>
                </div>

                {/* menu 2 */}
                <div className="w-full justify-start border-b border-slate-400 pb-2 group">
                  <button className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
                    <img
                      src="../../public/dashboard/menuSubmitted.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[14px] text-[#FFFFFF]  ">
                      Submitted Reports
                    </h3>
                  </button>
                </div>
              </div>

              {/* list 4 */}
              <div className="w-full flex flex-col gap-y-1">
                <h3 className="text-[16px] font-bold text-[#FFFFFF]  ">
                  CLIENTS
                </h3>

                {/* menu 1 */}
                <div className="w-full justify-start border-b border-slate-400 pb-2 group">
                  <button className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
                    <img
                      src="../../public/dashboard/menuView.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[14px] text-[#FFFFFF]  ">
                      View / Add Groups
                    </h3>
                  </button>
                </div>
              </div>

              {/* list 5 */}
              <div className="w-full flex flex-col gap-y-3">
                <h3 className="text-[16px] font-bold text-[#FFFFFF]  ">
                  REPORTS
                </h3>

                {/* menu 1 */}
                <div className="w-full justify-start border-b border-slate-400 pb-2 group">
                  <button className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
                    <img
                      src="../../public/dashboard/menuEntities.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      1.Entity Types
                    </h3>
                  </button>
                </div>

                {/* menu 2 */}
                <div className="w-full justify-start border-b border-slate-400 pb-2 group">
                  <button className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
                    <img
                      src="../../public/dashboard/menuPackages.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      2.Packages
                    </h3>
                  </button>
                </div>

                {/* menu 3 */}
                <div className="w-full justify-start pb-1 group">
                  <button className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
                    <img
                      src="../../public/dashboard/menuChange.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      Change Password
                    </h3>
                  </button>
                </div>

                {/* menu 4 */}
                <div className="w-full justify-start pb-1 group">
                  <button className="flex gap-x-3 group-hover:w-full group-hover:py-2 group-hover:rounded-xl group-hover:my-auto group-hover:bg-[#374BAE] transition-all duration-500 ease-in-out">
                    <img
                      src="../../public/dashboard/menuSignOut.svg"
                      alt="pending report"
                      className="w-[30px] h-[30px] bg-[#374BAE] p-2 rounded-full"
                    />
                    <h3 className="self-center text-[15px] text-[#FFFFFF]  ">
                      Sign out
                    </h3>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* child 2 */}
          {/* Dashboard */}
          <div className="w-[80%] flex flex-col">
            {/* Header Dashboard */}
            <div className="w-full h-[55px] flex justify-end border-b-[2px]">
              <div className="self-center w-full flex justify-between mx-5">
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

            {/* dahsboard List */}
            {/* <iframe
              src="/dashboardFrame.html"
              width="100%"
              height="100%"
              scrolling="auto"
            ></iframe> */}
            <div className="w-full h-full flex justify-center items-start overflow-hidden">
              <div className="w-full bg-[#EEEEEE] flex flex-wrap py-2 px-7 gap-4">
                {/* menu 1 */}
                <div className="w-[300px] h-[160px] bg-[#FFFFFF] flex p-[30px] rounded-[20px]">
                  <div className="w-[200px] flex flex-col">
                    <h2 className="text-[20px] font-extrabold text-[#5867DD] ">
                      8
                    </h2>
                    <h3 className="text-[15px] font-extrabold text-[#000000]  ">
                      Groups Pending Setup
                    </h3>
                    <p className="text-[10px] text-[#000000] ">
                      Total Groups Pending for Approval
                    </p>
                  </div>
                  <div className="w-[100px] flex">
                    <img
                      src="../../public/dashboard/groups/groupsPending.svg"
                      alt="Groups pending"
                      className="self-center"
                    />
                  </div>
                </div>

                {/* menu 2 */}
                <div className="w-[300px] h-[160px] bg-[#FFFFFF] flex p-[30px] rounded-[20px]">
                  <div className="w-[200px] flex flex-col">
                    <h2 className="text-[20px] font-extrabold text-[#5867DD] ">
                      28
                    </h2>
                    <h3 className="text-[15px] font-extrabold text-[#000000]  ">
                      Groups
                    </h3>
                    <p className="text-[10px] text-[#000000] ">Total Groups</p>
                  </div>
                  <div className="w-[100px] flex">
                    <img
                      src="../../public/dashboard/groups/groups.svg"
                      alt="Groups"
                      className="self-center"
                    />
                  </div>
                </div>

                {/* menu 3 */}
                <div className="w-[300px] h-[160px] bg-[#FFFFFF] flex p-[30px] rounded-[20px]">
                  <div className="w-[200px] flex flex-col">
                    <h2 className="text-[20px] font-extrabold text-[#5867DD] ">
                      28
                    </h2>
                    <h3 className="text-[15px] font-extrabold text-[#000000]  ">
                      Sub Groups
                    </h3>
                    <p className="text-[10px] text-[#000000] ">
                      Total Sub Groups
                    </p>
                  </div>
                  <div className="w-[100px] flex">
                    <img
                      src="../../public/dashboard/groups/subGroups.svg"
                      alt="subGroups"
                      className="self-center"
                    />
                  </div>
                </div>

                {/* menu 4 */}
                <div className="w-[300px] h-[160px] bg-[#FFFFFF] flex p-[30px] rounded-[20px]">
                  <div className="w-[200px] flex flex-col">
                    <h2 className="text-[20px] font-extrabold text-[#5867DD] ">
                      38
                    </h2>
                    <h3 className="text-[15px] font-extrabold text-[#000000]  ">
                      Institutes
                    </h3>
                    <p className="text-[10px] text-[#000000] ">
                      Total Institutes
                    </p>
                  </div>
                  <div className="w-[100px] flex">
                    <img
                      src="../../public/dashboard/groups/institutes.svg"
                      alt="institutes"
                      className="self-center"
                    />
                  </div>
                </div>

                {/* menu 5 */}
                <div className="w-[300px] h-[160px] bg-[#FFFFFF] flex p-[30px] rounded-[20px]">
                  <div className="w-[200px] flex flex-col">
                    <h2 className="text-[20px] font-extrabold text-[#5867DD] ">
                      349
                    </h2>
                    <h3 className="text-[15px] font-extrabold text-[#000000]  ">
                      Staff
                    </h3>
                    <p className="text-[10px] text-[#000000] ">Total Onboard</p>
                  </div>
                  <div className="w-[100px] flex">
                    <img
                      src="../../public/dashboard/groups/staff.svg"
                      alt="staff"
                      className="self-center"
                    />
                  </div>
                </div>

                {/* menu 6 */}
                <div className="w-[300px] h-[160px] bg-[#FFFFFF] flex p-[30px] rounded-[20px]">
                  <div className="w-[200px] flex flex-col">
                    <h2 className="text-[20px] font-extrabold text-[#5867DD] ">
                      95
                    </h2>
                    <h3 className="text-[15px] font-extrabold text-[#000000]  ">
                      Surveys In Progress
                    </h3>
                    <p className="text-[10px] text-[#000000] ">
                      Surveys in Progress for Submission
                    </p>
                  </div>
                  <div className="w-[100px] flex">
                    <img
                      src="../../public/dashboard/groups/surveys.svg"
                      alt="surveys"
                      className="self-center"
                    />
                  </div>
                </div>

                {/* menu 7 */}
                <div className="w-[300px] h-[160px] bg-[#FFFFFF] flex p-[30px] rounded-[20px]">
                  <div className="w-[200px] flex flex-col">
                    <h2 className="text-[20px] font-extrabold text-[#5867DD] ">
                      9271
                    </h2>
                    <h3 className="text-[15px] font-extrabold text-[#000000]  ">
                      Feedbacks
                    </h3>
                    <p className="text-[10px] text-[#000000] ">
                      Total Captured
                    </p>
                  </div>
                  <div className="w-[100px] flex">
                    <img
                      src="../../public/dashboard/groups/feedbacks.svg"
                      alt="feedbacks"
                      className="self-center"
                    />
                  </div>
                </div>

                {/* menu 8 */}
                <div className="w-[300px] h-[160px] bg-[#FFFFFF] flex p-[30px] rounded-[20px]">
                  <div className="w-[200px] flex flex-col">
                    <h2 className="text-[20px] font-extrabold text-[#5867DD] ">
                      29
                    </h2>
                    <h3 className="text-[15px] font-extrabold text-[#000000]  ">
                      Pending Feedbacks for Approval
                    </h3>
                    <p className="text-[10px] text-[#000000] ">
                      Pending Feedbacks for Approval
                    </p>
                  </div>
                  <div className="w-[100px] flex">
                    <img
                      src="../../public/dashboard/groups/pending.svg"
                      alt="pending"
                      className="self-center"
                    />
                  </div>
                </div>
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
