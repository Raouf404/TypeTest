import { useSettings } from "../utils/SettingsProvider";
import { easyTexts, mediumTexts, hardTexts } from "../constants";
import Navbar from "../components/Navbar";
import { pauseIcon, replayIcon } from "../assets/icons";

const Test: React.FC = () => {
  const { difficulty, time } = useSettings() as {
    difficulty: "easy" | "medium" | "hard";
    time: number;
  };
  const texts = {
    easy: easyTexts.texts,
    medium: mediumTexts.texts,
    hard: hardTexts.texts,
  };
  const selectedText = texts[difficulty][Math.floor(Math.random() * 6)];

  return (
    <>
      <Navbar />
      <main
        className="flex justify-center items-start pt-4 px-4 w-screen h-screen bg-beige"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <section className=" sm:w-[600px] md:w-[750px] lg:w-[900px]">
          <div className="flex justify-center gap-4 w-full mb-4">
            <button>
              <img src={replayIcon} alt="Replay" />
            </button>
            <span className="h-fit px-4 py-[6px] leading-[19px] text-white bg-brown rounded-lg">
              {`${Math.floor(time / 60)}:${String(time % 60).padStart(2, "0")}`}
            </span>
            <button>
              <img src={pauseIcon} alt="Pause" />
            </button>
          </div>
          <div className=" mb-4 px-12 py-6 text-2xl text-darkGray border border-darkGray rounded-[24px] shadow-custom">
            {selectedText}
          </div>
        </section>
      </main>
    </>
  );
};

export default Test;
