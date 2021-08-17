import { Link } from "react-router-dom";

const Bulletin = ({ postedBy, content, imageUrl, postId, replies }) => {
  return (
    <div
      style={{
        margin: "1rem auto",
        border: "#666666 2px solid",
        padding: "1rem",
        borderRadius: "4px",
      }}
      className="bulletin"
    >
      <div style={{ display: "flex", width: "100%" }}>
        <h4>
          <b>{postedBy} </b>
        </h4>
        <h5 style={{ marginLeft: "2rem", fontWeight: 300 }}> {postId}</h5>
      </div>
      <div className="bulletin-content">
        <h5 style={{ padding: "1rem 0" }}>{content}</h5>
        <div style={{ width: "100%", height: "100%" }}>
          <img style={{ width: "100%", maxWidth: "100%", height: "auto" }} src={imageUrl} alt="" />
        </div>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <p style={{ padding: "0.5rem 0", marginRight: "auto " }}>{replies.length} replies</p>
        <Link to={`/posts/${postId}`}>View thread </Link>
      </div>
    </div>
  );
};

export default Bulletin;
