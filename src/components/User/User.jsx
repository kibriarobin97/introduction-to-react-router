import { Link } from "react-router-dom";

const User = ({user}) => {
    
    const {id, name, email, phone, website} = user;

    const userStyle = {
        border: '2px solid green',
        padding: '5px',
        margin: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;