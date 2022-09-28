const Joi = require('joi');
const shortid = require('shortid');

// проверка пароля,валидация
const passwordSheme = Joi.string().min(3).max(10).alphanum();
console.log(passwordSheme.validate('q44'));

// console.log(shortid.generate());

