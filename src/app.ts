import express from "express";
import { createRouter } from "./router";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const port = process.env.PORT;

createRouter(app);

app.listen(port, () => {
  console.log(`Serveur lancé et à l'écoute sur le port ${port}`);
});
