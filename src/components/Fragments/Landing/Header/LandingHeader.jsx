import LandingList from "../../../Elements/LandingElements/Header/LandingList";

const LandingHeader = () => {
  return (
    <header className="py-[41px]">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center">
          <div>
            <a href="" className="text-[24px] font-extrabold text-[#030F4B] ">
              Informatika
            </a>
          </div>
          <nav>
            <ul className="flex justify-center gap-x-[40px] text-[18px] font-medium">
              <LandingList title="Home"/>
              <LandingList title="Campus"/>
              <LandingList title="Education"/>
              <LandingList title="Alumni"/>
              <LandingList title="About"/>
            </ul>
          </nav>

          <div className="bg-[#FD4455] px-[40px] py-[15px] rounded-[8px] text-[#FCFCFF]  ">
            <a href="">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
