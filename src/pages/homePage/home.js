import Logo from '../../assets/general/prokerinLogo.webp'

function Home() {
  return (
    <div className="bg-white w-full h-[130px] flex items-center">
      <img src={Logo} className="w-auto h-[100px] px-[10%]"/>
      <div className="text-lg font-bold pr-[4%]">Home</div>
      <div className="text-lg pr-[36%]">About Us</div>
      <div className="w-[110px] h-[40px] border border-black rounded-full mr-[2%]"></div>
      <div className="w-[110px] h-[40px] bg-red-400 rounded-full"></div>
    </div>
  );
}

export default Home;
