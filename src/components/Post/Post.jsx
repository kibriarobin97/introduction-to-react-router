import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {

    const { id, title } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid green',
        padding: '5px',
        margin: '10px',
        borderRadius: '10px'
    }

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h5>User Id: {id}</h5>
            <h3>Title: {title}</h3>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;