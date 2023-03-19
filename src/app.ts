import express from "express";
import { createRouter } from "./router";
import dotenv from "dotenv";
import connectDB from "./db/dbConnexion";
import cookieParser from "cookie-parser";
import sessions from "express-session";
import cors from "cors";

const app = express();

dotenv.config();

// Indique à express d'utiliser un middleware (bodyparser) pour parser la requete
// Pour les formulaires :
app.use(express.urlencoded({ extended: true }));
// Pour les requêtes POST
app.use(express.json());

//Pour les sessions
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  sessions({
    secret: process.env.SESSION_SECRET || "MaVarSecrete!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: oneDay },
  })
);

// Pour ne plus avoir de problème avec le type sur les sessions avec TS
declare module "express-session" {
  interface SessionData {
    userEmail: string | null;
  }
}

// Pour les cookies
app.use(cookieParser());

app.set("views", "./src/views");
app.set("view engine", "pug");

app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));
app.use("/public", express.static("./public"));

app.use(cors());

createRouter(app);

const port = process.env.PORT || "4000";

connectDB();

app.listen(port, () => {
  console.log(`Serveur lancé et à l'écoute sur le port ${port}`);
});
