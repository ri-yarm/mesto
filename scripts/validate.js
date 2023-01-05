// показать ошибку
function showInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  // errorElement.classList.add(config.formSpanVisible);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.formInputError)
};

//спрятать ошибку
function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(config.formInputError);
  errorElement.classList.remove(config.formInputError);
  errorElement.textContent = '';
};

// проверка на валидность инпута для spana и input
function checkValidity(formElement, inputElement, config) {
  if(!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config);
  } else {
    hideInputError(formElement, inputElement, config);
  };
};

 //проверка на валидность инпутов для кнопки
function hasInvalidInput(inputList) {
  return inputList.some(inputElement => !inputElement.validity.valid)
}

//переключение кнопки
function toggleButtonState(inputList, buttonElement, config) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonSubmit)
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonSubmit);
    buttonElement.disabled = false;
  }
}

//функция установщик слушателей событий на форму
function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(configForm.formInput)),
        buttonElement = formElement.querySelector(config.fromButtonSubmit)
        
  toggleButtonState(inputList, buttonElement, config)

  //делегирование обработчиков
  formElement.addEventListener('input', evt => {
    const inputElement = evt.target;
    checkValidity(formElement, inputElement, config);
    toggleButtonState(inputList, buttonElement, config)
  });
  
  // inputList.forEach(inputElement => {
  //   inputElement.addEventListener('input', () => {
  //     checkValidity(formElement, inputElement, config);
  //     toggleButtonState(inputList, buttonElement, config)
  //   });
  // });
};

//функция включения валидации. принимает параметр *config*. 
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(configForm.form));

  formList.forEach(formElement => {
    setEventListeners(formElement, config);
  });
};

//конфиг формы 
const configForm = {
  form: '.form',
  formLabel: '.popup__label',
  formInput: '.form__input',
  formInputError: 'form__input_type_error',
  formSpan: '.form__input-error',
  // formSpanVisible: '.form__input-error_visible',
  inactiveButtonSubmit: 'form__submit-button_invalid',
  fromButtonSubmit: '.form__submit-button',
}

enableValidation(configForm);