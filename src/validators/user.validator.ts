import Joi from "joi";

export const userValidator = Joi.object({
    name: Joi.string().pattern(/^[A-Z][a-z]+\s[A-Z][a-z]+$/).required().messages({
        'string.pattern.base': 'only chars is allowed and it must be Name Surname'
    }),

    username: Joi.string().pattern(/^\S+$/).min(3).max(10).required().messages({
        'string.pattern.base': 'only one word',
        'string.min': 'add more chars',
        'string.max': 'username cannot be longer than 10 chars'
    }),

    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } }).required().messages({
        'string.empty': 'this field is required'
    }),

    address: {
        street: Joi.string().required().messages({'string.empty': 'this field is required'}),
        suite: Joi.string().required().messages({'string.empty': 'this field is required'}),
        city: Joi.string().required().messages({'string.empty': 'this field is required'}),
        zipcode: Joi.string().required().messages({'string.empty': 'this field is required'}),
        geo: {
            lat: Joi.number().required().messages({'number.required': 'this field is required'}),
            lng: Joi.number().required().messages({'number.required': 'this field is required'}),
        }
    },
    phone: Joi.string().required().messages({'string.empty': 'this field is required'}),
    website: Joi.string().required().messages({'string.empty': 'this field is required'}),
    company: {
        name: Joi.string().required().messages({'string.empty': 'this field is required'}),
        catchPhrase: Joi.string().required().messages({'string.empty': 'this field is required'}),
        bs: Joi.string().required().messages({'string.empty': 'this field is required'})
    }
})