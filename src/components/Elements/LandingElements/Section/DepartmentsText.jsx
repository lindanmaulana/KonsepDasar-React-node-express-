const DepartmentsText = (props) => {
    const {title, description} = props
  return (
    <div>
      <div className="max-w-[600px] md:w-[400px] lg:w-[592px] px-[40px] py-[50px] flex flex-col justify-center items-start gap-y-[20px]">
        <h3 className="text-[30px] text-[#030F4B] font-bold ">
          {title}
        </h3>
        <p className="text-[20px] text-[#4A4E63] font-medium ">
         {description}
        </p>
        <a
          href=""
          className="bg-[#335DFF] rounded-[8px] px-[40px] py-[15px] text-[18px] font-bold text-[#FCFCFF] shadow-md shadow-[#335DFF]"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default DepartmentsText;
