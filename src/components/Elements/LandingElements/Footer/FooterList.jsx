const FooterList = (props) => {
    const {href, title} = props
  return (
    <li>
      <a href={href} className="text-[#808396] hover:text-[#030F4B] ">
        {title}
      </a>
    </li>
  );
};

export default FooterList;
