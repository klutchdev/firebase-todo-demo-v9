import { useRef } from "react";
import { string, element, func } from "prop-types";

const TextInput = ({
  value,
  handleChange,
  leftIcon,
  rightIcon,
  placeholder,
  onKeyDown,
  onKeyUp,
  textColor,
  leftIconColor,
  rightIconColor,
  width,
  height,
  margin,
  border,
  radius,
  shadow,
  autoComplete,
}) => {
  const inputRef = useRef(null);
  const styles = {
    input: {
      width: width || "100%",
      height: height || "2.75rem",
      margin: margin || "0.25rem 0 1rem 0",
      padding: "0 0.25rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      outline: "none",
      background: "#03030350",
      border: border || "2px solid #545759",
      borderRadius: radius || "5px",
      transition: "all 300ms ease",
      boxShadow: shadow || "1px 1px 10px #03030390",
    },
    leftIcon: {
      margin: "0 auto 0 0",
      width: "3rem",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: leftIconColor || "#3e4244",
      transition: "all 300ms ease",
    },
    rightIcon: {
      margin: "auto 0 auto auto",
      width: "3rem",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: rightIconColor || "#3e4244",
      transition: "all 300ms ease",
    },
    inputField: {
      width: "100%",
      height: "100%",
      outline: "none",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      color: textColor || "#d9d9d9",
      background: "transparent",
      fontSize: "1.25rem",
      letterSpacing: "0.75px",
      fontWeight: 400,
      fontFamily: "Montserrat",
    },
  };

  return (
    <div ref={inputRef} style={styles.input}>
      {leftIcon && <div style={styles.leftIcon}>{leftIcon}</div>}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        autoComplete={autoComplete || "off"}
        style={styles.inputField}
      />
      {rightIcon && <div style={styles.rightIcon}>{rightIcon}</div>}
    </div>
  );
};

TextInput.propTypes = {
  value: string,
  handleChange: func,
  onKeyUp: func,
  onKeyDown: func,
  leftIcon: element,
  rightIcon: element,
  leftIconColor: string,
  rightIconColor: string,
  placeholder: func,
  width: string,
  height: string,
  margin: string,
  border: string,
  radius: string,
  shadow: string,
  autoComplete: string,
  textColor: string,
  bgColor: string,
};

export default TextInput;
