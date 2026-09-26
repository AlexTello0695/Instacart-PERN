import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


// Generar Token de JWT
const generateToken = (id: string) => {
    return jwt.sign({id}, process.env.JWT_SECRET as string, {expiresIn: "30d"})
}

//Checar si el usuario es Administrador
const getAdminStatus = (email: string | null | undefined) : 
boolean => {
    if(!email) return false;
    const adminEmails = process.env.ADMIN_EMAILS ? process.env.ADMIN_EMAILS.split(",").map((e) => e.trim().toLowerCase()) : [];
    return adminEmails.includes(email.toLowerCase()) 
}

//Registro
// POST  /api/auth/register
export const register = async (req:Request, res: Response) => {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({message: "Por favor, llena todos los campos"})
    }

    const existingUser = await prisma.user.findUnique({where: {email: email.toLowerCase()}})

    if (existingUser) {
        return res.status(400).json({message: "Ya existe un usuario con este correo"})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {name, email: email.toLowerCase(), password: hashedPassword}
    })

    const token = generateToken(user.id)

    const userData: any = {...user};
    delete userData.password;
    userData.isAdmin = getAdminStatus(userData.email)

    res.status(201).json({user: userData, token})
}

//Login
// POST  /api/auth/login
export const login = async (req:Request, res: Response) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({message: "Por favor, proporciona tu correo y contraseña"})
    }

    const user = await prisma.user.findUnique({where: {email: email.toLowerCase()}, include: {addresses: true}})

    if (!user) {
        return res.status(401).json({message: "Correo o contraseña inválidos"})
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(401).json({message: "Correo o contraseña inválidos"})
    }

    const token = generateToken(user.id)

    const userData: any = {...user};
    delete userData.password;
    userData.isAdmin = getAdminStatus(userData.email)

    res.json({user: userData, token})
}