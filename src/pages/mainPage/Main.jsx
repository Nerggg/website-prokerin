import SideBar from "../../components/sidebar/SidebarHome";
import Card1 from "../../components/cards/Card1";
import Card2 from "../../components/cards/Card2";
import Card3 from "../../components/cards/Card3";
import Ad from "../../components/advertisement/Ad";

function Main() {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="absolute bg-red-400 w-full py-8 text-white flex justify-around items-center flex-col">
        <p className="py-4 text-center text-5xl font-bold">
          Welcome to ProkerIn!
        </p>
        <p className="mt-4 text-center text-2xl mb-[10px]">
          The Right Place to See A Working Program
        </p>
      </div>
      <div className="w-screen pt-[240px] pb-[30px]">
        <div className="bg-red-400 w-[26%] ml-[16%] h-auto flex justify-center items-center drop-shadow-md rounded-xl">
          <span className="font-bold text-white text-[44px]">
            Selected Proker
          </span>
        </div>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <Ad />
    </div>
  );
}

export default Main;
