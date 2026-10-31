import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

// Inyectar el token JWT desde LocalStorage en cada solicitud
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// Gestionar los errores de autenticación de forma global
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_user");
            // Redirigir solo si no se está ya en las páginas de autenticación
            if (!window.location.pathname.includes("/login") && !window.location.pathname.includes("/register")) {
                window.location.href = "/login"
            }
        }
        return Promise.reject(error)
    }
)

export default api;