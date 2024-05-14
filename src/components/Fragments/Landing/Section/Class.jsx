import {  useContext, useEffect, useState } from "react";
import DepartmentsImg from "../../../Elements/LandingElements/Section/ClassImg";
import DepartmentsList from "../../../Elements/LandingElements/Section/ClassList";
import DepartmentsText from "../../../Elements/LandingElements/Section/ClassText";
import { getDataClasses} from "../../../../services/classes.services";
import ClassLayouts from "../../../Layouts/Landing/ClassLayouts";
import { DarkMode } from "../../../../Context/DarkMode";

const Class = () => {
  const [datas, setDatas] = useState([]);
  const {isDarkMode} = useContext(DarkMode)

  useEffect(() => {
    getDataClasses().then((res) => {
      setDatas(res);
      if (!res) throw new Error("Terjadi kesalahan");
    });
  }, []);

  return (
      <ClassLayouts bg={isDarkMode && "bg-slate-900"}>
        {datas ? (
          datas.map((items) => {
            let layouts = "";
            if (items.id % 2 == 0) {
              layouts = "md:flex-row-reverse";
            } else {
              layouts = "md:flex-row";
            }
            return (
              <DepartmentsList
                flexDirection="flex-col"
                key={items.id}
                mdFlexDirection={layouts}
              >
                <DepartmentsImg src="departments-image.png" />
                <DepartmentsText
                  title={items.departments}
                  description={items.description}
                />
              </DepartmentsList>
            );
          })
        ) : (
          <div>
            <h1>Terjadi kesalahan Data kosong!!</h1>
          </div>
        )}
      </ClassLayouts>
  );
};

export default Class;
