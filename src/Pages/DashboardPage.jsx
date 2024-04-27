import { useEffect } from "react";
import { useAcount } from "../hooks/useAcount";
import DashboardLayouts from "../components/Layouts/DashboardLayouts";

const DashboardPage = () => {
  const acount = useAcount();

  useEffect(() => {
    acount;
  });

  return (
    <DashboardLayouts />
  );
};

export default DashboardPage;
