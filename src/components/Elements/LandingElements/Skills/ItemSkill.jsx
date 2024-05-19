const ItemSkill = (props) => {
    const {src, duration, title} = props
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={`${duration}`}
      className="flex flex-col items-center justify-center bg-[#FFFFFF] w-32 h-32 rounded-md hover:shadow-lg "
    >
      <img src={`/src/assets/icons/${src}`} alt={`${title}`} className="w-16 h-16" />
      <p className="text-[#335DFF]">{title}</p>
    </div>
  );
};

export default ItemSkill;
