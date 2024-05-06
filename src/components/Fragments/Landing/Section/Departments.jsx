import { useEffect, useState } from "react";
import DepartmentsImg from "../../../Elements/LandingElements/Section/DepartmentsImg";
import DepartmentsList from "../../../Elements/LandingElements/Section/DepartmentsList";
import DepartmentsText from "../../../Elements/LandingElements/Section/DepartmentsText";
import { getDataDepartments } from "../../../../services/departments.services";

const Departments = () => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDataDepartments().then((res) => {
          setDatas(res);
          if(!res) throw new Error("Terjadi kesalahan")
        });
      } catch (err) {
        setError(err);
      }
    };

    fetchData()
  }, [datas]);
  return (
    <>
    {datas ? datas.map(items => {
      let layouts = ''
      if(items.id % 2 == 1) {
        layouts = "flex-row-reverse"
      } else {
        layouts = "flex-row"
      }
      return(
      <DepartmentsList flexDirection="flex-col" key={items.id} mdFlexDirection={layouts}>
      <DepartmentsImg src="departments-image.png" />
      <DepartmentsText
        title={items.departments}
        description={items.description}
      />
    </DepartmentsList>
    )}) : (
      <div>
        <h1>Halaman error {error}</h1>
      </div>
    )}
    </>
  );
};

export default Departments;
