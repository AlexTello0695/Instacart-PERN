import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Order } from "../types";
import { dummyDashboardOrdersData } from "../assets/assets";
import Loading from "../components/Loading";
import { ArrowLeftIcon } from "lucide-react";
import OrderOTP from "../components/OrderTracking/OrderOTP";
import LiveMap from "../components/OrderTracking/LiveMap";

const OrderTracking = () => {

  const {id} = useParams();
  const navigate = useNavigate()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [liveLocation, setLiveLocation] = useState<{lat: number; lng: number} | null>(null)

  useEffect(() => {
    setOrder(dummyDashboardOrdersData.find((o) => o._id === id) as any)
    setLoading(false)
  }, [id, navigate])

  if(loading) return <Loading />
  if(!order) null

  return (
    <div className="min-h-screen mb-20 bg-app-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* {Header} */}
        <button 
          onClick={() => navigate("/orders")}
          className="flex items-center gap-2 text-sm text-app-text-light hover:text-app-green mb-6 transition-colors">
            <ArrowLeftIcon className="size-4"/> Regresar a Mis Pedidos
        </button>

        {/* {ID de Pedido, Fecha, Status} */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-app-green">
              Pedido #{order!._id.slice(-8).toUpperCase()}
            </h1>
            <p className="text-sm text-app-text-light mt-1">
              Realizada el {new Date(order!.createdAt).toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}
            </p>
          </div>
          <span className={`px-4 py-1.5 text-sm font-semibold rounded-full ${order!.status === "Entregado" ? "bg-green-100 text-green-700" : order!.status === "Cancelado" ? "bg-red-100 text-red-700" : "bg-app-orange/10 text-app-orange"}`}>
            {order!.status}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* {Lado Izquierdo - Línea de Tiempo + Mapa} */}
            <div className="lg:col-span-2 space-y-6">
              {/* {Ficha OTP} */}
              <OrderOTP order={order}/>

              {/* {Mapa de Seguimiento en Vivo} */}
              <LiveMap order={order}/>
            </div>

          {/* {Lado Derecho - Detalles del Pedido} */}
            <div>

            </div>

        </div>
      </div>
    </div>
  )
}

export default OrderTracking