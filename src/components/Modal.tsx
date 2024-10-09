import { useSettings } from "../utils/SettingsProvider";
import { Link } from "react-router-dom";
import Button from "./Button";

type ModalProps = {
  onClick: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClick }) => {
  const { difficulty, setDifficulty, time, setTime } = useSettings();

  return (
    <>
      <div
        onClick={onClick}
        className="h-screen w-screen bg-darkGray75 absolute"
      ></div>
      <div className="flex flex-col items-center p-6 w-[324px] bg-beige absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[32px]">
        <h2 className="text-2xl mb-12">Choissez votre test</h2>
        <div className="flex flex-col gap-4 mb-8 w-full">
          <div className="flex justify-between items-center w-full">
            <label htmlFor="time">Temps</label>
            <select
              name="time"
              id="time"
              onChange={(e) => setTime(Number(e.target.value))}
              value={time}
              className="p-4 rounded-lg w-[138px] bg-beige text-darkGray border border-darkGray"
            >
              <option value={30}>30 secondes</option>
              <option value={60}>1 minute</option>
              <option value={90}>1 minute 30 secondes</option>
              <option value={120}>2 minutes</option>
              <option value={150}>2 minutes 30 secondes</option>
              <option value={180}>3 minutes</option>
            </select>
          </div>
          <div className="flex justify-between items-center w-full">
            <label htmlFor="difficulty">Difficulté</label>
            <select
              name="difficulty"
              id="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
              className="p-4 rounded-lg w-[138px] bg-beige text-darkGray border border-darkGray"
            >
              <option value="easy">Facile</option>
              <option value="medium">Moyen</option>
              <option value="hard">Difficile</option>
            </select>
          </div>
        </div>
        <Link to="/test">
          <Button label="Continuer" fullWidth={true} />
        </Link>
      </div>
    </>
  );
};

export default Modal;
