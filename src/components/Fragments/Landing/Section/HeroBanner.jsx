
const HeroBanner = () => {
  return (
    <section id="hero-banner" className="py-[60px]">
        <div className="container mx-auto">
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-start gap-y-[40px] ">
              <h1 className="text-[60px] text-[#030F4B] font-bold leading-[60px]  ">
                A virtual university, with real degrees
              </h1>
              <p className="text-[20px] text-[#52596E] font-medium pr-[142px]  ">
                Credischool is an accredited virtual university built by top
                professors from Harvard, Stanford, MIT, and many more. The
                students at Credischool are welcome to study at their own pace.
              </p>
              <a
                href=""
                className="bg-[#335DFF] rounded-[8px] text-[#FCFCFF] font-bold text-[18px] py-[15px] px-[40px] "
              >
                Learn more
              </a>
            </div>
            <div className="w-full h-full bg-[#030F4B]">
              <img
                src="/src/assets/images/lindanm.png"
                alt=""
                className="absolute top-0 -z-50 w-[560px] h-[560px] right-0 "
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroBanner
