import Logo from '../../assets/general/prokerinLogo.png'
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  const handleInClick = () => {
    navigate('/signin');
  };

  const handleUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="bg-white w-full h-[130px] flex items-center">
      <img src={Logo} className="w-auto h-[30px] px-[6%]"/>
      <div className="text-lg font-bold pr-[4%]">Home</div>
      <div className="text-lg pr-[40%]">About Us</div>
      <div className="w-[110px] h-[40px] border border-black rounded-full mr-[2%] flex justify-center items-center cursor-pointer" onClick={handleInClick}>Sign in</div>
      <div className="w-[110px] h-[40px] bg-red-400 rounded-full flex justify-center items-center text-white cursor-pointer" onClick={handleUpClick}>Sign up</div>
    </div>
  );
}

export default Header;
