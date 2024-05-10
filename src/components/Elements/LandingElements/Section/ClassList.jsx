const ClassList = (props) => {
  const { flexDirection, mdFlexDirection, children } = props;
  return (
    <div
      className={`relative flex ${flexDirection} justify-between items-center md:gap-x-[50px] mb-[80px] ${mdFlexDirection} lg:gap-x-[110px] px-2 md:px-0`}
    >
      {children}

      {/* <div className="w-full h-[430px] bg-red-800 absolute top-[50%] -translate-y-[50%] right-[50%] translate-x-[50%] flex justify-evenly items-center">
        <div className="min-w-[400px] max-w-[600px] bg-red-500">
          <h2>Apa itu software engineer</h2>
          <p>
            Insinyur perangkat lunak atau lebih sering dikenal dengan software
            engineer adalah seorang profesional yang tugasnya merancang,
            mengembangkan, memelihara, menguji, dan mengevaluasi perangkat lunak
            komputer (software). Dengan cara ini, mereka dapat membuat perangkat
            lunak atau aplikasi yang handal dan mudah digunakan oleh pengguna.
            Tidak hanya itu, setiap proses yang dilalui untuk membuat perangkat
            lunak atau aplikasi berjalan efisien dan efektif.
          </p>
        </div>
        <div className="max-w-[400px]">
          <div>
          <h2 className="text-lg font-semibold ">Keahlian yang harus dimiliki Software Engineer</h2>
          <ul>
            <li className="px-4 py-1 bg-blue-500">Bahasa pemrograman</li>
            <li className="px-4 py-1 bg-red-500 ">Software testing</li>
            <li className="px-4 py-1 bg-green-500">Object-Oriented-Design</li>
            <li className="px-4 py-1 bg-yellow-500">Komunikasi dan Kerja sama tim</li>
          </ul>
          </div>

          <div>
          <h2 className="text-lg font-semibold ">Tugas Software Engineer</h2>
          <ul>
            <li className="px-4 py-1 bg-blue-500">Mengembangkan sistem informasi</li>
            <li className="px-4 py-1 bg-red-500 ">Menguji kelayakan program software</li>
            <li className="px-4 py-1 bg-green-500">Mengembangkan software yang sesuai kebutuhan</li>
          </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ClassList;
