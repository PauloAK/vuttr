import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Tools from './Pages/Tools';
import PrivateRoute from './Components/Routing/PrivateRoute';
import NotFound from './Pages/NotFound';

function App() {
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
