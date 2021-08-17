// import { useEffect, useRef } from "react";

// export const useComparatorRef = (value, isEqual, onChange) => {
//   const ref = useRef(value);
//   useEffect(() => {
//     if (!isEqual(value, ref.current)) {
//       ref.current = value;
//       if (onChange) {
//         onChange();
//       }
//     }
//   });
//   return ref;
// };

// const isEqual = (v1, v2) => {
//   const bothNull = !v1 && !v2;
//   const equal = !!v1 && !!v2 && v1.isEqual(v2);
//   return bothNull || equal;
// };

// export const useIsEqualRef = (value, onChange) => {
//   return useComparatorRef(value, isEqual, onChange);
// };

// export const useIdentifyRef = (value, onChange) => {
//   return useComparatorRef(value, (v1, v2) => v1 === v2, onChange);
// };
