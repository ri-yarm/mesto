const Popup = document.querySelector('.popup');
const Profile = document.querySelector('.profile');
const Form = Popup.querySelector('.form');

const ClosePopupButton = Popup.querySelector('.popup__exit-button');
const ProfileButton = Profile.querySelector('.profile__edit-profile');
const SubmitButton = Form.querySelector('.form__submit');

ProfileButton.addEventListener('click', () => {
  Popup.classList.add('popup_opened');
})

ClosePopupButton.addEventListener('click', () => {
  Popup.classList.remove('popup_opened');
})


