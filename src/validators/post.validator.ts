import Joi from "joi";

export const postValidator = Joi.object({
    userId: Joi.number().min(1).max(10).required().messages({
        'number.min': 'id cannot be less then 1',
        'number.max': 'id cannot be greater then 10',
        'number.base': 'id is required'
    }),
    title: Joi.string().pattern(/^[A-Za-z\s]+$/).max(20).required().messages({
        'string.pattern.base': 'only chars is allowed',
        'string.max': 'max length cannot be more then 20',
        'string.empty': 'title is required'
    }),

    body: Joi.string().pattern(/^(?!\s*$).+$/).min(1).max(1000).required().messages({
        'string.min': 'add more chars',
        'string.max': 'you are out of chars limits',
        'string.empty': 'write your post',
        'string.pattern.base': 'hey, write something!'
    })
})