import { Request, Response } from "express";
import { hikeRepository } from "../../repository/hikeRepository";

const displayHikeManagementConsole = async (req: Request, res: Response) => {
  const invalidHikes = await hikeRepository.searchHikes({ isValid: false });
  const validHikes = await hikeRepository.searchHikes({ isValid: true });
  res.render("adminConsole", { invalidHikes, validHikes });
};

export { displayHikeManagementConsole };
