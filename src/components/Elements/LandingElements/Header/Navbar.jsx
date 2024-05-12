const Navbar = (props) => {
    const {children} = props
  return (
    <ul className="w-full hidden md:flex justify-center md:gap-x-[20px] lg:gap-x-[40px] text-[18px] font-medium">
        {children}
    </ul>
  );
};

export default Navbar;
