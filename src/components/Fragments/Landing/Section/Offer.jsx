import OfferList from "../../../Elements/LandingElements/Section/OfferList"

const Offer = () => {
  return (
    <section id="menu-list" className="py-[70px] ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-y-[10px] text-center gap-x-[174px]">
            <OfferList title="24/7 Support" description="Always online to help you" />
            <OfferList title="Secure Payments" description="Pay your semesters fast & secure" />
            <OfferList title="Online Lectures" description="Study in real time, review later" />
          </div>
        </div>
      </section>
  )
}

export default Offer
