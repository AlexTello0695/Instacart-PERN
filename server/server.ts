
import "dotenv/config";
import express, { NextFunction, Request, Response } from 'express';
import cors from "cors";
import authRouter from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('El servidor 3 está en línea!');
});

app.use('/api/auth', authRouter)

//Manejo de Errores
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(error)
    res.status(500).json({message: error.message})
})

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});