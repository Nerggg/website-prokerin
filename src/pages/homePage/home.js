import Header from '../../components/header/header'

function Home() {
  return (
    <div>
      <Header />
      <div className="font-bold text-[57px] pt-[75px] pl-[6%]">Student Activities.</div>
      <div className="text-[57px] pl-[6%]">Review from the</div>
      <div className="font-bold text-[57px] pl-[6%]">Experienced.</div>
      <div className="w-[120px] h-[8px] mt-[26px] bg-red-400 rounded-full ml-[6%]" />
      <div className="text-[18px] text-gray-700 pl-[6%] pt-[26px] w-[45%]">Your one-stop destination for sharing and discovering reviews on various programs, organizations, and campus activities at ITB.</div>
      <div className="w-[110px] h-[40px] bg-red-400 rounded-full flex justify-center items-center text-white ml-[6%] mt-[26px]">Learn More</div>
    </div>
  );
}

export default Home;
