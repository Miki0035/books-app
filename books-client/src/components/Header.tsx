import "../styles/header.css";
import { FaBook, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
      <nav className="navbar">
        <div className="nav-link-container">
          <Link to={"/"}>
            <FaBook  size={32} color="#fff"/>
          </Link>
          <Link to={"/new-book"}>
            <FaPlus size={23} color="#fff" /> <span>Add New Book</span>
          </Link>
        </div>
      </nav>
  );
};

export default Header;
