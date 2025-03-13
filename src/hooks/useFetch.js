import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchData = async (url, options = {}) => {
        setLoading(true);

        const token = localStorage.getItem("token");

        try {
            const response = await axios({
                url,
                method: options.method || "GET",
                headers: {
                    Authorization: token ? `Bearer ${token}` : "",
                    ...options.headers
                },
                data: options.data || null,
            });

            setData(response.data);
            setError(null);

            if (options.showToast && response.data.Status || response.data.status) {
                toast.success(response.data.Message || response.data.message);
                if (options.loadComponent) {
                    navigate(`/${options.loadComponent}`);
                }
            }

        } catch (err) {
            if (err.response?.status === 401) {
                dispatch(logout());
                localStorage.removeItem("token");
                navigate("/login");
            } else {
                toast.error(err.response?.data?.Message || "Beklenmeyen bir hata oluştu!");
            }

            setError(err.response?.data?.Message || err.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchData };
};

export default useFetch;


// const useFetch = () => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//
//     const fetchData = async (url, options = {}) => {
//         setLoading(true);
//         try {
//             const response = await axios(url, options);
//             setData(response.data);
//         } catch (err) {
//             setError(err.response?.data?.message || err.message);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     return { data, loading, error, fetchData };
// };

//export default useFetch;

// const useFetch = (url, options = {}) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get(url, options);
//                 setData(response.data);
//             } catch (err) {
//                 setError(err.response?.data?.message || err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchData();
//     }, [url]); // URL değişirse tekrar istek yapar
//
//     return { data, loading, error };
// };
//
// export default useFetch;