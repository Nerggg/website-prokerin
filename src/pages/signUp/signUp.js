import Form from '../../components/form/form'

function SignUp() {
  return (
    <div>
      <div className="flex items-center w-full h-[50px]">
        <span className="pl-[6%] pt-[180px] text-[16px] text-gray-400">Don't have an account?</span>
        <span className="pl-[4px] pt-[180px] text-[16px] text-red-400"> Sign In</span>
      </div>
      <Form />
      <button
        type="submit"
        className="w-[500px] h-[45px] bg-red-500 rounded-full flex justify-center items-center text-white ml-[6%] mt-[40px]">
        Create an account
      </button>
    </div>
  );
}

export default SignUp;
