import Header from "../../components/header/headerHome";
import Bubble from "../../assets/home/chatBubble.png";

function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2">
        <div>
          <div className="font-bold text-[57px] pt-[10%] pl-[10%]">
            Student Activities.
          </div>
          <div className="text-[57px] pl-[10%]">Reviews from the</div>
          <div className="font-bold text-[57px] pl-[10%]">Experienced.</div>
          <div className="w-[120px] h-[8px] mt-[26px] bg-red-400 rounded-full ml-[10%]" />
          <div className="text-[18px] text-gray-700 pl-[10%] pt-[26px] w-[90%]">
            Your one-stop destination for sharing and discovering reviews on
            various programs, organizations, and campus activities at ITB.
          </div>
          <div className="w-[120px] h-[40px] bg-red-400 rounded-full flex justify-center items-center text-white ml-[10%] mt-[26px]">
            Learn More
          </div>
        </div>
        <div className="mt-[-10%]">
          <img
            src={Bubble}
            alt="homepage"
            className="absolute w-[50%] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
