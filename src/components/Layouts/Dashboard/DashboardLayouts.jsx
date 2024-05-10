import MenuDashboard from "../../Fragments/Dashboard/MenuDashboard";
import HeaderDashboard from "../../Fragments/Dashboard/HeaderDashboard";
import SideBar from "../../Fragments/Dashboard/SideBar";

const DashboardLayouts = () => {
  return (
    <div className="flex h-screen  bg-[#5867DD]">
      {/* sidebar */}
      <div className="w-1/5 rounded-3xl">
        <SideBar />
      </div>

      <div className="flex-1 overflow-y-scroll bg-gray-400">
        {/* header */}
        <HeaderDashboard />

        {/* menu dashboard */}
        <MenuDashboard />
      </div>
    </div>
  );
};

export default DashboardLayouts;

// const [name, setName] = useState('')
// useEffect(() => {
//   acount().then(data => {
//     const datas = data.payload.datas;

//     datas.map(name => setName(name.username))
//   })
// }, [])

// return (
//   <section className="bg-[#EEEEEE]">
//     <div className="mx-auto">
//       {/* Menu (side bar) */}
//       <MenuDashboard />

//       {/* Header Dashboard */}
//       <HeaderDashboard username={name} />

//       {/* Content dashboard */}
//       <ContentDashboard />
//     </div>
//   </section>
// );
