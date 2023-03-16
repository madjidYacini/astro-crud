import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

import { Astro } from "../models/index";
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME } from "./config";
console.log(DATABASE_PASSWORD, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME);
dotenv.config();

const connection = new Sequelize({
    dialect: "postgres",
    host: DATABASE_HOST,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    logging: false,
    models: [Astro],
});

export default connection;