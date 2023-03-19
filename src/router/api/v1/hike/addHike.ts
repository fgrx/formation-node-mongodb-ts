import { Router } from "express";
import slugify from "slugify";
import { Hike } from "../../../../interfaces/Hike";
import { validationMiddleware } from "../../../../middlewares/validationMiddleware";
import { hikeRepository } from "../../../../repository/hikeRepository";
import { hikeValidationSchema } from "../../../../schemas/hikeSchema";

const addHike = (baseUrl: string) => {
  const router = Router();

  router.post(
    `${baseUrl}/hikes`,
    validationMiddleware(hikeValidationSchema),
    async (req, res) => {
      const hikeData = req.body;

      const newHike: Hike = { ...hikeData };
      newHike.slug = slugify(newHike.title);
      newHike.date = new Date();

      newHike.image = req.file
        ? `/public/uploads/${req.file.filename}`
        : undefined;

      const createdHike = await hikeRepository.addHike(newHike);

      if (createdHike) {
        res.status(201).json(createdHike);
      } else {
        res.status(500).json("Erreur d'ajout de la ressource");
      }
    }
  );

  return router;
};

export default addHike;
