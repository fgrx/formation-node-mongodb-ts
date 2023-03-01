import express from "express";
import { createRouter } from "./router";
import dotenv from "dotenv";
import connectDB from "./db/dbConnexion";

const app = express();

dotenv.config();

// Indique à express d'utiliser un middleware (bodyparser) pour parser la requete
app.use(express.urlencoded({ extended: true }));

app.set("views", "./src/views");
app.set("view engine", "pug");

app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));
app.use("/public", express.static("./public"));

createRouter(app);

const port = process.env.PORT || "4000";

connectDB();

app.listen(port, () => {
  console.log(`Serveur lancé et à l'écoute sur le port ${port}`);
});
