import { Request, Response } from "express";

const authController = {
  showLogin: (req: Request, res: Response) => {
    res.render("login");
  },

  controlCredentials: (req: Request, res: Response) => {},
};

export { authController };
