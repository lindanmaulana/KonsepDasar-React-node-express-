import FooterForm from "./FooterForm";
import HeroForm from "./FormHero";
import ImageForm from "./ImageForm";

const Form = () => {
  return (
    <section className="w-full h-screen ">
      <div className="container mx-auto ">
        <div className="flex">
          <ImageForm />
          <HeroForm />
        </div>
      </div>

      {/* footer content */}
      <FooterForm />
    </section>
  );
};

export default Form;
