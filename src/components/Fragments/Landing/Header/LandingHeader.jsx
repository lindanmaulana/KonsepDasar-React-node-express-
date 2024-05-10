import HeaderHamburger from "../../../Elements/LandingElements/Header/HeaderHamburger";
import LandingList from "../../../Elements/LandingElements/Header/LandingList";
import OptionLogin from "../../../Elements/LandingElements/Header/OptionLogin";
const LandingHeader = (props) => {
  const { title, handleLogin, state, loading } = props;


  return (
    <header className="py-[41px]">
      <div className="w-full flex justify-between items-center fixed top-0 right-0 py-[20px] px-2 lg:px-8 z-[99]">
        <div>
          <a href="" className="text-[24px] font-extrabold text-[#030F4B] ">
            {title}
          </a>
        </div>
        <nav>
          <HeaderHamburger handleLogin={handleLogin} sendState={state} loading={loading} />
          <ul className="w-full hidden md:flex justify-center md:gap-x-[20px] lg:gap-x-[40px] text-[18px] font-medium">
            <LandingList title="Home" />
            <LandingList title="Campus" />
            <LandingList title="Education" />
            <LandingList title="Alumni" />
            <LandingList title="About" />
          </ul>
        </nav>

        <div className="hidden md:block bg-[#FD4455] rounded-[8px] text-[#FCFCFF] hover:opacity-50 btn-transition z-[99]">
          <button onClick={handleLogin} className="px-[40px] py-[10px]">{loading ? "Back" : "Login"}</button>
        </div>
      </div>

      {state && (
        <OptionLogin loading={loading}/>
      )}
    </header>
  );
};

export default LandingHeader;
