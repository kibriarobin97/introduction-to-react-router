import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData()
    const {name, phone, email} = user;

    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserDetails;