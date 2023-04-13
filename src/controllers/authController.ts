import { Request, Response } from "express";
import { AlertMessage } from "../interfaces/AlertMessage";
import { userRepository } from "../repository/userRepository";
import { verifyCredentials } from "../services/authentication";

const authController = {
  showLogin: (req: Request, res: Response) => {
    res.render("login");
  },

  logout(req: Request, res: Response) {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  },

  async controlCredentials(req: Request, res: Response) {
    const { email, password } = req.body;

    const areCredentialsValid = await verifyCredentials(email, password);

    if (areCredentialsValid) {
      const session = req.session;
      session.userEmail = email;

      res.redirect("/admin");
    } else {
      const alertMessage: AlertMessage = {
        title: "Problème d'authentification",
        description: "Le couple Login / Mot de passe ne correspond pas",
        type: "error",
      };
      res.render("login", { alertMessage });
    }
  },
};

export { authController };
