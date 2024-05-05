import { useState } from "react";
import LandingList from "./LandingList";
import OptionLogin from "./OptionLogin";

const HeaderHamburger = (props) => {
    const {handleLogin, sendState, loading} = props
    
  const [state, setState] = useState(false);
  const [delay, setDelay] = useState(false)

  const handleHamburger = () => {
    setState(!state);
    setTimeout(() => {
        setDelay(!delay)
    }, 300)
  }

  return (
    <>
      <button
        onClick={handleHamburger}
        className="flex flex-col gap-y-1 md:hidden "
      >
        <span className="block w-7 bg-black h-0.5"></span>
        <span className={`block w-2 bg-black h-0.5 ${state ? "-translate-x-0" : "translate-x-4"} transition-all duration-300 ease-in-out`}></span>
        <span className="block w-7 bg-black h-0.5"></span>
      </button>

        {state && (
            <nav className={`absolute top-20 right-1 ${delay ? "opacity-100 -translate-x-[0]" : "opacity-0 translate-x-[100%]"} transition-all duration-300 ease-in-out z-[99]`}>
            <ul className="w-full flex flex-col justify-center gap-y-[10px] text-[18px] font-medium bg-[#335DFF] px-6 py-4 rounded-md md:hidden">
              <LandingList title="Home" />
              <LandingList title="Campus" />
              <LandingList title="Education" />
              <LandingList title="Alumni" />
              <LandingList title="About" />
              <button onClick={handleLogin} className="text-[#808396] hover:text-[#030F4B] cursor-pointer text-left">Login</button>
            </ul>
          </nav>
        )}
        
        {/* To Login Page */}
        {sendState&& (
            <OptionLogin loading={loading}/>
        )}
    </>
  );
};

export default HeaderHamburger;
