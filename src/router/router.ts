import { Application, Router } from "express";

const createRouter = (app: Application) => {
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
};

export { createRouter };
