import { Request, Response } from "express";
import { Hike } from "../interfaces/Hike";
import { AlertMessage } from "../interfaces/AlertMessage";
import slugify from "slugify";
import { hikeRepository } from "../repository/hikeRepository";

const addController = {
  displayForm: (req: Request, res: Response) => {
    res.render("hikeAddForm");
  },

  validateForm: async (req: Request, res: Response) => {
    const {
      title,
      duration,
      distance,
      postCode,
      start,
      difficulty,
      isLoop,
      description,
    } = req.body;

    const newHike: Hike = {
      slug: slugify(title),
      title,
      duration,
      distance,
      postCode,
      start,
      difficulty,
      isLoop: isLoop === "on",
      description,
    };

    const createdHike = await hikeRepository.addHike(newHike);

    const message: AlertMessage = {
      title: "Randonnée enregistrée !",
      description: "Votre randonnée a été ajoutée avec succès",
      type: "success",
    };

    if (!createdHike) {
      message.title = "Une erreur s'est produite";
      message.description =
        "Une erreur s'est produite pendant l'enregistrement. Veuillez contacter l'administrateur.";
      message.type = "error";
    }

    res.render("hikeAddForm", { message });
  },
};

export { addController };
