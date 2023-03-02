import Joi from "joi";

const hikeFormValidationSchema = Joi.object({
  title: Joi.string().min(5).required().messages({
    "string.min": "Le titre doit faire plus de 5 chr",
    "string.empty": "Le titre est obligatoire",
  }),
  description: Joi.string().min(20).messages({
    "string.min": "La description doit faire plus de 20 caractères",
    "string.empty": "La description doit être remplie",
  }),
  postCode: Joi.string().min(5).max(5).required().messages({
    "string.empty": "Le code postal doit être renseigné",
    "string.min": "Le code postal doit comporter 5 nombres",
    "string.max": "Le code postal doit comporter 5 nombres",
  }),
  start: Joi.string().min(3).messages({
    "string.empty": "La ville de départ doit être renseignée",
    "string.min": "La ville de départ doit avoir au moins 3 caractères",
  }),
  isLoop: Joi.boolean(),
  duration: Joi.number().min(15).integer().messages({
    "number.base": "La durée en minutes de la randonnée est requise",
    "number.min": "Une randonnée doit faire plus de 15 minutes",
    "number.integer":
      "La durée en minutes de la randonnée est requise (sans virgules)",
  }),
  distance: Joi.number()
    .integer()
    .min(2)
    .messages({
      "number.base": "La distance en km est requise",
      "number.min": "La distance doit être supérieure à 2km",
      "number.integer": "La distance doit avoir un compte rond, sans virgule",
    }),
  difficulty: Joi.required().valid("easy", "medium", "hard"),
});

const hikeFormValidation = (
  form: any
): { isFormValid: boolean; formErrorsMessage: string } => {
  const { error } = hikeFormValidationSchema.validate(form);

  if (error) {
    const errorsList = error?.details.map((element) => element.message);
    return { isFormValid: false, formErrorsMessage: errorsList.toString() };
  }

  return { isFormValid: true, formErrorsMessage: "" };
};

export { hikeFormValidation };
