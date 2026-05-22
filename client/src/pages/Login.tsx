import { useState } from "react"
import { heroSectionData } from "../assets/assets"
import { Link } from "react-router-dom"
import { BikeIcon, Loader2Icon, LockIcon, MailIcon, UserIcon } from "lucide-react"

const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async (e: React.SubmitEvent)=>{
    e.preventDefault()
    setLoading(true);
    setTimeout(()=> window.location.href= "/", 1000)
  }
  return (
    <div className=" min-h-screen flex">
        {/* Lado Izquierdo */}
    <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center">
      <img src={heroSectionData.hero_image} alt="" className="absolute inset-0 object-cover h-full bg-center opacity-10"/>
      <div className="relative text-center px-12">
        <h2 className="text-4xl font-semibold text-white mb-4">Bienvenido de Nuevo a Instacart</h2>
        <p className="text-white/60 font-serif text-xl max-w-sm mx-auto">Alimentos frescos y productos orgánicos, entregados a domicilio.</p>
      </div>
    </div>
        {/* Lado Derecho */}
    <div className="flex-1 flex-center px-4 py-12 bg-app-cream">
      <div className="w-full max-w-md">
        {/* Mensaje de la cabecera del Formulario */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
          <BikeIcon className="size-8 text-app-green" />
          <span className="text-2xl font-semibold text-app-green">Instacart</span>
          </Link>
          <h1 className="text-2xl font-semibold text-app-green mb-2">
            {isLoginState ? "Inicia sesión en tu cuenta" : "Regístrate para crear una cuenta"}
          </h1>
          <p className="text-sm text-app-text-light">
          {isLoginState ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
          <button onClick={()=>setIsLoginState(!isLoginState)} className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors">
            {isLoginState ? "Crea una cuenta" : "Accede a tu cuenta"}
          </button>
          </p>
          
        </div>

        {/* Login / Formulario de Registro */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLoginState &&(
            <label className="text-sm flex flex-col gap-1">
              Nombre
              <div className="relative">
                <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                <input 
                type="text" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
                placeholder="Escribe tu nombre"
                className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all" />
              </div>
            </label>
          )}
            <label className="text-sm flex flex-col gap-1">
              Correo Electrónico
              <div className="relative">
                <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                <input 
                type="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                placeholder="correo@ejemplo.com"
                className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all" />
              </div>
            </label>
            <label className="text-sm flex flex-col gap-1">
              Contraseña
              <div className="relative">
                <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                <input 
                type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all" />
              </div>
            </label>
          <button className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50">
            {loading ? <Loader2Icon className="animate-spin"/> : isLoginState ? "Ingresar" : "Registrarse"}
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}
export default Login