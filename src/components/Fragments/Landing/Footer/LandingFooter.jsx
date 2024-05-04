import { IoLogoInstagram,  IoLogoYoutube } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import FooterList from "../../../Elements/LandingElements/Footer/FooterList";
const LandingFooter = () => {
  return (
    <footer className="pt-[32px] pb-[56px]">
        <div className="container mx-auto">
          <div className="w-full flex justify-between items-start">
            <div className="w-[241px] flex flex-col gap-y-[20px]">
              <h2 className="text-[24px] font-extrabold text-[#030F4B] mb-[10px]">Informatika</h2>
              <p className="text-[12px] font-medium text-[#030F4B] ">Copyright © 2020 Credischool University.All Right Reserved</p>
            </div>
            <div>
              <ul className="w-[481px] flex flex-wrap justify-center items-center gap-[40px]">
                <FooterList title="Home" />
                <FooterList title="Campus" />
                <FooterList title="Education" />
                <FooterList title="Alumni" />
                <FooterList title="About" />
                <FooterList title="Terms" />
                <FooterList title="Privacy" />
                <FooterList title="GDPR" />
              </ul>
            </div>
            <div className="flex flex-col ">
              <div className="flex ml-auto gap-x-[18px] text-[#52596E] mb-[44px]">
                <IoLogoInstagram className="scale-100"/>
                <BsLinkedin className="scale-100"/>
                <IoLogoYoutube className="scale-100"/>
              </div>
              <p className="text-[12px] font-medium  ">Designed with all my heart by <span className="text-[#FD4455] ">linmid.com</span></p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default LandingFooter