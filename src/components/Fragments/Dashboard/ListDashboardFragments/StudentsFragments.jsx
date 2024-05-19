import { Fragment, useState } from "react";
import ContentList from "../../../Elements/DashboardElements/ListDashboard/Content";
import HeaderOne from "../../../Elements/DashboardElements/ListDashboard/HeaderList";
import HeaderTwo from "../../../Elements/DashboardElements/ListDashboard/HeaderTwo";
import Option from "../../../Elements/DashboardElements/ListDashboard/Option";
import AddLayouts from "../../../Layouts/Dashboard/AddLayouts";
import Input from "../../../Elements/DashboardElements/ListDashboard/Input";
import { IoPeopleCircleOutline } from "react-icons/io5";

const StudentsFragments = (props) => {
  const { data, handleForm, handleDelete } = props;
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  };

  return (
    <Fragment>
      <HeaderOne title="Students" />
      <HeaderTwo
        titleSelect="City"
        addButton={state ? "Back" : "+ Add Students"}
        handleAdd={handleState}
      >
        <Option value="" />
        <Option value="Kuningan" />
        <Option value="Cirebon" />
        <Option value="Majalengka" />
      </HeaderTwo>
      <ContentList>
        {state ? (
          <AddLayouts title="Students" handleForm={handleForm} icons={<IoPeopleCircleOutline className="self-center text-2xl" />}>
            <Input type="text" name="nama" placeholder="Nama"/>
            <Input type="text" name="asalDesa" placeholder="Asal Desa" />
            <Input type="text" name="asalKota" placeholder="Asal Kota" />
            <Input type="number" name="noAbsen" placeholder="Nomor Absen" />
          </AddLayouts>
        ) : (
          <table className="w-full overflow-hidden rounded-md shadow-lg">
            <thead>
              <tr className="bg-[#374BAE] text-[#FFFFFF]">
                <td  className="p-2">Nama</td>
                <td>Asal Desa</td>
                <td>Asal Kota</td>
                <td>No Absen</td>
                <td>Sett</td>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((items) => {
                  let posisi = "";
                  if (items.no_absen % 2 === 0) {
                    posisi = "bg-[#eee]";
                  } else {
                    posisi = "bg-[#FFFFFF]";
                  }
                  return (
                    <tr key={items.noAbsen} className={`${posisi}`}>

                      <td className="px-4 py-2">{items.nama}</td>
                      <td>{items.asal_desa}</td>
                      <td>{items.asal_kota}</td>
                      <td >{items.no_absen}</td>
                      <td>
                        <button
                          className="bg-red-700 text-[#FFFFFF] px-1 rounded-md"
                          onClick={() => handleDelete(items.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p> Terjadi kesalahan!!! </p>
              )}
            </tbody>
          </table>
        )}
      </ContentList>
    </Fragment>
  );
};

export default StudentsFragments;
