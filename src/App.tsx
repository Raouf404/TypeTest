import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Test from "./pages/Test";
import { SettingsProvider } from "./utils/SettingsProvider";

const App = () => {
  return (
    <SettingsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </SettingsProvider>
  );
};

export default App;
