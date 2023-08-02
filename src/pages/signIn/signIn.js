import Form from '../../components/form/form'

function SignIn() {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex items-center w-full h-[50px]">
          <span className="pl-[6%] text-[16px] text-gray-400">Don't have an account?</span>
          <span className="pl-[4px] text-[16px] text-red-400"> Sign Up</span>
        </div>
        <Form />
        <button
          type="submit"
          className="w-[500px] h-[45px] bg-red-500 rounded-full flex justify-center items-center mt-[40px]">
          Login
        </button>
      </div>
      <div className="w-1/2 h-screen bg-red-400"></div>
    </div>
  );
}

export default SignIn;
