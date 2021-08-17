// import avatarImg from "../../img/avatarImg.png";
// import { auth } from "../../firebase/init";
// import useAuthState from "../../hooks/useAuthState";
// import { updateProfile } from "firebase/auth";
// import useFirebaseStorage from "../../hooks/useFirebaseStorage";
// import { useAuthState } from "klutch-fire-hooks/auth";

// const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

// const AvatarImage = ({ size }) => {
//   const [user] = useAuthState(auth);
// const hiddenInput = useRef(null);
// const [file, setFile] = useState(null);

// const handleClick = (e) => hiddenInput.current.click();

// const handleChange = (e) => {
//   const picked = Array.from(e.target.files)[0];
//   if (picked) {
//     setFile(picked);
//   } else {
//     setFile(null);
//   }
// };

// return (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       flexDirection: "column",
//     }}
//   >
//     <div
//       style={{
//         margin: "0.75rem auto",
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img
//         style={{
//           width: size || "150px",
//           height: size || "150px",
//           margin: "0 auto 0 auto",
//           borderRadius: "50%",
//           boxShadow: "1px 1px 12px #030303aa",
//         }}
//         src={user.photoURL || avatarImg}
//         alt=""
//       />
//     </div>

// <input
//   type="file"
//   hidden={true}
//   ref={hiddenInput}
//   accept={types.join(",")}
//   style={{ display: "none" }}
//   onChange={user ? handleChange : () => {}}
// />
//  {file && <Loader file={file} setFile={setFile} />}
//     </div>
//   );
// };

// const Loader = ({ file, setFile }) => {
//   const { progress, url, error } = useFirebaseStorage(file);

//   useEffect(() => {
//     if (url) {
//       setFile(null);
//       updateProfile(auth.currentUser, { photoURL: url });
//     }
//     return () => {
//       setFile(null);
//       updateProfile(auth.currentUser, { photoURL: url });
//     };
//   }, [url, setFile]);

//   return (
//     <div
//       animate={{ opacity: 0.95 }}
//       initial={{ opacity: 0 }}
//       transition={{ delay: 0.15 }}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         height: "100%",
//         width: "100%",
//         background: "#000000f9",
//         zIndex: 500,
//       }}
//     >
//       <div
//         style={{
//           display: `flex`,
//           margin: `auto`,
//           alignItems: `center`,
//           alignContent: `center`,
//           height: `100%`,
//           zIndex: 750,
//         }}
//       >
//         {progress && (
//           <h3
//             style={{
//               margin: `auto`,
//               fontSize: `2rem`,
//               fontWeight: 600,
//               color: `#22da6b`,
//               zIndex: 1000,
//             }}
//           >
//             Uploading {progress}%
//           </h3>
//         )}
//         {error && (
//           <h3
//             style={{
//               margin: `auto`,
//               fontSize: `2rem`,
//               fontWeight: 600,
//               color: `#da2222`,
//               zIndex: 1000,
//             }}
//           >
//             Error: {error}
//           </h3>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AvatarImage;
