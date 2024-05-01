const AuthLayouts = (props) => {
  const { children, handleForm, loading } = props;
  return (
    <div className="w-[960px] h-screen flex justify-center items-center">
      <div className="w-[508px] ">
        <form
          onSubmit={handleForm}
          className="flex flex-col justify-center items-center gap-y-[30px]"
        >
          {/* form title */}
          <div className="w-[300px] flex justify-between items-center ">
            <img src="../../public/login/loginRight1.svg" alt="logo" />
            <h2 className="font-bold text-[35px] text-[#000000]">
              Digital Admin
            </h2>
          </div>

          {/* form opening */}
          <div className="w-[337.28px] text-center">
            <h2 className="text-[28px] font-bold text-[#000000]">
              Wellcome Back! Admin
            </h2>
            <p className="text-[15px] text-[#777777]">
              Sign in to continue to Income Tax. <span>{loading}</span>
            </p>
          </div>

          {/* form input */}
          {children}
        </form>
      </div>
    </div>
  );
};

export default AuthLayouts;
