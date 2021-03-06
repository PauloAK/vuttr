import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Tools from './Pages/App/Tools';
import PrivateRoute from './Components/Routing/PrivateRoute';
import NotFound from './Pages/NotFound';

const App : React.FC<{}> = () => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <PrivateRoute exact path="/">
                <Tools />
            </PrivateRoute>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
}

export default App;
