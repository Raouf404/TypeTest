import { useSettings } from "../utils/SettingsProvider";
import { easyTexts, mediumTexts, hardTexts } from "../constants";
import Navbar from "../components/Navbar";

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
      <main>
        <div>
          {difficulty}, {time}
        </div>
        <div>{selectedText}</div>
      </main>
    </>
  );
};

export default Test;
