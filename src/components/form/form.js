function Form() {
  return (
    <div>
      <div className="pl-[12%] mt-[200px] text-gray-400">E-mail</div>
      <div className="mt-[5px] ml-[10%] w-[500px] h-[50px] rounded-full border-gray-400 border flex items-center">
        <input
          type="email"
          className="ml-[6%] w-[400px] h-[45px] outline-none"
          placeholder="example@mail.com"
        />
      </div>
      <div className="pl-[12%] mt-[40px] text-gray-400">Password</div>
      <div className="mt-[5px] ml-[10%] w-[500px] h-[50px] rounded-full border-gray-400 border flex items-center">
        <input
          type="email"
          className="ml-[6%] w-[400px] h-[45px] outline-none"
          placeholder="6+ strong characteer"
        />
      </div>
    </div>
  );
}

export default Form;
