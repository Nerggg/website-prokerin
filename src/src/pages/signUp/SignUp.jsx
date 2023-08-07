import Logo from "../../assets/general/prokerinLogo.png";
import Paper from "../../assets/sign/loginPaper.png";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import FormRegister from "../../components/form/FormRegister";
import useStore from "../Store";

function SignUp() {
  const { register } = useStore();
  const navigate = useNavigate();

  const handleInClick = () => {
    navigate("/signin");
  };

  const onSubmit = (data) => {
    console.log(data);
    register(data);
    // navigate("/main");
  };

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <div className="flex items-center w-full h-[50px]">
          <span className="ml-[10%] pt-[140px] text-[16px] text-gray-400">
            Have an account?
          </span>
          <span
            className="ml-[4px] mt-[140px] text-[16px] text-red-400 cursor-pointer z-50"
            onClick={handleInClick}
          >
            {" "}
            Sign In
          </span>
        </div>
        <img src={Logo} className="w-[256px] h-[50px] mt-[110px] ml-[10%]" />
        <FormRegister onSubmit={onSubmit}>
          <button
            type="submit"
            className="ml-[10%] w-[50%] h-[45px] bg-red-500 text-white rounded-full flex justify-center items-center mt-[40px]"
          >
            Create an account
          </button>
        </FormRegister>
        <img
          src={Paper}
          className="absolute ml-[35%] mt-[40px] w-[40%] h-auto"
        />
      </div>
      <div className="ml-[10%] h-screen bg-red-400">
        <div className="pt-[130px] pr-[70px]">
          <div className="text-6xl text-white text-right font-bold ml-[50%]">
            Uniting
          </div>
          <div className="text-6xl text-white text-right font-bold ml-[50%] mt-[15px]">
            ITB's
          </div>
          <div className="text-6xl text-white text-right font-bold ml-[50%] mt-[15px]">
            Future
          </div>
          <div className="text-6xl text-white text-right font-bold ml-[50%] mt-[15px]">
            through
          </div>
          <div className="text-6xl text-white text-right font-bold ml-[50%] mt-[15px]">
            Reviews!
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
