import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { LoadingProvider } from './Providers/LoadingProvider';
import { AuthProvider } from './Providers/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <LoadingProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </LoadingProvider>
    </Router>,
    document.getElementById('root')
);