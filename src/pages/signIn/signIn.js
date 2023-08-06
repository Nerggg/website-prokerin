import Form from '../../components/form/form'
import Logo from '../../assets/general/prokerinLogo.png'
import Paper from '../../assets/sign/loginPaper.png'
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const navigate = useNavigate();

  const handleUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <div className="flex items-center w-full h-[50px]">
          <span className="ml-[10%] pt-[140px] text-[16px] text-gray-400">Don't have an account?</span>
          <span className="ml-[4px] mt-[140px] text-[16px] text-red-400 cursor-pointer z-50" onClick={handleUpClick}> Sign Up</span>
        </div>
        <img src={Logo} className="w-[256px] h-[50px] mt-[110px] ml-[10%]" />
        <Form />
        <img src={Paper} className="absolute mx-[35%] mt-[70px] w-auto h-[550px]" />
        <button
          type="submit"
          className="ml-[10%] w-[50%] h-[45px] bg-red-500 text-white rounded-full flex justify-center items-center mt-[40px]">
          Login
        </button>
      </div>
      <div className="ml-[10%] h-screen bg-red-400">
        <div className="pt-[130px] pr-[70px]">
          <div className="text-6xl text-white text-right font-bold ml-[50%]">Uniting</div>
          <div className="text-6xl text-white text-right font-bold ml-[50%] mt-[15px]">ITB's</div>
          <div className="text-6xl text-white text-right font-bold ml-[50%] mt-[15px]">Future</div>
          <div className="text-6xl text-white text-right font-bold ml-[50%] mt-[15px]">through</div>
          <div className="text-6xl text-white text-right font-bold ml-[50%] mt-[15px]">Reviews!</div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
