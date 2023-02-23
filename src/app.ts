import express from "express";
import { createRouter } from "./router";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.set("views", "./src/views");
app.set("view engine", "pug");

app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));
app.use("../public", express.static("./public"));

const port = process.env.PORT;

createRouter(app);

app.listen(port, () => {
  console.log(`Serveur lancé et à l'écoute sur le port ${port}`);
});
