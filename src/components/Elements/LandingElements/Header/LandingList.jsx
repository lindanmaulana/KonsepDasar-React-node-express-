const LandingList = (props) => {
    const {href, title} = props
  return (
    <li>
      <a href={href} className="text-[#808396] hover:text-[#030F4B] cursor-pointer ">
        {title}
      </a>
    </li>
  );
};

export default LandingList;
