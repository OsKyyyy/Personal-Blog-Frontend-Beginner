import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import { useForm } from 'react-hook-form';
import { loginSuccess } from "../redux/reducers/authSlice";
import useFetch from "../hooks/useFetch";
import Waves from "node-waves";
import 'node-waves/dist/waves.min.css';

const Login = () =>{

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

    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, loading, error, fetchData } = useFetch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (formData) => {
        // e.preventDefault();
        //
        // const loginUrl = "https://localhost:44352/api/Auth/Login";
        // const loginOptions = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     data: JSON.stringify({ email, password }),
        //     showToast: true,
        // };
        //
        // fetchData(loginUrl, loginOptions);

        const email = formData.email;
        const password = formData.password;

        const loginUrl = "https://localhost:44352/api/Auth/Login";
        const loginOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({ email, password }),
            showToast: true,
        };
        fetchData(loginUrl, loginOptions);
    };

    // Eğer veri geldiyse, login işlemi başarılı
    if (data && data.Status) {
        dispatch(loginSuccess({ user: data.user, token: data.Data.Token }));
        navigate("/admin/dashboard");
    }

    return (
        <div className="wrapper-page">
            <div className="container-fluid p-0">
                <div className="card">
                    <div className="card-body">

                        <div className="text-center mt-4">
                            <div className="mb-3">
                                <a href="index.html" className="auth-logo">
                                    <img src="assets/images/logo-dark.png" height="30" className="logo-dark mx-auto"
                                         alt=""/>
                                    <img src="assets/images/logo-light.png" height="30" className="logo-light mx-auto"
                                         alt=""/>
                                </a>
                            </div>
                        </div>

                        <h4 className="text-muted text-center font-size-18"><b>Sign In</b></h4>

                        <div className="p-3">
                            <form className="form-horizontal mt-3" onSubmit={handleSubmit(handleLogin)}>

                                <div className="form-group mb-3 row">
                                    <div className="col-12">
                                        <input className="form-control"
                                               type="text"
                                               required=""
                                               placeholder="E-Mail"
                                               // value={email}
                                               // onChange={(e) => setEmail(e.target.value)}
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
                                               // value={password}
                                               // onChange={(e) => setPassword(e.target.value)}
                                               {...register('password', {
                                                   required: 'Şifre gereklidir'
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