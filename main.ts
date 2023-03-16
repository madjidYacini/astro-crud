// import "reflect-metadata";
import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import api from "./routes/astro.routes";
import connection from "./utils/connection";
import dotenv from "dotenv";
import { PORT } from "./utils/config";
require('dotenv').config();
const app: any = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true, }));
app.get("/", (req: Request, res: Response): Response => {
    return res.json({ message: "HEllo" });
});

app.get('*', (req: Request, res: Response): Response => {
    return res.status(404).json({
        message: 'Page Not Found',
        status: 404
    });
});
app.use('/astro', api);

const start = async (): Promise<void> => {
    await connection.sync({});
    try {
        app.listen(PORT || 3001, () => {
            console.log(`Server started on port ${PORT || 3001}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void start();