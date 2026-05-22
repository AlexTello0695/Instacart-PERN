import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"
import NavBar from "../components/NavBar"

const AppLayout = () => {
  return (
    <>
      <Banner/>
      <NavBar/>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <p>footer</p>
      <p>cartsidebar</p>
    </>
  )
}

export default AppLayout