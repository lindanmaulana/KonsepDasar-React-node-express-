
const ClassLayouts = (props) => {
  const {bg, children} = props
  return (
    <section id="departments" className={`pt-[70px] pb-[20px] md:pb-[67px] ${bg}`}>
      <div className="container">
        <h2 className="text-center text-[40px] text-[#335DFF] font-bold mb-[80px]">
          Explore classes
        </h2>
        {children}
      </div>
    </section>
  );
};

export default ClassLayouts;
