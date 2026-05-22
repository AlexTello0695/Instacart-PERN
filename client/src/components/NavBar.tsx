import { BikeIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {

  const user: any = {name: "Juan Do", email: "juan@ejemplo.com", isAdmin: "true"}
  const {cartCount, setIsCartOpen} = {
    cartCount: 5,
    setIsCartOpen: (_data: any)=> {}
  };
  const [searchQuery, setSearchQuery] = useState("")
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-app-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <Link to='/' className="flex items-center gap-2 text-[22px] font-medium shrink-0">
          <BikeIcon size={24}/> Instacart
        </Link>

        <div className="w-full flex items-center justify-end gap-4 lg:gap-10">
          {/* Nav Links - Para Escritorio */}
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <Link to='/'>Inicio</Link>
            <Link to='/products'>Productos</Link>
            <Link to='/deals' className="text-app-orange">Ofertas</Link>
          </div>

          {/* Menú de Búsqueda de Productos */}

          <form className="hidden sm:flex flex-1 max-w-sm text-xs sm:text-sm">
            <div className="relative w-full">
              <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
              <input
              type="text"
              placeholder="Busca un producto"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)} className="w-full pl-8 p-2 bg-orange-50 rounded-full ring ring-app-orange/15 focus:ring-app-orange/30"/>
            </div>
          </form>

          {/* Acciones a la derecha */}
          <div className="flex items-center gap-3">
            {/* Carrito */}
            <button className="relative p-2 rounded-xl" onClick={()=>setIsCartOpen(true)}>
              <ShoppingCartIcon className="size-5 text-zinc-900" />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 size-4 bg-app-orange text-white text-[10px] rounded-full flex-center">{cartCount}</span>}              
            </button>

            {/* Usuario */}

          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar