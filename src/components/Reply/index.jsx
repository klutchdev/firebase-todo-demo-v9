const Reply = ({ postedBy, content }) => {
  return (
    <div
      style={{
        margin: "1rem auto",
        border: "#666666 2px solid",
        padding: "1rem",
        borderRadius: "4px",
      }}
      className="Reply"
    >
      <div style={{ display: "flex", width: "100%" }}>
        <h4>
          <b>{postedBy} </b>
        </h4>
      </div>
      <div className="Reply-content">
        <h5 style={{ padding: "1rem 0" }}>{content}</h5>
      </div>
    </div>
  );
};

export default Reply;
