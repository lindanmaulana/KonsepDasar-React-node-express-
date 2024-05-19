
const AddLayouts = (props) => {
  const { handleForm, title, icons, children } = props;

  return (
    <div className="flex w-full p-10 text-[#FFFFFf] bg-[#FFFFFF]">
      <div className="self-center">
        <img src="/public/studentsAdd.svg" alt="" className="h-[300px]" />
      </div>
      <form
        onSubmit={handleForm}
        className="flex items-center self-center justify-center w-full "
      >
        <div className="flex flex-col w-2/5 gap-y-5 bg-[#374BAE] px-4 py-4 rounded-md">
          <div className="flex items-center justify-center gap-x-1">
            <h2 className="text-xl">Add {title}</h2>
            {icons}
          </div>
          <div className="flex flex-col gap-y-3">
            {children}
          </div>

          <button className="bg-green-600 w-full rounded-sm text-[#FFFFFF]">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLayouts;
