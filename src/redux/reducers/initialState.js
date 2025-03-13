const storedToken = localStorage.getItem("token");

const initialState = {
    ImageUrl: 'http://localhost:9090',
    ApiUrl: 'https://localhost:44352/api',
    jQuery: window.$,
    user: null,
    token: storedToken || null,
    // token: localStorage.getItem("token") || null, // Token varsa al
    // isAuthenticated: !!localStorage.getItem("token"), // Kullanıcı giriş yapmış mı?
    // user: null // Kullanıcı bilgilerini burada tutacağız
}

export default initialState;