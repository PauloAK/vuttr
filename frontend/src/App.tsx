import React from 'react';
import Login from './Pages/Auth/Login';
import {
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                
            </Route>
            <PrivateRoute exact path="/">
                <Home />
            </PrivateRoute>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
}

export default App;
