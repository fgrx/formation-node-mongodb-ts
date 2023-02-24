import { Application } from "express";

//Création d'un middleware
const useRouteError = (app: Application) => {
  const title = "Erreur 404";
  const content = "La page n'a pas été trouvée";

  app.use((req, res, next) => {
    res.status(404).render("page", {
      title,
      content,
    });
  });
};

export { useRouteError };
