import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-taupe">
      <h1 className="font-cutive text-2xl">
        <Link to="/">TypeTest</Link>
      </h1>
      <ul>
        <li className="font-medium">Langue</li>
      </ul>
    </nav>
  );
};

export default Navbar;
