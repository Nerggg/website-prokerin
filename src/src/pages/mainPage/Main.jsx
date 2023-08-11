import useStore from "../Store";
import { useEffect } from "react";
import ProkerCard from "../../components/cards/ProkerCard";

function Main() {
  const { user, proker, fetchProkerList } = useStore();
  useEffect(() => {
    fetchProkerList(user?.access_token);
  }, [fetchProkerList, user?.access_token]);
  console.log(proker);
  if (!proker?.list) {
    return null;
  }
  const data = proker?.list;
  console.log(data);
  return (
    <div className="">
      <div className=" bg-red-400 w-full py-8 text-white flex justify-around items-center flex-col">
        <p className="py-4 text-center text-5xl font-bold">
          Welcome to ProkerIn!
        </p>
        <p className="mt-4 text-center text-2xl mb-[10px]">
          The Right Place to See A Working Program
        </p>
      </div>
      <div className="px-10 py-2">
        <div className="py-2 ">
          <div className="bg-red-400 w-[26%] pb-1  h-auto flex justify-center items-center drop-shadow-md rounded-xl">
            <div className="font-bold text-white text-[44px]">
              Selected Proker
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 ">
          {data?.map((data) => (
            <ProkerCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
