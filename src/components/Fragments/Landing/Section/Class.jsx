import {  useContext, useEffect, useState } from "react";
import DepartmentsImg from "../../../Elements/LandingElements/Section/ClassImg";
import DepartmentsList from "../../../Elements/LandingElements/Section/ClassList";
import DepartmentsText from "../../../Elements/LandingElements/Section/ClassText";
import { getDataClasses} from "../../../../services/classes.services";
import ClassLayouts from "../../../Layouts/Landing/ClassLayouts";
import { DarkMode } from "../../../../Context/DarkMode";
import { MdOutlineAutoDelete } from "react-icons/md";

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
      <ClassLayouts bg={isDarkMode ? "bg-[#000000]" : "bg-[#FFFFFF]"}>
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
                  title={items.classes}
                  description={items.description}
                />
              </DepartmentsList>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <MdOutlineAutoDelete className="text-4xl text-[#335DFF]"/>
            <p className="text-xl italic font-semibold text-slate-400">class not found</p>
          </div>
        )}

        {/* <div className="w-full h-full bg-blue-400">
          <h1>hello world</h1>
        </div> */}
      </ClassLayouts>
  );
};

export default Class;
