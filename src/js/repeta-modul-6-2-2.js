// https://developer.mozilla.org/en-US/docs/Web/API/FormData

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    // preventDefault() отмена действия по умолчанию. 
    // Здесь отменяем автоматическую перезагрузку страницы брайзера
    event.preventDefault();
    // console.log('perezagruzka');
    // console.dir(event.currentTarget);
    // console.dir(event.currentTarget.elements.subscription.value);
    // const formElements = event.currentTarget.elements;
    // console.dir(formElements);

    // const email = formElements.email.value;
    // const password = formElements.password.value;
    // const subscription = formElements.subscription.value;

    // console.log(email, password);

    // const formData = {
    //     email, password, subscription,
    // }

    // console.log(formData);

    const formData = new FormData(event.currentTarget);
// FormData проходит по всем интерактивным элементам и собирает данные которые вы ввели
    // используется для сбора и отправки данных на сервер
    formData.forEach((value, name) => {
        console.log('onFormSubmit -> value', value);
        console.log('onFormSubmit -> name', name);

    });


}