const Popup = document.querySelector('.popup');
const PopupContainer = Popup.querySelector('.popup__container');
const Profile = document.querySelector('.profile');
const ProfileName = Profile.querySelector('.profile__title');
const ProfileJob = Profile.querySelector('.profile__subtitle');

const ClosePopupButton = Popup.querySelector('.popup__exit-button');
const ProfileButton = Profile.querySelector('.profile__edit-profile');


function closePopup() {
  Popup.classList.remove('popup_opened');
}

// открыть закрыть попап
ProfileButton.addEventListener('click', () => {
  Popup.classList.add('popup_opened');
});

ClosePopupButton.addEventListener('click', () => {
  closePopup();
});



// Закрытия попапа в любой области кроме контейнера
Popup.addEventListener('click', (e) => {
  if(!e.defaultPrevented) {
    closePopup();
  }
});
PopupContainer.addEventListener('click', (e) => {
  e.preventDefault();
});

//form
const Form = Popup.querySelector('.form');
const InputName = Form.querySelector('.form__name');
const InputJob = Form.querySelector('.form__job');
const FormSubmit = Form.querySelector('.form__submit');


InputName.value = ProfileName.textContent
InputJob.value = ProfileJob.textContent

FormSubmit.addEventListener('click', (e) => {
  ProfileName.textContent = InputName.value;
  ProfileJob.textContent = InputJob.value;
  closePopup();
});
