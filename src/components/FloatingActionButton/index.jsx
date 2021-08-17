// import { useRef } from "react";
// import { string, func } from "prop-types";
// import useHover from "../../hooks/useHover";
// import { Plus } from "../../icons/plus";

// const FloatingActionButton = ({ onClick, bgColor }) => {
//   const buttonRef = useRef(null);
//   const { isHover } = useHover(buttonRef);

//   return (
//     <div className="button-container">
//       <div
//         ref={buttonRef}
//         onClick={onClick}
//         type="button"
//         className="fab"
//         style={{
//           background: bgColor || "#030303",
//           filter: isHover ? " brightness(1.2)" : "brightness(1)",
//         }}
//       >
//         <Plus size="25" />
//       </div>
//     </div>
//   );
// };

// FloatingActionButton.propTypes = {
//   onClick: func.isRequired,
//   bgColor: string,
// };

// export default FloatingActionButton;
