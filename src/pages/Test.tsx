import { useSettings } from "../utils/SettingsProvider";
import { Link } from "react-router-dom";
import { easyTexts, mediumTexts, hardTexts } from "../constants";

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
    <main>
      <div>
        {difficulty}, {time}
      </div>
      <div>{selectedText}</div>
      <Link to="/">Retour</Link>
    </main>
  );
};

export default Test;
