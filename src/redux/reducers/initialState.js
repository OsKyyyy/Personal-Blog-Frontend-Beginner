const storedToken = localStorage.getItem("token");

const initialState = {
    jQuery: window.$,
    user: null,
    token: storedToken || null,
    // token: localStorage.getItem("token") || null, // Token varsa al
    // isAuthenticated: !!localStorage.getItem("token"), // Kullanıcı giriş yapmış mı?
    // user: null // Kullanıcı bilgilerini burada tutacağız
}

export default initialState;