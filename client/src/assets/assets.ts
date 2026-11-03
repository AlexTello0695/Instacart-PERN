import { TruckIcon, LeafIcon, ClockIcon, ShieldCheckIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons";
import hero_bg from "./hero_bg.jpeg";
import delivery_truck from "./delivery_truck.svg";
import fruits_vegetables from "./fruits_vegetables.png";
import dairy_eggs from "./dairy_eggs.png";
import bakery from "./bakery.png";
import drinks from "./drinks.png";
import pantry_staples from "./pantry_staples.png";
import snacks from "./snacks.png";
import frozen_foods from "./frozen_foods.png";
import personal_care from "./personal_care.png";
import baby_care from "./baby_care.png";
import meat_seafood from "./meat_seafood.png";

export const assets = {
    delivery_truck,
    hero_bg,
};

export const categoriesData = [
    { slug: "frutas-y-verduras", name: "Frutas y Verduras", image: fruits_vegetables },
    { slug: "cuidado-personal", name: "Cuidado Personal", image: personal_care },
    { slug: "despensa-basica", name: "Despensa Básica", image: pantry_staples },
    { slug: "panaderia", name: "Panadería", image: bakery },
    { slug: "bebidas", name: "Bebidas", image: drinks },
    { slug: "carnes-mariscos", name: "Carnes y Mariscos", image: meat_seafood },
    { slug: "botana", name: "Botana", image: snacks },
    { slug: "comida-congelada", name: "Comida Congelada", image: frozen_foods },
    { slug: "cuidado-de-bebe", name: "Cuidado de Bebé", image: baby_care },
    { slug: "lacteos-y-huevos", name: "Lácteos y Huevos", image: dairy_eggs },
];

export const heroSectionData = {
    description: "Productos frescos y orgánicos, entregados directamente a tu puerta. Calidad que se nota, comodidad que te mereces.",
    hero_image: hero_bg,
    hero_features: [
        { icon: TruckIcon, title: "Entrega gratuita", desc: "Pedidos mayores a $20" },
        { icon: LeafIcon, title: "100% orgánicos", desc: "Productos certificados" },
        { icon: ClockIcon, title: "Entrega el mismo día", desc: "Entrega express" },
        { icon: ShieldCheckIcon, title: "Pago seguro", desc: "Compra protegida" },
    ],
};

export const deliveryPartnerLoginImage = "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200";

export const appPromoBannerData = {
    title: "Obtén alimentos frescos en minutos.",
    description: "Descarga la aplicación de Instacart para acceder a ofertas exclusivas, seguimiento en tiempo real y la selección de productos más frescos entregados directamente en tu puerta.",
};

export const footerData = {
    brand: {
        name: "Instacart",
        description: "Reciba productos frescos y orgánicos directamente de las granjas locales en la puerta de su casa. Nutra su hogar con lo mejor de la tierra.",
        socials: [
            { icon: SiFacebook, link: "#" },
            { icon: SiX, link: "#" },
            { icon: SiInstagram, link: "#" },
        ],
    },

    sections: [
        {
            title: "Accesos Rápidos",
            links: [
                { label: "Todos los Productos", to: "/products" },
                { label: "Ofertas", to: "/deals" },
                { label: "Localización del paquete", to: "/orders" },
                { label: "Socio de Entrega", to: "/delivery" },
            ],
        },
        {
            title: "Atención al Cliente",
            links: [
                { label: "Mi Cuenta", to: "#" },
                { label: "Historial de Pedidos", to: "#" },
                { label: "Direcciones", to: "#" },
                { label: "Centro de Ayuda", href: "#" },
            ],
        },
    ],

    contact: [
        { icon: MapPinIcon, text: "123 Calle de Ejemplo, Ejemplo" },
        { icon: PhoneIcon, text: "+1 (111) 123-4567" },
        { icon: MailIcon, text: "hello@example.com" },
    ],

    bottom: {
        copyright: "© 2026 Instacart. Todos los Derechos Reservados.",
        links: [
            { label: "Política de Privacidad", href: "#" },
            { label: "Términos de Servicio", href: "#" },
        ],
    },
};

export const statusColors: Record<string, string> = {
    Realizado: "bg-blue-100 text-blue-700",
    Confirmado: "bg-indigo-100 text-indigo-700",
    Empacado: "bg-purple-100 text-purple-700",
    "En ruta": "bg-app-orange/10 text-app-orange",
    Entregado: "bg-green-100 text-green-700",
    Cancelado: "bg-red-100 text-red-700",
};

export const iconsForLeafpad = {
    truck: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png",
    destination: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
};

export const dummyProducts = []

export const dummyAdminDashboardData = {
    totalOrders: 1,
    totalUsers: 3,
    totalProducts: 27,
    outOfStock: 0,
    totalPartners: 2,
    recentOrders: [
        {
            shippingAddress: {
                label: "Casa",
                address: "Calle 12 ",
                city: "Iztacalco",
                state: "CDMX",
                zip: "876543",
                lat: 19.3937,
                lng: -99.08,
            },
            liveLocation: {
                lat: 19.3937,
                lng: -99.0898,
                updatedAt: "2026-04-06T08:41:27.211Z",
            },
            id: "69d366617ed7e54198d67dac",
            user: {
                id: "69bb6caf448f2d818db59122",
                name: "Admin",
                email: "admin@example.com",
            },
            items: [
                {
                    product: "69c22613ae75a98c7cd13b3b",
                    name: "Butter Croissant 100g",
                    image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/zvoeqbvrbrt7atqj0dbu.png",
                    price: 45,
                    quantity: 2,
                    unit: "100g",
                    id: "69d366617ed7e54198d67dad",
                },
                {
                    product: "69c22613ae75a98c7cd13b36",
                    name: "Barley 1kg",
                    image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png",
                    price: 140,
                    quantity: 1,
                    unit: "1kg",
                    id: "69d366617ed7e54198d67dae",
                },
            ],
            paymentMethod: "cash",
            subtotal: 230,
            deliveryFee: 0,
            tax: 18.4,
            total: 248.4,
            status: "Delivered",
            statusHistory: [
                {
                    status: "Realizado",
                    note: "Order placed successfully",
                    id: "69d366617ed7e54198d67daf",
                    timestamp: "2026-04-06T07:53:05.769Z",
                },
                {
                    status: "Asignado",
                    note: "Assigned to Rahul",
                    id: "69d366ab7ed7e54198d67dbe",
                    timestamp: "2026-04-06T07:54:19.796Z",
                },
                {
                    status: "Empacado",
                    note: "Status updated to Packed",
                    id: "69d366b37ed7e54198d67ddc",
                    timestamp: "2026-04-06T07:54:27.171Z",
                },
                {
                    status: "En ruta",
                    note: "Estado actualizado a En ruta",
                    id: "69d366b57ed7e54198d67e00",
                    timestamp: "2026-04-06T07:54:29.226Z",
                },
                {
                    status: "Entregado",
                    note: "Delivered by partner",
                    id: "69d373207ed7e54198d681b1",
                    timestamp: "2026-04-06T08:47:28.983Z",
                },
            ],
            deliveryPartner: {
                id: "69bbfc3866db7c6cdea47ede",
                name: "Randy",
                phone: "987654321",
            },
            deliveryOtp: "",
            isPaid: false,
            createdAt: "2026-04-06T07:53:05.774Z",
            updatedAt: "2026-04-06T08:47:28.984Z",
            __v: 4,
        },
    ],
};

export const dummyDeliveryPartnerData = [
    {
        id: "69bbfc6c66db7c6cdea47ee4",
        name: "Alex Tello",
        email: "alext@example.com",
        phone: "123456789",
        avatar: "",
        vehicleType: "bicicleta",
        isActive: false,
        createdAt: "2026-03-19T13:38:52.827Z",
        updatedAt: "2026-03-19T13:38:52.827Z",
        __v: 0,
    },
    {
        id: "69bbfc3866db7c6cdea47ede",
        name: "Derek",
        email: "derek@example.com",
        phone: "987654321",
        avatar: "",
        vehicleType: "motocicleta",
        isActive: true,
        createdAt: "2026-03-19T13:38:00.872Z",
        updatedAt: "2026-03-19T13:38:00.872Z",
        __v: 0,
    },
];

export const dummyDashboardOrdersData = [
    {
        shippingAddress: {
            label: "Casita",
            address: "Avenida Te 950 ",
            city: "Iztacalco",
            state: "CDMX",
            zip: "08400",
            lat: 19.3937,
            lng: -99.0898,
        },
        liveLocation: {
            lat: 19.3937,
            lng: -99.0898,
            updatedAt: "2026-04-06T08:41:27.211Z",
        },
        id: "69d366617ed7e54198d67dac",
        user: {
            id: "69bb6caf448f2d818db59122",
            name: "Admin",
            email: "admin@example.com",
        },
        items: [
            {
                product: "69c22613ae75a98c7cd13b3b",
                name: "Butter Croissant 100g",
                image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/zvoeqbvrbrt7atqj0dbu.png",
                price: 45,
                quantity: 2,
                unit: "100g",
                id: "69d366617ed7e54198d67dad",
            },
            {
                product: "69c22613ae75a98c7cd13b31",
                name: "7 Up 1.5L",
                image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/qt1ypzsoqni12ghf2ryp.png",
                price: 70,
                quantity: 3,
                unit: "1.5L",
                id: "69d366617ed7e54198d67dad"
            },
            {
                product: "69c22613ae75a98c7cd13b2f",
                name: "Coca-Cola 1.5L",
                image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/eljxcdud6fduwfim5rdx.png",
                price: 75,
                quantity: 2,
                unit: "1.5L",
                id: "69d366617ed7e54198d67dad"
            },
            {
                product: "69c22613ae75a98c7cd13b26",
                name: "Apple 1 kg",
                image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/pjt1y6xdo46tluemhf0o.png",
                price: 100,
                quantity: 1,
                unit: "1kg",
                id: "69d366617ed7e54198d67dad"
            },
            {
                product: "69c22613ae75a98c7cd13b36",
                name: "Barley 1kg",
                image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png",
                price: 140,
                quantity: 1,
                unit: "1kg",
                id: "69d366617ed7e54198d67dae",
            },
        ],
        paymentMethod: "cash",
        subtotal: 690,
        deliveryFee: 0,
        tax: 18.4,
        total: 708.40,
        status: "En ruta",
        statusHistory: [
            { status: "Realizado", note: "Order placed successfully", id: "69d366617ed7e54198d67daf", timestamp: "2026-04-06T07:53:05.769Z" },
            { status: "Asignado", note: "Assigned to Rahul", id: "69d366ab7ed7e54198d67dbe", timestamp: "2026-04-06T07:54:19.796Z" },
            { status: "Empacado", note: "Status updated to Packed", id: "69d366b37ed7e54198d67ddc", timestamp: "2026-04-06T07:54:27.171Z" },
            { status: "En Ruta", note: "Estado actualizado a En ruta", id: "69d366b57ed7e54198d67e00", timestamp: "2026-04-06T07:54:29.226Z" },
            { status: "Entregado", note: "Entregado por el repartidor", id: "69d373207ed7e54198d681b1", timestamp: "2026-04-06T08:47:28.983Z" },
        ],
        deliveryPartner: { id: "69bbfc3866db7c6cdea47ede", name: "Derek", email: "derek@example.com", phone: "987654321" },
        deliveryOtp: "754730",
        isPaid: false,
        createdAt: "2026-04-06T07:53:05.774Z",
        updatedAt: "2026-04-06T08:47:28.984Z",
        __v: 4,
    },
    {
        shippingAddress: { label: "Home", address: "New Market Road ", city: "New York ", state: "NY", zip: "876543", lat: 40.7128, lng: -74.006 },
        liveLocation: { lat: 40.7128, lng: -74.006, updatedAt: "2026-04-06T08:41:27.211Z" },
        id: "69d366617ed7e54198d67dad",
        user: { id: "69bb6caf448f2d818db59122", name: "Admin", email: "admin@example.com" },
        items: [
            { product: "69c22613ae75a98c7cd13b3b", name: "Butter Croissant 100g", image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/zvoeqbvrbrt7atqj0dbu.png", price: 45, quantity: 2, unit: "100g", id: "69d366617ed7e54198d67dad" },
            { product: "69c22613ae75a98c7cd13b36", name: "Barley 1kg", image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png", price: 140, quantity: 1, unit: "1kg", id: "69d366617ed7e54198d67dae" },
        ],
        paymentMethod: "cash",
        subtotal: 230,
        deliveryFee: 0,
        tax: 18.4,
        total: 248.4,
        status: "En ruta",
        statusHistory: [
            { status: "Placed", note: "Pedido Realizado Exitosamente", id: "69d366617ed7e54198d67daf", timestamp: "2026-04-06T07:53:05.769Z" },
            { status: "Asignado", note: "Asignado a Derek", id: "69d366ab7ed7e54198d67dbe", timestamp: "2026-04-06T07:54:19.796Z" },
            { status: "Packed", note: "Estado actualizado a Empacado", id: "69d366b37ed7e54198d67ddc", timestamp: "2026-04-06T07:54:27.171Z" },
            { status: "En ruta", note: "Estado actualizado a En ruta", id: "69d366b57ed7e54198d67e00", timestamp: "2026-04-06T07:54:29.226Z" },
        ],
        deliveryPartner: { id: "69bbfc3866db7c6cdea47ede", name: "Derek", email: "rahul@example.com", phone: "987654321" },
        deliveryOtp: "",
        isPaid: false,
        createdAt: "2026-04-06T07:53:05.774Z",
        updatedAt: "2026-04-06T08:47:28.984Z",
        __v: 4,
    },
];

export const dummyCartData = [
    { product: dummyProducts[0], quantity: 1 },
    { product: dummyProducts[1], quantity: 1 },
    { product: dummyProducts[2], quantity: 1 },
];

export const dummyAddressData = [
    { label: "Home", address: "123 Main St ", city: "New York ", state: "NY", zip: "10001", isDefault: true, lat: 40.7128, lng: -74.006, id: "69d3652df9a340288f1a0f8c" },
    { label: "Work", address: "456 Market St ", city: "New York ", state: "NY", zip: "10002", isDefault: false, lat: 40.7128, lng: -74.006, id: "69d3652df9a340288f1a0f8d" },
];
