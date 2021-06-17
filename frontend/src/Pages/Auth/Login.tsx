import React, { useState } from 'react';
import Box from '../../Components/UI/Box';
import { RiLoginBoxLine } from 'react-icons/ri';
import { useAuth } from '../../Providers/AuthProvider';
import { useHistory } from 'react-router-dom';
import { useLoading } from '../../Providers/LoadingProvider';
import AuthApi from '../../Api/AuthApi';
import Swal from '../../Components/UI/Swal';
import Storage from '../../Storage';
import IUser from '../../Interfaces/IUser';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {
    const loading = useLoading();
    const history = useHistory();
    const auth = useAuth();
    const [ user, setUser ]  = useState<IUser>({
        username: '',
        password: ''
    });
    
    const submitHandle = async (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        loading.show();
        
        let response = await AuthApi.login(user);
        if (response.status !== 200) {
            if (response.status === 401)
                Swal.showToast('error', 'Incorect username/password');
            else
                Swal.showToast('error', 'Error on authentication');
        } else {
            Storage.set('token', response.json.access_token);
            let responseMe = await AuthApi.me();
            auth.login(responseMe.json);
            Swal.showToast('success', 'Logged in succesfully!');
            history.push('/');
        }
        loading.hide();
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <>
            <div className="w-full flex h-full justify-center items-center">
                <div className="w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5">
                    <Box title="Login">
                        <div className="w-full px-2">
                            <form onSubmit={submitHandle} className="flex-col">
                                <label htmlFor="username">Username:</label>
                                <input type="text" name="username" placeholder="Type your username" onChange={handleChange} value={user.username} required/>
                                
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" placeholder="Type your password" onChange={handleChange} value={user.password} required/>

                                <div className="mt-4 mb-2 flex justify-center w-full">
                                    <button className="btn btn-blue">
                                        Login
                                        <RiLoginBoxLine />
                                    </button>
                                </div>

                                <div className="w-full mt-2 text-gray-600 text-xs flex justify-center gap-1">
                                    Don't have an acoount? <Link to="/register" className="text-blue-500 hover:text-blue-400">Register</Link>
                                </div>
                            </form>
                        </div>
                    </Box>
                </div>
            </div>
        </>
    );
}

export default Login;