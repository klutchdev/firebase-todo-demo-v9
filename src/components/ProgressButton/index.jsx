import { useEffect, useRef, useState } from "react";
import { string, func, bool, number } from "prop-types";
import useHover from "../../hooks/useHover";

const ProgressButton = ({
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
  percent,
}) => {
  const progressButtonRef = useRef(null);
  const { isHover } = useHover(progressButtonRef);

  return (
    <div className="button-container">
      <button
        ref={progressButtonRef}
        onClick={onClick}
        type={type || "button"}
        disabled={disabled || false}
        style={{
          position: "relative",
          overflow: "hidden",
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
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: percent + "%" || "0%",
            top: 0,
            left: 0,
            background: "linear-gradient(to right, #8eff6f, #64ff56)",
            transition: "width 350ms ease",
          }}
        />
        <span
          style={{
            position: "relative",
            color: "#000000",
          }}
        >
          {" "}
          {loading ? "Uploading... " + percent + "%" : label}
        </span>
      </button>
    </div>
  );
};

ProgressButton.propTypes = {
  type: string.isRequired,
  label: string.isRequired,
  loading: bool.isRequired,
  percent: number.isREquired,
  onClick: func,
  width: string,
  bgColor: string,
  disabledBgColor: string,
  textColor: string,
  disabled: bool,
  disabledTextColor: string,
  margin: string,
  padding: string,
  fontFamily: string,
  height: string,
  radius: string,
  border: string,
  fontSize: string,
  letterSpacing: string,
  transition: string,
  shadow: string,
  hoverShadow: string,
  fontWeight: number,
  textAlign: string,
};

export default ProgressButton;
