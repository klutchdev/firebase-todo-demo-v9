// import { string, number, func } from "prop-types";

// const TopBanner = ({
//   content,
//   margin,
//   padding,
//   textColor,
//   fontSize,
//   textAlign,
//   fontWeight,
//   fontFamily,
//   lineHeight,
//   letterSpacing,
//   position,
//   top,
//   bgColor,
//   gradient,
//   width,
//   height,
//   handleDismiss,
// }) => {
//   const styles = {
//     banner: {
//       display: "flex",
//       borderRadius: "2px",
//       transition: "all 300ms ease",
//       position: position || "relative",
//       top: position && top ? top : 0,
//       width: width || "100%",
//       height: height || "4rem",
//       margin: margin || 0,
//       padding: padding || "0.5rem 1rem",
//       background: gradient || bgColor || "#22da6b",
//       boxShadow: "#030303 2px 2px 20px",
//     },
//     container: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-start",
//       textAlign: "justify",
//       width: "92%",
//     },
//     text: {
//       margin: margin || `auto`,
//       textAlign: textAlign || `left`,
//       fontSize: fontSize || `110%`,
//       fontWeight: fontWeight || 500,
//       fontFamily: fontFamily || "Montserrat",
//       color: textColor || "#030303",
//       letterSpacing: letterSpacing || 0,
//       lineHeight: lineHeight || `1.25rem`,
//     },
//     dismissWrapper: {
//       display: `flex`,
//       alignContents: `center`,
//       justifyContent: `center`,
//       width: `2rem`,
//     },
//     dismissButton: {
//       margin: `auto 0`,
//       display: `flex`,
//       alignContents: `center`,
//       justifyContent: `center`,
//       width: `3rem`,
//       filter: `brightness(0.8)`,
//       height: `auto`,
//       borderRadius: `500px`,
//     },
//     svg: { margin: `auto`, height: `2rem`, width: `2rem` },
//   };

//   return (
//     <div style={styles.banner}>
//       <div style={styles.container}>
//         <h4 style={styles.text}>{content}</h4>
//       </div>
//       <div style={styles.dismissWrapper}>
//         <div onClick={handleDismiss} style={styles.dismissButton}>
//           <svg
//             style={styles.svg}
//             fill="currentColor"
//             color={textColor || "#030303"}
//             viewBox="0 0 16 16"
//           >
//             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// TopBanner.propTypes = {
//   content: string.isRequired,
//   width: string,
//   height: string,
//   margin: string,
//   padding: string,
//   bgColor: string,
//   gradient: string || func,
//   position: string,
//   top: string,
//   textColor: string,
//   fontSize: string,
//   textAlign: string,
//   fontFamily: string,
//   fontWeight: number,
//   lineHeight: string,
//   letterSpacing: string,
// };

// export default TopBanner;
