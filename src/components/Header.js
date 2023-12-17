import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, showAdd, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        onClick={onAdd}
        text={showAdd ? "close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "ToDo List",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
