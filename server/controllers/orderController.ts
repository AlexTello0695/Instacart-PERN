import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

// Crear Pedido
// POST /api/orders
export const createOrder = async (req: Request, res: Response) => {
    const {items, shippingAddress, paymentMethod} = req.body;

    // Revisar que el pedido tenga productos
    if (!items || items.length === 0) {
        return res.status(400).json({message: "Sin productos en el pedido"})
    }

    // Consultar los precios reales en la base de datos
    const productIds = items.map((i: any) => i.product);
    const products = await prisma.product.findMany({where: {id: {in: productIds}}})
    const productMap: Record<string, (typeof products)[0]> = {}

    products.forEach((p: any) => (productMap[p.id] = p))

    // Comprobar si el producto está en stock
    for (const item of items) {
        const product = productMap[item.product]
        if (!product || (product.stock ?? 0) < item.quantity) {
            return res.status(400).json({message: "Producto agotado" });
        }
    }

    const orderItems = items.map((item: any) => {
        const dbProduct = productMap[item.product];
        if (!dbProduct) throw new Error(`Producto ${item.product} no encontrado`);
            return {
                product: dbProduct.id,
                name: dbProduct.name,
                image: dbProduct.image,
                price: dbProduct.price,
                quantity: item.quantity,
                unit: dbProduct.unit,
        }
    })

    const subtotal = orderItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
    const deliveryFee = subtotal > 200 ? 0 : 199.99;
    const tax = Math.round(subtotal * 0.08 * 100) / 100;
    const total = Math.round((subtotal + deliveryFee + tax) * 100) / 100;

    const order = await prisma.order.create({
        data: {
            userId: req.user!.id,
                items: orderItems,
                shippingAddress,
                paymentMethod,
                subtotal,
            deliveryFee,
            tax,
            total,
            statusHistory: [{status: "Realizado", nota: "Pedido realizado exitosamente", timestamp: new Date()}]
        }
    })

    if (paymentMethod === "card") {
        //Enlace de pago a Mercado Libre
    }
    res.json({order})

    // Reducir Existencias
    for (const item of orderItems) {
        await prisma.product.update({
            where: {id: item.product},
            data: {stock: {decrement: item.quantity}}
        })
    }
}

// Obtener Pedidos del usuario
// GET /api/orders
export const getUserOrders = async (req: Request, res: Response) => {
    const { status } = req.query;

    const where: any = {
        userId: req.user!.id,
        NOT: [{paymentMethod: "card", isPaid: false}]
    }

    if (status && status !== "all") {
        where.status = status;
    }

    const orders = await prisma.order.findMany({
        where,
        include: {deliveryPartner: {select: {name: true, phone: true}}},
        orderBy: {createdAt: "desc"},
    })
    res.json({orders})
}

// Obtener pedido individual
// GET /api/orders/:id
export const getOrder = async (req: Request, res: Response) => {
    const order = await prisma.order.findFirst({
        where: {id: req.params.id as string, userId: req.user!.id},
        include: {deliveryPartner: {select: {name: true, phone: true, avatar: true, vehicleType: true}}}
    })

    if (!order) {
        return res.status(404).json({ message: "Pedido no encontrado" });
    }
    res.json({order})
}

// Actualizar estado del pedido (admin)
// PUT /api/orders/:id/status
export const updateOrderStatus = async (req: Request, res: Response) => {
    const { status, note } = req.body;
    const order = await prisma.order.findUnique({where: {id: req.params.id as string}})

    if (!order) {
        return res.status(404).json({ message: "Pedido no encontrado"});
    }

    const history = (Array.isArray(order.statusHistory) ? order.statusHistory : []) as any[];
    history.push({status, note: note || `Pedido ${status.toLowerCase()}`, timestamp: new Date()})

    const updateOrder = await prisma.order.update({
        where: {id: req.params.id as string},
        data: {status, statusHistory: history}
    })
    res.json({order: updateOrder})
}

// Obtener todos los pedidos (admin)
// GET /api/orders/all
export const getAllOrders = async (req: Request, res: Response) => {
    
    const orders = await prisma.order.findMany({
        where: {NOT: [{paymentMethod: "card", isPaid: false}]},
        include: {
            user: {select: {name: true, email:true}},
            deliveryPartner: {select: {name: true, phone: true, email: true}}
        },
        orderBy: {createdAt: "desc"},
    })
    res.json({orders})
}

// Obtener ubicacion del pedido
// GET /api/orders/:id/location
export const getOrderLocation = async (req: Request, res: Response) => {
    const order = await prisma.order.findFirst({
        where: {id: req.params.id as string, userId: req.user!.id},
        select: {liveLocation: true, status: true}
    })

    if (!order) return res.status(404).json({ message: "Pedido no encontrado"});
    res.json({liveLocation: order.liveLocation, status: order.status})
}