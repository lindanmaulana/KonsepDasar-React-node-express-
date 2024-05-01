import MenuDashboard from "../Elements/MenuBar/Index";
import HeaderDashboard from "../Elements/HeaderBar/Index";
import ContentDashboard from "../Elements/ContentBar/Index";

const DashboardLayouts = () => {
  return (
    <section className="bg-[#EEEEEE]">
      <div className="container mx-auto">
        {/* Menu bar */}
        <MenuDashboard />

        {/* Header Dashboard */}
        <HeaderDashboard username="Lindan Maulana" />

        {/* Content dashboard */}
        <ContentDashboard />
      </div>
    </section>
  );
};

export default DashboardLayouts;
