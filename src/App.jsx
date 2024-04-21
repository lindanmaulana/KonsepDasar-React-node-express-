import Regist from "./Pages/Regist";
function App() {
  return (
    <>
    <Regist />
      {/* login page */}
      <section className="w-[1440px] h-[842.98px]">
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-[720px] h-[842.98px] bg-red-500 flex justify-center items-center">
              <div className="w-[508px] h-[313px]">
                <img
                  src="/public/LoginSvg1.svg"
                  alt="svg"
                  className="self-center w-full h-full"
                />
              </div>
            </div>
            <div className="w-[720px] h-[842.98px] bg-red-500 flex justify-center items-center">
              <div className="py-[250px]">
                <form action=""></form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
