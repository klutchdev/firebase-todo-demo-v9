const Flex = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      margin: 0,
    }}
  >
    {children}
  </div>
);

export default Flex;
