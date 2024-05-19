import { useEffect, useState } from "react";
import LandingFooter from "../components/Fragments/Landing/Footer/LandingFooter";
import LandingHeader from "../components/Fragments/Landing/Header/LandingHeader";
import { getDataStudents } from "../services/dashboard.services";

const StudentsPage = () => {
  const [dataStudents, setDataStudents] = useState([]);

  useEffect(() => {
    getDataStudents().then((res) => setDataStudents(res.payload.datas));
  }, []);
  return (
    <>
      <LandingHeader title="Students" href="students" />
      <section className="py-10">
        <div className="container">
          <table className="min-w-full border-2 divide-y-2 divide-slate-500 border-slate-500">
            <thead className="bg-[#335DFF]">
              <tr className="text-left text-[#FFFFFF]">
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2 ">Asal Desa</th>
                <th className="px-4 py-2 ">Asal Kota</th>
                <th className="px-4 py-2 "></th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-200">
              {dataStudents ? (
                dataStudents.map((items) => { 
                  let background = ''
                  if(items.no_absen % 2 === 0) {
                    background = "bg-[#eee]"
                  } else {
                    background = "bg-[#FFFFFF]"
                  }
                  return(
                  <tr key={items.id} className={`${background}`}>
                    <td className="px-4 py-2 whitespace-nowrap">{items.nama}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{items.asal_desa}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{items.asal_kota}</td>
                    <td className="px-2 py-2 whitespace-nowrap">
                      <a href="" className="text-[#FFFFFF] font-medium px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700">View</a>
                    </td>
                  </tr>
                )})
              ) : (
                <h1>ssalah</h1>
              )}
            </tbody>
          </table>
        </div>
      </section>
      <LandingFooter />
    </>
  );
};

export default StudentsPage;
