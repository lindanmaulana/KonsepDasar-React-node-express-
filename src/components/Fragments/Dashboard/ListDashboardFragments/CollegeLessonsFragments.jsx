import { Fragment } from "react";
import ContentList from "../../../Elements/DashboardElements/ListDashboard/Content";
import HeaderOne from "../../../Elements/DashboardElements/ListDashboard/HeaderList";
import HeaderTwo from "../../../Elements/DashboardElements/ListDashboard/HeaderTwo";
import Option from "../../../Elements/DashboardElements/ListDashboard/Option";

const CollegeLessonsFragments = (props) => {
  const { data } = props;

  return (
    <Fragment>
      <HeaderOne title="College Lessons" />
      <HeaderTwo titleSelect="Day" subject="College Lessons">
        <Option value="" />
        <Option value="Senin" />
        <Option value="Selasa" />
        <Option value="Rabu" />
        <Option value="Kamis" />
        <Option value="Jumat" />
      </HeaderTwo>
      <ContentList>
        <table className="w-full overflow-hidden rounded-md shadow-lg">
          <thead>
            <tr className="bg-[#374BAE] text-[#FFFFFF]">
              <th className="p-2">No</th>
              <th>Mata Kuliah</th>
              <th>Jadwal</th>
              <th>Dosen</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((items) => {
                let posisi = ''
                if(items.id % 2 === 0) {
                  posisi = "bg-[#eee]"
                } else {
                  posisi = "bg-[#FFFFFF]"
                }
                return (
                  <tr key={items.id} className={`${posisi}`}>
                    <td className="px-4 py-2">{items.id}</td>
                    <td>{items.mata_kuliah}</td>
                    <td>{items.jadwal}</td>
                    <td>{items.dosen}</td>
                  </tr>
                );
              })
            ) : (
              <p>Terjadi kesalahan!!</p>
            )}
          </tbody>
        </table>
      </ContentList>
    </Fragment>
  );
};

export default CollegeLessonsFragments;
