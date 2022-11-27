const Popup = document.querySelector('.popup');
const Profile = document.querySelector('.profile');

const ClosePopupButton = Popup.querySelector('.popup__exit-button')
const ProfileButton = Profile.querySelector('.profile__edit-profile')

ProfileButton.addEventListener('click', function() {
  Popup.classList.add('popup_opened')
})

ClosePopupButton.addEventListener('click', function() {
  Popup.classList.remove('popup_opened')
})
