import { Fragment, useEffect, useState } from "react";
import HeaderOne from "../../../Elements/DashboardElements/ListDashboard/HeaderList";
import HeaderTwo from "../../../Elements/DashboardElements/ListDashboard/HeaderTwo";
import ContentList from "../../../Elements/DashboardElements/ListDashboard/Content";
import Option from "../../../Elements/DashboardElements/ListDashboard/Option";
import { getDataClasses } from "../../../../services/classes.services";

const ExploreClasessFragments = () => {
  const [dataCLasses, setDataClasses] = useState([]);

  useEffect(() => {
    getDataClasses().then((res) => {
      if (res) setDataClasses(res);
    });
  }, []);

  return (
    <Fragment>
      <HeaderOne title="Explore Classes"  />
      <HeaderTwo titleSelect="classes" addButton="+ Add Clases">
        {dataCLasses && dataCLasses.map(items => (
            <Fragment key={items.id}>
                <Option value={items.classes} />
            </Fragment>
        ))}
      </HeaderTwo>
      <ContentList>
        <table className="w-full overflow-hidden rounded-md shadow-lg">
          <thead>
            <tr className="bg-[#374BAE] text-[#FFFFFF]">
              <th className="p-2">No</th>
              <th>Classes</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {dataCLasses ?  (
              dataCLasses.map((items) => { 
                let posisi = ''
                if(items.id % 2 == 0) {
                  posisi = "bg-[#eee]"
                } else {
                  posisi = "bg-[#FFFFFF]"
                }
                return (
                <tr key={items.id} className={`${posisi}`}>
                  <td className="px-4 py-2">{items.id}</td>
                  <td className="px-4 py-2">{items.classes}</td>
                  <td className="px-4 py-2">{items.description}</td>
                </tr>
              )})
            ) : (
              <div>
                <h2>Sory halaman error</h2>
              </div>
            )}
          </tbody>
        </table>
      </ContentList>
    </Fragment>
  );
};

export default ExploreClasessFragments;
