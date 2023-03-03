import { Request, Response } from "express";
import { Hike } from "../../interfaces/Hike";
import { hikeRepository } from "../../repository/hikeRepository";

const hikeManagement = {
  displayHikeManagementConsole: async (req: Request, res: Response) => {
    const invalidHikes = await hikeRepository.searchHikes({ isValid: false });
    const validHikes = await hikeRepository.searchHikes({ isValid: true });
    res.render("adminConsole", { invalidHikes, validHikes });
  },

  hikeValidation: async (req: Request, res: Response) => {
    const { slug } = req.params;

    if (slug) {
      const hike = await hikeRepository.GetHikeBySlug(slug);

      if (hike) {
        const updates = { isValid: true };
        await hikeRepository.updateHike(slug, updates);
      }
    }

    res.redirect("/admin");
  },

  hikeDeletion: (req: Request, res: Response) => {
    const { slug } = req.params;

    if (slug) hikeRepository.deleteHike(slug);

    res.redirect("/admin");
  },
};

export { hikeManagement };
