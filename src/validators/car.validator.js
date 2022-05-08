import Joi from 'joi';

const carValidator = Joi.object({
    // model:Joi.string().min(2).max(20).required().messages({
    //     'string.empty':'Model не може бути пустим',
    //     'string.min':'Model має бути мінімум 2 символи',
    // }),
    model:Joi.string().regex(/^[a-zA-ZА-яїЇіІёЁ]{1,20}$/).required().messages({
        'string.pattern.base':'Тільки букви мін 1 символ максимум 20'
    }),
    price:Joi.number().min(0).max(1000000).required(), // якщо не вписуємо messages то буде помилка описана по стандарту
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
}); // це все додаємо в нашу форму у useForm(сюди)

export {
    carValidator
}