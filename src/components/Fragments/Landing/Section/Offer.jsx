import OfferList from "../../../Elements/LandingElements/Section/OfferList"

const Offer = () => {
  return (
    <section id="menu-list" className="py-[70px] bg-black/30">
        <div className="container">
          <div className="w-full h-full flex flex-wrap justify-center items-center gap-y-[10px] px-2 text-center gap-x-[20px] lg:gap-x-[174px]">
            <OfferList title="24/7 Support" description="Always online to help you" />
            <OfferList title="Secure Payments" description="Pay your semesters fast & secure" />
            <OfferList title="Online Lectures" description="Study in real time, review later" />
          </div>
        </div>
      </section>
  )
}

export default Offer
