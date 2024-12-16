
import * as Joi from "joi";

export const productValidation : Joi.ObjectSchema <{productName: string;productPricev: string}>= Joi.object({
    productName:Joi.string().required(),
    productPrice: Joi.number().required()
});
