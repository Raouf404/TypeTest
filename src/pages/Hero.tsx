import Button from "../components/Button";
import Modal from "../components/Modal";

const Hero: React.FC = () => {
  return (
    <section className="flex">
      <div className="h-screen w-1/2 flex flex-col justify-center px-[80px] bg-beige">
        <h1 className="mb-2 text-6xl font-bold">
          Testez la vitesse de votre écriture!
        </h1>
        <p className="mb-4 text-xl text-darkGray">
          Choisissez la difficulté et le temps de l’épreuve et commancez le
          test.
        </p>
        <div className="flex gap-4">
          <Button label="Commancer le test">
            <img
              className="ml-4 h-4 w-4"
              src="../../public/assets/icons/arrow-forward.svg"
            />
          </Button>
          <Button label="Changer la langue" variant="beige" />
        </div>
      </div>
      <div className="h-screen flex-1">
        <img
          className="h-full w-full object-cover"
          src="../../public/assets/images/keyboard.jpg"
          alt="Hero"
        />
      </div>
      <Modal />
    </section>
  );
};

export default Hero;
