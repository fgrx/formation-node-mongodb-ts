import express, { Router } from "express";

const app = express();

const port = 3000;

const router = Router();

router.get("/", (req, res) => {
  res.send(
    `<html>
        <head>
            <title>Ma première application</title>
        </head>
        <body>
        <h1>Hello world !</h1>
        </body>
    </html>`
  );
});

app.use(router);

app.listen(port, () => {
  console.log(`Serveur lancé et à l'écoute sur le port ${port}`);
});
