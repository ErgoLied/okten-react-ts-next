import Joi from "joi";

export const authValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).min(1).max(20).messages({
        'string.pattern.base': 'only characters are allowed',
        'string.min': 'username must be at least 1 character',
        'string.max': 'username must be 20 characters max'
    }),

    password: Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).min(8).max(20).messages({
        'string.pattern.base': 'weak password',
        'string.min': 'password must be at least 8 characters',
        'string.max': 'password must be 20 characters max'
    })
});