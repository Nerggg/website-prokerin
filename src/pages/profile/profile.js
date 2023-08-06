import Header from '../../components/header/header'
import Emoji from '../../assets/general/emoji.png'

function Profile() {
  return (
    <div>
      <Header />
      <div className="flex flex-1 grid grid-cols-[50%_50%]">
        <div>
            <div className="font-bold text-[57px] pt-[10%] pl-[6%]">Student Activities.</div>
            <div className="text-[57px] pl-[6%]">Reviews from the</div>
            <div className="font-bold text-[57px] pl-[6%]">Experienced.</div>
            <div className="w-[120px] h-[8px] mt-[26px] bg-red-400 rounded-full ml-[6%]" />
            <div className="text-[18px] text-gray-700 pl-[6%] pt-[26px] w-[90%]">Your one-stop destination for sharing and discovering reviews on various programs, organizations, and campus activities at ITB.</div>
            <div className="w-[120px] h-[40px] bg-red-400 rounded-full flex justify-center items-center text-white ml-[6%] mt-[26px]">Learn More</div>
        </div>
        <div className="items-center">
            <img src={Emoji} alt="homepage" className="object-center w-auto h-2/3 pt-[10%] px-[6%] m-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
