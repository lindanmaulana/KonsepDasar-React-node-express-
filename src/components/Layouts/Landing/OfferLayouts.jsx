
const OfferLayouts = (props) => {
  const {bg, children} = props
  return (
    <section id="menu-list" className={`py-[70px] ${bg}`}>
      <div className="container">
        <div className="w-full h-full flex flex-wrap justify-center items-center gap-y-[10px] px-2 text-center gap-x-[20px] lg:gap-x-[174px]">
          {children}
        </div>
      </div>
    </section>
  )
}

export default OfferLayouts
