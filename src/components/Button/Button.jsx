import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ children, onClick }) => (
  <div className={styles.container}>
    <button
      type="button"
      className={styles.button}
      onClick={(e) => onClick && onClick(e)}
    >
      {children}
    </button>
  </div>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
};

Button.defaultProps = {
  children: "Search",
  className: "",
};

export default Button;
