import {
    Route,
    Redirect
} from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

const PrivateRoute : React.FC<{ children?: any; exact?: boolean; path?: string; }> = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.check() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;