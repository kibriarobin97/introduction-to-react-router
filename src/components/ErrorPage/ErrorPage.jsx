import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div>
            <h3>Oops!!!</h3>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <p>Go back home</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;