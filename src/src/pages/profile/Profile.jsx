import Icon from "@mdi/react";
import { mdiAccountCircleOutline, mdiCog, mdiLogout } from "@mdi/js";
// import image
import OSKM from "../../assets/profile/364256865_248657837983541_8565579273458325146_n.jpg";
import TedX from "../../assets/profile/277033832_157081526714819_5698156830627029686_n.jpg";
import OlimKM from "../../assets/profile/325414680_459310653069504_3639164702027856734_n.jpg";
import CDT from "../../assets/profile/339478730_600595242126812_687436227528523438_n.jpg";
import GaneshaS from "../../assets/profile/117724415_183733966470862_4511932069592667694_n.jpg";
import TPBCup from "../../assets/profile/310041451_586614173223916_1851230247954833645_n.jpg";
import useStore from "../Store";

const benefit = [
  {
    id: 1,
    name: "In-Depth Consultation",
  },
  {
    id: 2,
    name: "Detailed Action Plan",
  },
  {
    id: 3,
    name: "Specialized Training",
  },
  {
    id: 4,
    name: "Personal Mentoring",
  },
  {
    id: 5,
    name: "Regular Monitoring and Evaluation",
  },
];

const proker = [
  {
    id: 1,
    name: "OSKM ITB",
    image: OSKM,
    position: "Mentor",
    year: "2023",
    exp: "2 Month Exp.",
  },
  {
    id: 2,
    name: "TEDxITB",
    image: TedX,
    position: "IT Support",
    year: "2022",
    exp: "12 Month Exp.",
  },
  {
    id: 3,
    name: "Olimpiade KM",
    image: OlimKM,
    position: "Staff Lapangan",
    year: "2022",
    exp: "6 Month Exp",
  },
  {
    id: 4,
    name: "CDT ITB",
    image: CDT,
    position: "Mentor",
    year: "2023",
    exp: "3 Month Exp.",
  },
  {
    id: 5,
    name: "Ganesha Summit",
    image: GaneshaS,
    position: "Pre-Event",
    year: "2023",
    exp: "4 Month Exp.",
  },
  {
    id: 6,
    name: "TPB Cup",
    image: TPBCup,
    position: "Coordinator",
    year: "2023",
    exp: "4 Month Exp.",
  },
  {
    id: 7,
    name: "TPB Cup",
    image: TPBCup,
    position: "Coordinator",
    year: "2023",
    exp: "4 Month Exp.",
  },
  {
    id: 8,
    name: "TPB Cup",
    image: TPBCup,
    position: "Coordinator",
    year: "2023",
    exp: "4 Month Exp.",
  },
  {
    id: 9,
    name: "TPB Cup",
    image: TPBCup,
    position: "Coordinator",
    year: "2023",
    exp: "4 Month Exp.",
  },
];

function Profile() {
  const { user, logout } = useStore();
  console.log(user);
  const logOut = () => {
    logout();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center py-[10px]">
        <Icon path={mdiAccountCircleOutline} className="w-auto h-[60px] " />
        <div className="ml-[1%]">{user.user.nick_name}</div>
        <Icon
          path={mdiLogout}
          onClick={logOut}
          className="w-auto h-[45px] ml-auto"
        />
      </div>
      <div className="flex flex-col items-center overflow-x-hidden pt-20">
        <div className="mt-[10px] flex flex-col mb-12">
          <p className="text-4xl font-semibold">Activities</p>
          <div className="flex items-center">
            <div className="h-[8px] bg-red-400 w-[100px] rounded-full mt-4"></div>
            <div className="h-[2px] bg-gray-500 w-[90%] rounded-full mt-4"></div>
          </div>
          <div className="mt-8 grid grid-cols-1 mx-8 lg:grid-cols-2 2xl:grid-cols-3   gap-x-4 gap-y-4 ">
            {proker.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="rounded-[10px] border-2 border-gray-100 w-[400px] h-[133px] shadow-lg flex justify-between px-2 cursor-pointer"
                >
                  <div className="flex items-center ml-2">
                    <img src={item.image} className="h-16 w-16 rounded-full" />
                    <div className="ml-2">
                      <p className="text-xl font-semibold">{item.name}</p>
                      <p className="text-base text-gray-500">{item.position}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-end">
                    <p className="text-xl font-semibold">{item.year}</p>
                    <p className="text-base text-gray-500">{item.exp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
