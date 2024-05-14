import { useEffect, useState } from "react";
import { getDataStudents } from "../../services/dashboard.services";
import StudentsFragments from "../../components/Fragments/Dashboard/ListDashboardFragments/StudentsFragments";
import DashboardLayouts from "../../components/Layouts/Dashboard/DashboardLayouts";
import SideBar from "../../components/Fragments/Dashboard/SideBar";
const Students = () => {
  const [dataStudents, setDataStudents] = useState([]);
  useEffect(() => {
    getDataStudents().then((res) => {
      setDataStudents(res.payload.datas);
    });
  }, []);

  return (
    <DashboardLayouts sidebar={<SideBar />}>
      <StudentsFragments data={dataStudents} />
    </DashboardLayouts>
  );
};

export default Students;

// <div className="flex h-screen bg-[#6754B3] ">
//   <div className="w-1/12">
//     <div className="flex flex-col items-center justify-center w-full h-full pl-2 gap-y-4">
//       <Link
//         to={"/dashboard"}
//         className="bg-[#FFFFFF] rounded-md hover:scale-125 btn-transition"
//       >
//         <IoIosArrowBack className="text-3xl text-[#6754B3]" />
//       </Link>
//       <Link
//         to={"/"}
//         className="bg-[#FFFFFF] rounded-md hover:scale-125 btn-transition"
//       >
//         <AiOutlineHome className="text-3xl text-[#6754B3]" />
//       </Link>
//     </div>
//   </div>
//   <section className="flex-1 py-2 overflow-y-scroll">
//     <div className="flex flex-col w-full bg-[#FFFFFF] px-8 rounded-2xl">
//       {/* header */}
//       <div className="flex items-center justify-between w-full  py-4 border-b border-[#6754B3]">
//         <div>
//           <h1 className="text-2xl font-semibold">Students</h1>
//         </div>
//         <div>
//           <input
//             type="text"
//             name="search"
//             placeholder="Search"
//             className="px-2 border border-b-[#6754B3] outline-none"
//           />
//         </div>
//         <div className="flex gap-x-2">
//           <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
//             <span className="self-center block bg-red-800 rounded-full w-7 h-7"></span>
//           </div>
//           <button className="px-4 py-1 text-[#FFFFFF] min-w-[50px] bg-green-500">
//             Add
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center justify-between w-full py-4">
//         <div className="flex flex-col">
//           <label htmlFor="City" className="font-semibold text-black/20">
//             {" "}
//             Select City
//           </label>
//           <select
//             name="City"
//             id="City"
//             className="w-[120px] border border-black/20 font-medium rounded-md px-2"
//           >
//             <option value=""></option>
//             <option value="kng">Kuningan</option>
//             <option value="crb">Cirebon</option>
//             <option value="mjl">Majalengka</option>
//           </select>
//         </div>
//         <div className="flex">
//           <button className="min-w-[100px] h-full bg-[#6754B3] px-4 py-1 text-[#FFFFFF] text-sm rounded-full self-center">
//             {" "}
//             + Add a students
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center justify-start w-full border rounded-md border-black/20">
//         <div className="flex flex-col">
//           <h2 className="px-4 py-4 border-b border-black/20">Id</h2>
//           <ul>
//             {dataStudents ? (
//               dataStudents.map((items) => (
//                 <li
//                   key={items.id}
//                   className="px-4 py-3 border-b border-black/20"
//                 >
//                   {items.id}
//                 </li>
//               ))
//             ) : (
//               <p>Terjadi kesalahan!!</p>
//             )}
//           </ul>
//         </div>
//         <div className="flex flex-col">
//           <h2 className="px-4 py-4 border-b border-black/20">Name</h2>
//           <ul>
//             {dataStudents ? (
//               dataStudents.map((items) => (
//                 <li
//                   key={items.id}
//                   className="px-4 py-3 border-b border-black/20"
//                 >
//                   {items.nama}
//                 </li>
//               ))
//             ) : (
//               <p>Terjadi kesalahan!!</p>
//             )}
//           </ul>
//         </div>
//         <div>
//           <h2 className="px-4 py-4 border-b border-black/20">
//             Asal (Desa)
//           </h2>
//           <ul>
//             {dataStudents ? (
//               dataStudents.map((items) => (
//                 <li
//                   key={items.id}
//                   className="px-4 py-3 border-b border-black/20"
//                 >
//                   {items.asal_desa}
//                 </li>
//               ))
//             ) : (
//               <p>Terjadi kesalahan!!</p>
//             )}
//           </ul>
//         </div>
//         <div>
//           <h2 className="px-4 py-4 border-b border-r border-black/20 ">
//             Asal (Kota)
//           </h2>
//           <ul>
//             {dataStudents ? (
//               dataStudents.map((items) => (
//                 <li
//                   key={items.id}
//                   className="px-4 py-3 border-b border-r border-black/20"
//                 >
//                   {items.asal_kota}
//                 </li>
//               ))
//             ) : (
//               <p>Terjadi kesalahan!!</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>

// header

// <div className="flex items-center justify-between w-full  py-4 border-b border-[#6754B3]">
//   <div>
//     <h1 className="text-2xl font-semibold">Students</h1>
//   </div>
//   <div>
//     <input
//       type="text"
//       name="search"
//       placeholder="Search"
//       className="px-2 border border-b-[#6754B3] outline-none"
//     />
//   </div>
//   <div className="flex gap-x-2">
//     <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
//       <span className="self-center block bg-red-800 rounded-full w-7 h-7"></span>
//     </div>
//     <button className="px-4 py-1 text-[#FFFFFF] min-w-[50px] bg-green-500">
//       Add
//     </button>
//   </div>
// </div>

// <div className="flex items-center justify-between w-full py-4">
//   <div className="flex flex-col">
//     <label htmlFor="City" className="font-semibold text-black/20">
//       {" "}
//       Select City
//     </label>
//     <select
//       name="City"
//       id="City"
//       className="w-[120px] border border-black/20 font-medium rounded-md px-2"
//     >
//       <option value=""></option>
//       <option value="kng">Kuningan</option>
//       <option value="crb">Cirebon</option>
//       <option value="mjl">Majalengka</option>
//     </select>
//   </div>
//   <div className="flex">
//     <button className="min-w-[100px] h-full bg-[#6754B3] px-4 py-1 text-[#FFFFFF] text-sm rounded-full self-center">
//       {" "}
//       + Add a students
//     </button>
//   </div>
// </div>

// content
//   <div className="flex items-center justify-start w-full border rounded-md border-black/20">
//   <div className="flex flex-col">
//     <h2 className="px-4 py-4 border-b border-black/20">Id</h2>
//     <ul>
//       {dataStudents ? (
//         dataStudents.map((items) => (
//           <li
//             key={items.id}
//             className="px-4 py-3 border-b border-black/20"
//           >
//             {items.id}
//           </li>
//         ))
//       ) : (
//         <p>Terjadi kesalahan!!</p>
//       )}
//     </ul>
//   </div>
//   <div className="flex flex-col">
//     <h2 className="px-4 py-4 border-b border-black/20">Name</h2>
//     <ul>
//       {dataStudents ? (
//         dataStudents.map((items) => (
//           <li
//             key={items.id}
//             className="px-4 py-3 border-b border-black/20"
//           >
//             {items.nama}
//           </li>
//         ))
//       ) : (
//         <p>Terjadi kesalahan!!</p>
//       )}
//     </ul>
//   </div>
//   <div>
//     <h2 className="px-4 py-4 border-b border-black/20">Asal (Desa)</h2>
//     <ul>
//       {dataStudents ? (
//         dataStudents.map((items) => (
//           <li
//             key={items.id}
//             className="px-4 py-3 border-b border-black/20"
//           >
//             {items.asal_desa}
//           </li>
//         ))
//       ) : (
//         <p>Terjadi kesalahan!!</p>
//       )}
//     </ul>
//   </div>
//   <div>
//     <h2 className="px-4 py-4 border-b border-r border-black/20 ">
//       Asal (Kota)
//     </h2>
//     <ul>
//       {dataStudents ? (
//         dataStudents.map((items) => (
//           <li
//             key={items.id}
//             className="px-4 py-3 border-b border-r border-black/20"
//           >
//             {items.asal_kota}
//           </li>
//         ))
//       ) : (
//         <p>Terjadi kesalahan!!</p>
//       )}
//     </ul>
//   </div>
// </div>
