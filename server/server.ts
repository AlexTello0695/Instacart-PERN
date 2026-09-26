
import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from "cors";

const app = express();

// Middleware
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('El servidor 3 está en línea!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});