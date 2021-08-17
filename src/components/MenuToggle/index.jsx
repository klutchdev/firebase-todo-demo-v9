// import { string, number, bool, func } from "prop-types";

// const MenuToggle = ({ color, activeColor, size, open, handleOpen }) => {
//   const styles = {
//     top: {
//       fill: "none",
//       stroke: open ? activeColor || "red" : color || "#999999",
//       strokeWidth: 6,
//       strokeDasharray: open ? "90 207" : "60 207",
//       strokeDashoffset: open && "-134",
//       transition:
//         "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)",
//     },
//     middle: {
//       fill: "none",
//       stroke: open ? activeColor || "red" : color || "#999999",
//       strokeWidth: 6,
//       strokeDasharray: open ? "1 60" : "60 60",
//       strokeDashoffset: open && "-30",
//       transition:
//         "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)",
//     },
//   };

//   return (
//     <button type="button" className="menu-toggle" onClick={handleOpen} ariaExpanded={open}>
//       <svg width={size || "35"} height={size || "35"} viewBox="0 0 100 100">
//         <Top style={styles.top} />
//         <Middle style={styles.middle} />
//         <Bottom style={styles.top} />
//       </svg>
//     </button>
//   );
// };

// const Top = ({ style }) => (
//   <>
//     <path
//       style={style}
//       d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
//     />
//   </>
// );
// const Middle = ({ style }) => (
//   <>
//     <path style={style} d="M 20,50 H 80" />
//   </>
// );
// const Bottom = ({ style }) => (
//   <>
//     <path
//       style={style}
//       d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
//     />
//   </>
// );

// MenuToggle.propTypes = {
//   handleOpen: func,
//   open: bool,
//   color: string,
//   size: number,
// };

// export default MenuToggle;
