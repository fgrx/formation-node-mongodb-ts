import express from "express";

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Serveur lancé et à l'écoute sur le port ${port}`);
});
