import { useEffect } from "react";
import { useAcount } from "../hooks/useAcount";
import MenuDashboard from "../components/Elements/MenuBar/Index";
import HeaderDashboard from "../components/Elements/HeaderBar/Index";
import ContentDashboard from "../components/Elements/ContentBar/Index";

const Dashboard = () => {
  const acount = useAcount();

  useEffect(() => {
    acount;
  });

  return (
    <>
      <section className="bg-[#EEEEEE]">
        <div className="container mx-auto">
          {/* Side bar */}
          <MenuDashboard />

          {/* Dashboard */}
          {/* Header Dashboard */}
          <HeaderDashboard username="Lindan"/>

          {/* Content dashboard */}

          <ContentDashboard />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
