import "./header.css";

const Header = ({ title }) => {
  const getArrow = () => {
    if (title === "Employee") {
      return (
        <div className="header-arrow">
          <img
            src="https://cdn-icons-png.flaticon.com/512/151/151846.png"
            alt="arrow"
          />
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <>
      <div className="header">{title}</div>
      {getArrow()}
    </>
  );
};

export default Header;
