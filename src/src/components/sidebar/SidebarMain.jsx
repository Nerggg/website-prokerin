import Logo from "../../assets/general/prokerinLogo.png";
import Icon from "@mdi/react";
import {
  mdiHome,
  mdiMagnify,
  mdiAccountCircleOutline,
  mdiPlusBox,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import useStore from "../../pages/Store";

function SideBarMain() {
  const navigate = useNavigate();

  const handleAddProker = () => {
    navigate("/addproker");
  };

  const handleHomeClick = () => {
    navigate("/main");
  };

  return (
    <div className=" h-screen w-[14%] bg-white border-red-400 border-r z-50">
      <img src={Logo} className="px-[15%] pt-[50px]" />
      <div className="flex flex-col pt-[60%] space-y-7 px-[15%]">
        <div className="flex items-center">
          <Icon
            path={mdiHome}
            className="cursor-pointer  text-gray-500"
            onClick={handleHomeClick}
            size={2}
          />
          <div
            className="text-xl ml-3 cursor-pointer text-gray-500"
            onClick={handleHomeClick}
          >
            Home
          </div>
        </div>

        <div className="flex items-center">
          <Icon
            path={mdiAccountCircleOutline}
            className=" text-red-400"
            size={2}
          />
          <div className=" font-bold text-red-400 text-xl ml-3">Profile</div>
        </div>
        <div className="flex items-center">
          <Icon
            size={2}
            path={mdiPlusBox}
            className=" text-gray-500 cursor-pointer"
            onClick={handleAddProker}
          />
          <div
            className="text-gray-500 text-xl ml-3 cursor-pointer"
            onClick={handleAddProker}
          >
            Add Proker
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarMain;
