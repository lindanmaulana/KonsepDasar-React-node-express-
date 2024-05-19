import { Fragment, useState } from "react";
import HeaderOne from "../../Elements/DashboardElements/ListDashboard/HeaderList";
import ContentList from "../../Elements/DashboardElements/ListDashboard/Content";

const ProfileFragments = () => {
  const [imgUrl, setImgUrl] = useState("");

  const handleInputImg = (event) => {
    const file = event.target.files[0]

    const reader = new FileReader()

    reader.onload = () => {
      const base64String = reader.result

      setImgUrl(base64String)
    }

    reader.readAsDataURL(file)
  };
  
  return (
    <Fragment>
      <HeaderOne title="Profile" />
      <ContentList>
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center px-6 py-4 rounded-md gap-x-10">
            <div className="flex flex-col items-center justify-center w-1/2 gap-y-5">
              <div className={`w-[250px] flex flex-col gap-y-2`}>
                <img src={imgUrl ? imgUrl : "/public/profile.svg"} alt="" className="w-full h-[250px] rounded-full"/>
                <input
                  type="file"
                  accept="image/*"
                  title="Pilih foto"
                  onChange={handleInputImg}
                />
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-y-5">
              <div>
                <h3>Name:</h3>
                <p className="text-black/40">Username</p>
              </div>
              <div>
                <h3>Email:</h3>
                <p className="text-black/40">mihjk@gmail.com</p>
              </div>
              <div>
                <h3>Phone Number:</h3>
                <p className="text-black/40">+6285322701120</p>
              </div>
              <div>
                <h3>Address</h3>
                <p className="text-black/40">Jalan raya desa muncangela</p>
              </div>
            </div>
          </div>
        </div>
      </ContentList>
    </Fragment>
  );
};

export default ProfileFragments;
