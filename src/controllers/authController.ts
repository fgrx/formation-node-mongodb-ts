import { Request, Response } from "express";
import { AlertMessage } from "../interfaces/AlertMessage";
import { userRepository } from "../repository/userRepository";
import { passwordEncoder } from "../services/passwordEncoder";

const authController = {
  showLogin: (req: Request, res: Response) => {
    res.render("login");
  },

  async controlCredentials(req: Request, res: Response) {
    const { email, password } = req.body;

    const userInDB = await userRepository.findUserByEmail(email);

    if (userInDB) {
      const encodedPassword = passwordEncoder(password, userInDB.salt);

      if (encodedPassword === userInDB.password) {
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
    }
  },
};

export { authController };
