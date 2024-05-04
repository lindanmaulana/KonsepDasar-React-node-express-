import MenuDashboard from "../Fragments/Dashboard/MenuDashboard";
import HeaderDashboard from "../Fragments/Dashboard/HeaderDashboard";
import ContentDashboard from "../Fragments/Dashboard/ContentDashboard";
import { acount } from "../../services/auth.services";
import { useEffect, useState } from "react";

const DashboardLayouts = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    acount().then(data => {
      const datas = data.payload.datas;

      datas.map(name => setName(name.username))
    })
  }, [])

  return (
    <section className="bg-[#EEEEEE]">
      <div className="mx-auto">
        {/* Menu bar */}
        <MenuDashboard />

        {/* Header Dashboard */}
        <HeaderDashboard username={name} />

        {/* Content dashboard */}
        <ContentDashboard />
      </div>
    </section>
  );
};

export default DashboardLayouts;
