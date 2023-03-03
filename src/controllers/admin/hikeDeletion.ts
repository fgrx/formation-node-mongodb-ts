import { Request, Response } from "express";
import { hikeRepository } from "../../repository/hikeRepository";

const hikeDeletion = (req: Request, res: Response) => {
  const { slug } = req.params;

  if (slug) hikeRepository.deleteHike(slug);

  res.redirect("/admin");
};

export { hikeDeletion };
