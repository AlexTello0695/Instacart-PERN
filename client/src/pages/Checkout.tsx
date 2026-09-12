import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext";
import { dummyAddressData } from "../assets/assets";
import { useState } from "react";
import type { Address } from "../types";
import { ArrowLeft, CheckIcon, ChevronRightIcon, CreditCardIcon, MapPinIcon } from "lucide-react";
import CheckoutAddress from "../components/Checkout/CheckoutAddress";
import CheckoutPayment from "../components/Checkout/CheckoutPayment";
import CheckoutReview from "../components/Checkout/CheckoutReview";

const Checkout = () => {

  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || '$';

  const {items, cartTotal} = useCart()
  const {user} = {user: {addresses: dummyAddressData}}

  const [step, setStep] = useState("address")
  const [loading, setLoading] = useState(false)

  const [address, setAddress] = useState<Address>({
    _id: "",
    label: "Casa",
    address: "",
    city: "",
    state: "",
    zip: "",
    isDefault: false,
    lat: 0,
    lng: 0,
  })

  const [paymentMethod, setPaymentMethod] = useState('card')

  const deliveryFee = cartTotal > 200 ? 0 : 40;
  const tax = cartTotal * 0.16;
  const total = cartTotal + deliveryFee + tax;

  const steps: {key: string; label: string; icon: typeof MapPinIcon}[] = [
    {key: "address", label: "Dirección", icon: MapPinIcon},
    {key: "payment", label: "Pago", icon: CreditCardIcon},
    {key: "review", label: "Verificar Pedido", icon: CheckIcon},
  ]

  const handlePlaceOrder = async () => {
    setLoading(true)
    navigate("/orders")
  }
  
  // {Rellenar la dirección a partir de la dirección predeterminada del usuario}
  useState(() => {
    if (user?.addresses?.length) {
      const defaultAddr = user.addresses.find((a) => a.isDefault) || user.addresses[0]
      setAddress({
        _id: defaultAddr?._id,
        label: defaultAddr?.label,
        address: defaultAddr?.address,
        city: defaultAddr?.city,
        state: defaultAddr?.state,
        zip: defaultAddr?.zip,
        isDefault: defaultAddr?.isDefault,
        lat: defaultAddr?.lat,
        lng: defaultAddr?.lng,
      })
    }
  })

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-app-cream flex-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-app-green mb-2">Tu carrito está vacío</h2>
          <p className="text-sm text-app-text-light mb-4">Agregar algunos productos a tu carrito</p>
          <button
            onClick={() => navigate('/products')}
            className="px-5 py-2.5 bg-app-green text-white text-sm font-medium rounded-xl hover:bg-app-green-light transition-colors">
            Explora Productos
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-app-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* {Botón regresar} */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-app-text-light hover:text-app-green mb-6 transition-colors">
            <ArrowLeft className="size-4"/> Regresar
        </button>

        <h1 className="text-2xl font-semibold text-app-green mb-8">Carrito</h1>

        {/* {Pasos del Pago} */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div
              key={s.key}
              className="flex items-center gap-2">
              <button
                onClick={() => setStep(s.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${step === s.key ? "bg-app-green text-white" : "bg-white text-app-text-light"}`}>
                <s.icon className="size-4"/> {s.label}
                {i < steps.length -1 && <ChevronRightIcon className="size-4 text-app-text-light"/>}
              </button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* {Formulario Principal} */}
          <div className="md:col-span-2">
            {step === "address" && <CheckoutAddress address={address} setAddress={setAddress} setStep={setStep} user={user}/>}

            {step === "payment" && <CheckoutPayment paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} setStep={setStep}/>}

            {step === "review" && <CheckoutReview address={address} items={items} handlePlaceOrder={handlePlaceOrder} loading={loading} total={total}/>}
          </div>

          {/* {Resumen del Pedido - Barra lateral} */}
          <div className="bg-white rounded-2xl p-5 h-fit sticky top-24">
            <h3 className="text-sm font-semibold text-app-green mb-4">Resumen del Pedido</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-app-text-light">Subtotal ({items.length} items)</span>
                <span>{currency}{cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-app-text-light">Entrega </span>
                <span>{deliveryFee === 0 ? <span className="text-app-success">Gratis</span> : `${currency}${deliveryFee.toFixed(2)}`}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-app-text-light">Impuestos</span>
                <span>{currency}{tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-app-border text-base font-semibold">
                <span >Impuestos</span>
                <span className="text-app-green">{currency}{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout