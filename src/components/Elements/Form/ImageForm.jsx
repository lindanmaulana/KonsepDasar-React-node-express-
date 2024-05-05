const ImageForm = () => {
  return (
    <div className="relative w-[960px] h-screen lg:flex justify-center items-center hidden ">
      <img
        src="/public/Layer.svg"
        alt="layer"
        className="absolute top-0 w-full h-full"
      />
      <div className="w-[508px] h-[313px] z-50">
        <img
          src="/public/layerLogo.svg"
          alt="svg"
          className="self-center w-full h-full"
        />
      </div>
    </div>
  );
};

export default ImageForm;
