import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        {/* link to the project of this one with the other  
        <Link to> */}
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback Ui",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
