import "reflect-metadata";
import {createConnection, createConnections} from "typeorm";
import express from "express";
import {Request, Response} from "express";
import routes from "./routes";
import cors from 'cors';
import path from 'path';


    const PORT = process.env.PORT || 3000;

    createConnections()
      .then(async () => {
        // create express app
        const app = express();
        // Middlewares
        app.use(cors());

        app.use(express.json());
        // Routes
        app.use('/', routes);
        // start express server
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
      })
      .catch(error => console.log(error));
