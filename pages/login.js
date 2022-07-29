import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import {useDispatch} from "react-redux";
import axios from 'axios';
import { setProfile } from "../redux/profileSlice";

const Login = ({ setIsLogged }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [user, setUser ] = useState('');
    const [password, setPassword ] = useState('');
    const [showError, setShowError] = useState(false);

    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API;
            const response = await axios.post(BASE_URL + 'login', { user, password});
            if (response.status === 200) {
                const { profile, token } = response.data;
                localStorage.setItem('token', token);
                dispatch(setProfile(profile));
                setIsLogged(true);
                await router.push('/');
            }
            else {
                throw new Error();
            }
        }
        catch (e) {
            if (e.response.status === 401) {
                setShowError(true);
            }
        }
    }

    useEffect(() => {
        if (router.pathname === "/login") {
            router.push('/')
        }
    });

    return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
        <div className="card col-4 p-5">
            <div className="text-center mb-3">
                <h3>Login</h3>

                <code>{}</code>
            </div>
            <form onSubmit={handlerSubmit}>
                <div className="row mb-3">
                    <label htmlFor="user" className="col-sm-4 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="user"
                            className="form-control"
                            id="user"
                            name="user"
                            placeholder="test@test.com"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="password" className="col-sm-4 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="123"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary col-2 offset-5">
                    Sign in
                </button>
                {showError && (
                    <div className="row mt-3">
                        <div className="alert alert-danger text-center">
                            User or password not valid
                        </div>
                    </div>
                )}
            </form>
        </div>
    </div>
    )
}

export default Login;
