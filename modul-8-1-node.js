const Joi = require('joi');
// проверка пароля,валидация
// const passwordSheme = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSheme.validate('q44'));
const shortid = require('shortid');
// console.log(shortid.generate());
const express = require('express');
const app = express();
app.use('*', (req,res) => {
    console.log('Был запрос от браузера');
    res.send('<h1>html в ответ</h1>');
});
const listener = app.listen(4444, () => {
    console.log(`Веб-сервер запущен на порте ${listener.address().port}`);
});






