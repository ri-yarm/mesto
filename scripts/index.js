const popup = document.querySelector('.popup'),
      popupExitButton = popup.querySelector('.popup__exit-button'),
      form = document.querySelector('.form'),
      formSubmitButton = form.querySelector('.form-submit-button'),
      profileEditButton = document.querySelector('.profile__edit-button'),
      inputName = form.querySelector('.form__name'),
      inputJob = form.querySelector('.form__job'),
      profileTitle = document.querySelector('.profile__title'),
      profileSubtitle = document.querySelector('.profile__subtitle');

function PopupShowOrDown() {
  popup.classList.toggle('popup_opened');
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
}
// Открыть или Закрыть попап
profileEditButton.addEventListener('click', () => {
  PopupShowOrDown();
});
popupExitButton.addEventListener('click', () => {
  PopupShowOrDown();
});
// Закрытие попапа вне его области
<<<<<<< HEAD
popup.addEventListener('click', (e) => {
  if(e.target === e.currentTarget) {
=======
popup.addEventListener('click', (event) => {
  if(event.target === event.currentTarget) {
>>>>>>> hotfix/index
    PopupShowOrDown();
  }
})


//изменение пррфиля
function submitFormSend(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  PopupShowOrDown();
}

form.addEventListener('submit', submitFormSend);
