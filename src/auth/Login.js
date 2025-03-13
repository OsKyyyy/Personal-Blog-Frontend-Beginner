import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Image} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { loginSuccess } from "../redux/reducers/authSlice";
import useFetch from "../hooks/useFetch";
import Waves from "node-waves";
import 'node-waves/dist/waves.min.css';
import {Link, Navigate} from "react-router-dom";

import logoDark from "../assets/admin/images/logo-dark.png";
import logoLight from "../assets/admin/images/logo-light.png";

const Login = () =>{

    const apiUrl = useSelector((state) => state.global.ApiUrl);

    useEffect(() => {
        const loadAdminAssets = async () => {
            await import ('../assets/admin/css/bootstrap.min.css');
            await import ('../assets/admin/css/AdminApp.css');
            await import ('../assets/admin/css/icons.min.css');
        };
        loadAdminAssets();
    }, []);

    useEffect(() => {
        Waves.init();
        Waves.attach(".waves-effect");
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, fetchData } = useFetch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (formData) => {
        const email = formData.email;
        const password = formData.password;

        const loginUrl = apiUrl + "/Auth/Login";
        const loginOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({ email, password }),
            showToast: true,
        };
        fetchData(loginUrl, loginOptions);
    };

    if (data && data.Status) {
        dispatch(loginSuccess({ user: data.Data.Id, token: data.Data.Token }));
        navigate("/admin/dashboard");
    }

    const token = useSelector(state => state.auth.token);

    if (token) {
        return <Navigate to="/admin/dashboard" />;
    }

    return (
        <div className="wrapper-page">
            <div className="container-fluid p-0">
                <div className="card">
                    <div className="card-body">

                        <div className="text-center mt-4">
                            <div className="mb-3">
                                <Link to="/login" className="auth-logo">
                                    <Image src={logoDark} height="30" className="mx-auto" alt=""/>
                                </Link>
                            </div>
                        </div>

                        <h4 className="text-muted text-center font-size-18"><b>GİRİŞ YAP</b></h4>

                        <div className="p-3">
                            <form className="form-horizontal mt-3" onSubmit={handleSubmit(handleLogin)}>

                                <div className="form-group mb-3 row">
                                    <div className="col-12">
                                        <input className="form-control"
                                               type="text"
                                               required=""
                                               placeholder="E-Mail"
                                               {...register('email', {
                                                   required: 'E-Mail gereklidir',
                                                   pattern: {
                                                       value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                                       message: 'Geçerli bir e-mail adresi girin'
                                                   }
                                               })}
                                        />
                                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <div className="col-12">
                                        <input className="form-control" type="password" required=""
                                               placeholder="Şifre"
                                               {...register('password', {
                                                   required: 'Şifre gereklidir',
                                                   minLength: {
                                                       value: 8,
                                                       message: 'Şifre en az 8 karakter olmalıdır'
                                                   }
                                               })}
                                        />
                                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                                    </div>
                                </div>

                                <div className="form-group mb-3 text-center row mt-3 pt-1">
                                    <div className="col-12">
                                        <button className="btn btn-info w-100 waves-effect waves-light"
                                                type="submit">Giriş Yap
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;