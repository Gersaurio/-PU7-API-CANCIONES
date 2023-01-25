import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
// Importing Prisma Client
import {PrismaClient} from '@prisma/client';


dotenv.config();

const prisma = new PrismaClient();
const app: Express = express();
const port = process.env.PORT || 5000;
app.use(express.json());





app.get("/", (req: Request, res: Response) => {
    res.send('Express + TypeScript Server + Testing Prisma');
})

app.get("/api/v1/users", (req: Request,res: Response) => {
    res.send('Creación con password hasheado-POST');
})

app.get("/api/v1/songs", (req: Request,res: Response) => {
    res.send('Lee todas las canciones');
})

app.get("/api/v1/songs", (req: Request,res: Response) => {
    res.send('Login de usuario');
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});