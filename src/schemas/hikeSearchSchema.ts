import Joi from "joi";

const hikeSearchSchema = Joi.object({
  isLoop: Joi.boolean(),
  distance: Joi.object({ $gte: Joi.number(), $lte: Joi.number() }),
  difficulty: Joi.valid("easy", "medium", "hard"),
}).options({ abortEarly: false });

export { hikeSearchSchema };
