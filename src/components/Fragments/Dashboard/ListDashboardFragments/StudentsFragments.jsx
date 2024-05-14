import { Fragment } from "react";
import ContentList from "../../../Elements/DashboardElements/ListDashboard/Content";
import HeaderOne from "../../../Elements/DashboardElements/ListDashboard/HeaderList";
import HeaderTwo from "../../../Elements/DashboardElements/ListDashboard/HeaderTwo";
import Option from "../../../Elements/DashboardElements/ListDashboard/Option";
const StudentsFragments = (props) => {
  const { data } = props;
  console.log(data)
  return (
    <Fragment>
      <HeaderOne title="Students" />
      <HeaderTwo titleSelect="City" subject="Students">
        <Option value="" />
        <Option value="Kuningan" />
        <Option value="Cirebon" />
        <Option value="Majalengka" />
      </HeaderTwo>
      <ContentList>
          <table className="w-full overflow-hidden rounded-md shadow-lg">
            <thead>
              <tr className="bg-[#374BAE] text-[#FFFFFF]">
                <td className="p-2">No</td>
                <td>Nama</td>
                <td>Asal Desa</td>
                <td>Asal Kota</td>
              </tr>
            </thead>
            <tbody>
             {data ? data.map(items => {
              let posisi = ''
              if(items.id % 2 === 0) {
                posisi = "bg-[#eee]"
              } else {
                posisi = "bg-[#FFFFFF]"
              }
               return(
              <tr key={items.id} className={`${posisi}`}>
                <td className="px-4 py-2">{items.id}</td>
                <td>{items.nama}</td>
                <td>{items.asal_desa}</td>
                <td>{items.asal_kota}</td>
              </tr>
             )}): (
              <p> Terjadi kesalahan!!! </p>
             )}
            </tbody>
          </table>
      </ContentList>
    </Fragment>
  );
};

export default StudentsFragments;
