import { useState, useEffect } from "react";
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
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${token}` : "",
                    ...options.headers
                },
                data: options.data || null,
            });

            setData(response.data);
            setError(null);

            if (options.showToast && response.data.status) {
                toast.success(response.data.message || "İşlem başarılı!");
            }

        } catch (err) {
            console.error("API Error:", err);

            // 401 Unauthorized hatası durumu
            if (err.response?.status === 401) {
                dispatch(logout());
                localStorage.removeItem("token");
                navigate("/login");
            } else {
                // ❌ Diğer hata durumlarında error mesajı göster
                console.log("buraya girdi");
                toast.error(err.response?.data?.message || "Beklenmeyen bir hata oluştu!");
            }

            setError(err.response?.data?.message || err.message);
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