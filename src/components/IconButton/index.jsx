// import { useRef } from "react";
// import { string, func, bool, number, element } from "prop-types";
// import useHover from "../../hooks/useHover";

// const IconButton = ({
//   type,
//   onClick,
//   width,
//   bgColor,
//   disabledBgColor,
//   textColor,
//   disabled,
//   disabledTextColor,
//   margin,
//   padding,
//   fontFamily,
//   height,
//   radius,
//   border,
//   fontSize,
//   letterSpacing,
//   transition,
//   shadow,
//   hoverShadow,
//   fontWeight,
//   textAlign,
//   label,
//   icon,
// }) => {
//   const buttonRef = useRef(null);
//   const { isHover } = useHover(buttonRef);

//   const styles = {
//     button: {
//       width: width || "auto",
//       height: height || "3rem",
//       padding: padding || "0 1rem",
//       margin: margin || "1rem auto",
//       background: disabled ? disabledBgColor : bgColor,
//       color: disabled ? disabledTextColor : textColor,
//       border: border || "none",
//       borderRadius: radius || "4px",
//       textAlign: textAlign || "center",
//       fontWeight: fontWeight || 700,
//       fontSize: fontSize || "1.25rem",
//       letterSpacing: letterSpacing || 0,
//       fontFamily: fontFamily || '"Montserrat", sans-serif',
//       filter: isHover ? " brightness(1.2)" : " brightness(1)",
//       transition: transition || "all 250ms ease",
//       boxShadow: isHover ? hoverShadow : shadow,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-evenly",
//     },
//   };

//   return (
//     <div className="button-container">
//       <button
//         ref={buttonRef}
//         onClick={onClick}
//         type={type || "button"}
//         disabled={disabled || false}
//         style={styles.button}
//       >
//         {icon} {label}
//       </button>
//     </div>
//   );
// };

// IconButton.propTypes = {
//   type: string.isRequired,
//   label: string.isRequired,
//   icon: element.isRequired,
//   onClick: func,
//   disabled: bool,
//   width: string,
//   height: string,
//   bgColor: string,
//   textColor: string,
//   disabledBgColor: string,
//   disabledTextColor: string,
//   margin: string,
//   padding: string,
//   fontSize: string,
//   fontFamily: string,
//   fontWeight: number,
//   letterSpacing: string,
//   textAlign: string,
//   radius: string,
//   border: string,
//   transition: string,
//   shadow: string,
//   hoverShadow: string,
// };

// export default IconButton;
