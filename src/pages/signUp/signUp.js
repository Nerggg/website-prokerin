import Form from '../../components/form/form'
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();

  const handleInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col">
        <div className="flex items-center w-full h-[50px]">
          <span className="ml-[10%] pt-[180px] text-[16px] text-gray-400">Have an account?</span>
          <span className="ml-[4px] mt-[180px] text-[16px] text-red-400 cursor-pointer z-50" onClick={handleInClick}> Sign In</span>
        </div>
        <Form />
        <button
          type="submit"
          className="ml-[10%] w-[500px] h-[45px] bg-red-500 text-white rounded-full flex justify-center items-center mt-[40px]">
          Create an account
        </button>
      </div>
      <div className="w-1/2 ml-[10%] h-screen bg-red-400">
        <div className="pt-[130px] pr-[70px]">
          <div className="text-6xl text-white text-right font-bold ml-[50%]">Uniting ITB's Future through Reviews!</div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
