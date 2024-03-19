import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData()
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h5>Post details about user: {id}</h5>
            <h3>Title: {title}</h3>
            <p>Description: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;