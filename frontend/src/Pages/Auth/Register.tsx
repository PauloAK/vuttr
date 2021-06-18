import React, { useState } from 'react';
import Box from '../../Components/UI/Box';
import { RiUserAddLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { useLoading } from '../../Providers/LoadingProvider';
import AuthApi from '../../Api/AuthApi';
import Swal from '../../Components/UI/Swal';
import IUser from '../../Interfaces/IUser';
import { Link } from 'react-router-dom';
import Input from '../../Components/Form/Input';

const Register: React.FC = () => {
    const loading = useLoading();
    const history = useHistory();
    const [ user, setUser ]  = useState<IUser>({
        name: '',
        username: '',
        password: ''
    });
    const [ errors, setErrors ] = useState({});
    
    const submitHandle = async (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        loading.show();
        setErrors({});
        
        let response = await AuthApi.register(user);
        if (response.status !== 201) {
            if (response.status === 422) {
                setErrors(response.json.errors);
            } else {
                Swal.showToast('error', 'Error while creating your account');
            }
        } else {
            Swal.showToast('success', 'Account created succesfully!');
            history.push('/login');
        }
        loading.hide();
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <>
            <div className="w-full flex h-full justify-center items-center">
                <div className="w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5">
                    <Box title="Register">
                        <div className="w-full px-2">
                            <form onSubmit={submitHandle} className="flex-col">
                                <Input
                                    label="Name"
                                    type="text"
                                    name="name"
                                    placeholder="What's your name?"
                                    onChange={handleChange}
                                    value={user.name}
                                    required={true}
                                    errors={errors}
                                />

                                <Input
                                    label="Username"
                                    type="text"
                                    name="username"
                                    placeholder="Create a unique username"
                                    onChange={handleChange}
                                    value={user.username}
                                    required={true}
                                    errors={errors}
                                />
                                
                                <Input
                                    label="Password"
                                    type="password"
                                    name="password"
                                    placeholder="Create a password"
                                    onChange={handleChange}
                                    value={user.password}
                                    required={true}
                                    errors={errors}
                                />

                                <div className="mt-4 mb-2 flex justify-center w-full">
                                    <button className="btn btn-blue">
                                        Register
                                        <RiUserAddLine />
                                    </button>
                                </div>

                                <div className="w-full mt-2 text-gray-600 text-xs flex justify-center gap-1">
                                    Already have an acoount? <Link to="/login" className="text-blue-500 hover:text-blue-400">Login</Link>
                                </div>
                            </form>
                        </div>
                    </Box>
                </div>
            </div>
        </>
    );
}

export default Register;