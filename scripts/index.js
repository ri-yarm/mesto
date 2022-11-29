const popup = document.querySelector('.popup'),
      popupExitButton = popup.querySelector('.popup__exit-button'),
      form = document.querySelector('.form'),
      formSubmitButton = form.querySelector('.form-submit-button'),
      profileEditButton = document.querySelector('.profile__edit-button'),
      inputName = form.querySelector('.form__name'),
      inputJob = form.querySelector('.form__job'),
      profileTitle = document.querySelector('.profile__title'),
      profileSubtitle = document.querySelector('.profile__subtitle');

function showPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
}
function closePopup() {
  popup.classList.remove('popup_opened');
}
// Открыть или Закрыть попап
profileEditButton.addEventListener('click', showPopup);
popupExitButton.addEventListener('click', closePopup);


//изменение пррфиля
function submitFormSend(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  closePopup()
}

form.addEventListener('submit', submitFormSend);
