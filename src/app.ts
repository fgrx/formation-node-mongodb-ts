import express from "express";
import { createRouter } from "./router";
const app = express();

const port = 3000;

createRouter(app);

app.listen(port, () => {
  console.log(`Serveur lancé et à l'écoute sur le port ${port}`);
});
