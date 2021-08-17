// import { useRef, useState } from "react";
// import { string, element, func } from "prop-types";

// const PasswordInput = ({
//   handleChange,
//   value,
//   inputError,
//   leftIcon,
//   rightIcon,
//   rightIconHidden,
//   placeholder,
//   onKeyDown,
//   onKeyUp,
//   textColor,
//   leftIconColor,
//   rightIconColor,
//   width,
//   height,
//   margin,
//   border,
//   radius,
//   shadow,
//   autoComplete,
// }) => {
//   const passwordInputRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   const styles = {
//     input: {
//       width: width || "100%",
//       height: height || "2.75rem",
//       margin: margin || "0.25rem 0 1rem 0",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-evenly",
//       outline: "none",
//       background: "#03030350",
//       border: border,
//       borderRadius: radius || "5px",
//       transition: "all 300ms ease",
//       boxShadow: shadow || "1px 1px 10px #03030390",
//     },
//     leftIcon: {
//       margin: "0 auto 0 0",
//       width: "3rem",
//       height: "100%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       color: leftIconColor || "#484c4e",
//       transition: "all 300ms ease",
//     },
//     rightIcon: {
//       margin: "auto 0 auto auto",
//       width: "3rem",
//       height: "100%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       color: rightIconColor || "#484c4e",
//       transition: "all 300ms ease",
//     },
//     inputField: {
//       width: "100%",
//       height: "100%",
//       outline: "none",
//       border: "none",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-start",
//       color: textColor || "#d9d9d9",
//       background: "transparent",
//       fontSize: "1.25rem",
//       letterSpacing: "0.75px",
//       fontWeight: 400,
//       fontFamily: "Montserrat",
//     },
//   };

//   return (
//     <div className="flex column w-100">
//       <div ref={passwordInputRef} style={styles.input}>
//         {leftIcon && <div style={styles.leftIcon}>{leftIcon}</div>}
//         <input
//           type={visible ? "text" : "password"}
//           valueue={value}
//           onChange={handleChange}
//           onKeyUp={onKeyUp}
//           onKeyDown={onKeyDown}
//           placeholder={placeholder}
//           autoComplete={autoComplete || "off"}
//           style={styles.inputField}
//         />
//         {rightIcon && (
//           <div onClick={() => setVisible(!visible)} style={styles.rightIcon}>
//             visible ? {rightIcon} : {rightIconHidden}
//           </div>
//         )}
//       </div>

//       {inputError && <span style={{ color: "red", fontWeight: 500 }}>{inputError}</span>}
//     </div>
//   );
// };

// PasswordInput.propTypes = {
//   leftIcon: element,
//   rightIcon: element,
//   rightIconHidden: element,
//   value: string,
//   inputError: string,
//   handleChange: func,
//   textColor: string,
//   leftIconColor: string,
//   rightIconColor: string,
//   placeholder: string,
//   onKeyUp: func,
//   onKeyDown: func,
//   width: string,
//   height: string,
//   margin: string,
//   border: string,
//   radius: string,
//   shadow: string,
//   autoComplete: string,
//   bgColor: string,
// };

// export default PasswordInput;
