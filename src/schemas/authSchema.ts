import Joi from "joi";

const authValidationSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

export { authValidationSchema };
