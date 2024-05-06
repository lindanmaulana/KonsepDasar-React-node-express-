import Offer from "../../Fragments/Landing/Section/Offer"

const OfferLayouts = () => {
  return (
    <section id="menu-list" className="py-[70px]">
      <div className="container">
        <div className="w-full h-full flex flex-wrap justify-center items-center gap-y-[10px] px-2 text-center gap-x-[20px] lg:gap-x-[174px]">
          <Offer />
        </div>
      </div>
    </section>
  )
}

export default OfferLayouts
