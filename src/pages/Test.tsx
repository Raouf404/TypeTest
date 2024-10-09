import { useSettings } from "../utils/SettingsProvider";
import { Link } from "react-router-dom";

const Test: React.FC = () => {
  const { difficulty, time } = useSettings();

  return (
    <section>
      {difficulty}, {time}
      <Link to="/">Retour</Link>
    </section>
  );
};

export default Test;
