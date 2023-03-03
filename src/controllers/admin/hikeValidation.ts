import { Request, Response } from "express";
import { hikeRepository } from "../../repository/hikeRepository";

const hikeValidation = async (req: Request, res: Response) => {
  const { slug } = req.params;

  if (slug) {
    const hike = await hikeRepository.GetHikeBySlug(slug);

    if (hike) {
      const updates = { isValid: true };
      await hikeRepository.updateHike(slug, updates);
    }
  }

  res.redirect("/admin");
};

export { hikeValidation };
