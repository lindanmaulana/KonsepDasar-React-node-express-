const OfferList = (props) => {
    const {title, description} = props
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-[10px] lg:w-[316px]">
      <img
        src="/src/assets/images/LandingImages/List-menu/work.webp"
        alt=""
        className="rounded-[8px] shadow-lg shadow-black/40"
      />
      <h2 className="text-[24px] font-bold text-[#030F4B]  ">{title}</h2>
      <p className="text-[16px] font-medium text-[#52596E] ">
        {description}
      </p>
    </div>
  );
};

export default OfferList;
