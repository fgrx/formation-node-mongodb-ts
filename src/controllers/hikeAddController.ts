import { Request, Response } from "express";
import { Hike } from "../interfaces/Hike";
import { AlertMessage } from "../interfaces/AlertMessage";
import slugify from "slugify";
import { hikeRepository } from "../repository/hikeRepository";
import { hikeFormValidation } from "../services/hikeFormValidation";

const addController = {
  displayForm: (req: Request, res: Response) => {
    const defaultFormValues = {
      title: "",
      description: "",
      distance: "",
      duration: "",
      difficulty: "medium",
      isLoop: false,
      start: "",
      postCode: "",
    };

    res.render("hikeAddForm", { formData: defaultFormValues });
  },

  validateForm: async (req: Request, res: Response) => {
    const formData = { ...req.body };
    formData.isLoop = formData.isLoop === "on";

    const { isFormValid, formErrorsMessage } = hikeFormValidation(formData);

    if (!isFormValid) {
      const message: AlertMessage = {
        title: "Erreur de formulaire",
        description: `Les champs suivants présentent un problème : ${formErrorsMessage}`,
        type: "error",
      };

      res.render("hikeAddForm", { message, formData });

      return;
    }

    const newHike: Hike = { ...formData };
    newHike.slug = slugify(newHike.title);
    newHike.date = new Date();

    const createdHike = await hikeRepository.addHike(newHike);

    if (!createdHike) {
      const message: AlertMessage = {
        title: "Une erreur s'est produite",
        description:
          "Une erreur s'est produite pendant l'enregistrement. Veuillez contacter l'administrateur.",
        type: "error",
      };
      res.render("hikeAddForm", { message, formData });
    }

    const message: AlertMessage = {
      title: "Randonnée enregistrée !",
      description: "Votre randonnée a été ajoutée avec succès",
      type: "success",
    };

    res.render("hikeAddForm", { message });
  },
};

export { addController };
