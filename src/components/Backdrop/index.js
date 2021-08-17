const Backdrop = ({ children }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: "100%",
      width: "100%",
      background: "#000000f9",
      zIndex: 1000,
      transition: "background 400ms ease",
    }}
  >
    {children}
  </div>
);

export default Backdrop;
