import { useState } from "react";
import HeaderHamburger from "../../../Elements/LandingElements/Header/HeaderHamburger";
import ListNavbar from "../../../Elements/LandingElements/Header/ListNavbar";
import OptionLogin from "../../../Elements/LandingElements/Header/OptionLogin";
import HeaderLayouts from "../../../Layouts/Landing/HeaderLayouts";
import Navbar from "../../../Elements/LandingElements/Header/Navbar";

const LandingHeader = (props) => {
  const { title } = props;
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setState(!state);

    setTimeout(() => {
      setLoading(!loading);
    }, 500);
  };
  return (
    <HeaderLayouts>
      <div>
        <a href="" className="text-[24px] font-extrabold text-[#374BAE] ">
          {title}
        </a>
      </div>

      <nav>
        <HeaderHamburger
          handleLogin={handleLogin}
          sendState={state}
          loading={loading}
        />

        <Navbar>
          <ListNavbar title="Home" />
          <ListNavbar title="Campus" />
          <ListNavbar title="Education" />
          <ListNavbar title="Alumni" />
          <ListNavbar title="About" />
        </Navbar>
        
      </nav>

      <div className="hidden md:block bg-[#FD4455] rounded-[8px] text-[#FCFCFF] hover:opacity-50 btn-transition z-[99]">
        <button onClick={handleLogin} className="px-[40px] py-[10px]">
          {loading ? "Back" : "Login"}
        </button>
      </div>

      {state && <OptionLogin loading={loading} />}
    </HeaderLayouts>
  );
};

export default LandingHeader;
