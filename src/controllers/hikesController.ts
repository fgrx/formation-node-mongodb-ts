import { Request, Response } from "express";
import { hikeRepository } from "../repository/hikeRepository";

const hikesController = async (req: Request, res: Response) => {
  const limitPerPages = 6;
  const totalHikes = await hikeRepository.getNumberOfHikes();
  const currentPage = parseInt(req.params.page) || 0;
  const start = currentPage * limitPerPages;

  const title = "Liste des randonnées";

  const url = "/randonnees";

  const nextPage =
    start + limitPerPages <= totalHikes ? `${url}/${currentPage + 1}` : false;

  const prevPage = currentPage >= 1 ? `${url}/${currentPage - 1}` : false;

  const hikes = hikeRepository.getHikes(start, limitPerPages);

  res.render("hikes", { title, hikes, nextPage, prevPage });
};

export { hikesController };
