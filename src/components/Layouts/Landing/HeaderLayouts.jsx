import { useState } from "react";
import LandingHeader from "../../Fragments/Landing/Header/LandingHeader";

const HeaderLayouts = (props) => {
  const {children} = props
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleState = () => {
    setState(!state);

    setTimeout(() => {
      setLoading(!loading);
    }, 500);
  };
  return (
    <header className="py-[41px]">
      <div className="w-full flex justify-between items-center fixed top-0 right-0 py-[20px] px-2 lg:px-8 z-[99]">
        {children}
      </div>
    </header>
  );
};

export default HeaderLayouts;

{
  /* <LandingHeader title="Informatika" handleLogin={handleState} state={state} loading={loading}/> */
}
