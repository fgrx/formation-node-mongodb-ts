import express, { Router } from "express";
import { createRouter } from "./router/router";
const app = express();

const port = 3000;

createRouter(app);

app.listen(port, () => {
  console.log(`Serveur lancé et à l'écoute sur le port ${port}`);
});
