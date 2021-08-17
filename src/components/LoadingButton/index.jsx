import { useRef } from "react";
import { string, func, bool, number } from "prop-types";
import useHover from "../../hooks/useHover";

const LoadingButton = ({
  type,
  onClick,
  width,
  bgColor,
  disabledBgColor,
  textColor,
  disabled,
  disabledTextColor,
  margin,
  padding,
  fontFamily,
  height,
  radius,
  border,
  fontSize,
  letterSpacing,
  transition,
  shadow,
  hoverShadow,
  fontWeight,
  textAlign,
  label,
  loading,
}) => {
  const loadingButtonRef = useRef(null);
  const { isHover } = useHover(loadingButtonRef);

  const styles = {
    loader: {
      margin: "auto",
      border: "5px solid #03030320",
      borderTop: "5px solid #030303ee",
      borderRadius: "50%",
      width: "2.5rem",
      height: "2.5rem",
    },
    button: {
      width: width || "50%",
      height: height || "3rem",
      padding: padding || "0 1rem",
      margin: margin || "1rem auto",
      background: disabled ? disabledBgColor : bgColor,
      color: disabled ? disabledTextColor : textColor,
      border: border || "none",
      borderRadius: radius || "4px",
      textAlign: textAlign || "center",
      fontWeight: fontWeight || 700,
      fontSize: fontSize || "1.35rem",
      letterSpacing: letterSpacing || "1.25px",
      fontFamily: fontFamily || "'Montserrat', sans-serif",
      filter: isHover ? " brightness(1.2)" : " brightness(1)",
      transition: transition || "all 250ms ease",
      boxShadow: isHover ? hoverShadow : shadow,
    },
  };

  const Loader = () => <div className="rotation" style={styles.loader} />;

  return (
    <div className="button-container">
      <button
        ref={loadingButtonRef}
        onClick={onClick}
        type={type || "button"}
        disabled={disabled || false}
        style={styles.button}
      >
        {loading ? <Loader /> : label}
      </button>
    </div>
  );
};

LoadingButton.propTypes = {
  type: string.isRequired,
  label: string.isRequired,
  loading: bool.isRequired,
  onClick: func,
  width: string,
  height: string,
  bgColor: string,
  textColor: string,
  disabled: bool,
  disabledBgColor: string,
  disabledTextColor: string,
  margin: string,
  padding: string,
  radius: string,
  border: string,
  fontSize: string,
  fontFamily: string,
  fontWeight: number,
  letterSpacing: string,
  textAlign: string,
  transition: string,
  shadow: string,
  hoverShadow: string,
};

export default LoadingButton;
