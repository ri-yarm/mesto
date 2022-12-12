const profile = document.querySelector('.profile'),
      btnProfileEdit = profile.querySelector('.profile__edit-button'),
      profileTitle = profile.querySelector('.profile__title'),
      profileSubtitle = profile.querySelector('.profile__subtitle'),
      btnAddCard = profile.querySelector('.profile__add-button');
      

const btnClose = document.querySelectorAll('.popup__exit-button'),
      btnLike = document.querySelectorAll('.card__like-btn');

//попап редактирования профиля
const popupProfile = document.querySelector('.popup'),
      profileForm = popupProfile.querySelector('.form'),
      inputName = profileForm.querySelector('.form__input_type_name'),
      inputJob = profileForm.querySelector('.form__input_type_job');

//попап Добавления нового места
const popupCards = document.querySelector('#popupCard'),
      cardForm = popupCards.querySelector('.form'),
      inputPlaceName = cardForm.querySelector('.form__input_type_name'),
      inputLink = cardForm.querySelector('.form__input_type_link');

const popupZoom = document.querySelector('#popupZoom'); 

const templateCards = document.querySelector('#template-cards'),
      containerCards = document.querySelector('.places');

//открыть попап
function showPopup(popup) {
  popup.classList.add('popup_opened');
}

//закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}



//открытие формы профиля
btnProfileEdit.addEventListener('click', () => {
  showPopup(popupProfile);
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
});

//изменение и сохранение профиля
function rewriteProfileSubmit(event) {
  event.preventDefault();

  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;

  closePopup(popupProfile);
}
profileForm.addEventListener('submit', rewriteProfileSubmit);

//открытие формы нового места
btnAddCard.addEventListener('click', () => {
  inputLink.value = '';
  inputPlaceName.value = '';

  showPopup(popupCards);
});

//попап зума карточек
function cardZoom(name, link) {
  const popupImage = popupZoom.querySelector('.popup__image'),
        popupCaption = popupZoom.querySelector('.popup__caption');

  popupImage.src = link;
  popupImage.alt = ` ${name}.`;
  popupCaption.textContent = name;

  showPopup(popupZoom);
}

//добавление карточки форма
function rewriteCardSubmit(event) {
  event.preventDefault()

  const name = inputPlaceName.value;
  const link = inputLink.value;

  containerCards.prepend(createCard(name, link));

  closePopup(popupCards);
}
cardForm.addEventListener('submit', rewriteCardSubmit);


//создать карточку
function createCard(name, link) {
  const templateContent = templateCards.content.querySelector('.card').cloneNode(true),
        cardImage = templateContent.querySelector('.card__image'),
        cardTitle = templateContent.querySelector('.card__title'),
        btnCardDel = templateContent.querySelector('.card__delete-btn'),
        btnCardLike = templateContent.querySelector('.card__like-btn');

        cardImage.src = link;
        cardImage.alt = ` ${name}.`;
        cardTitle.textContent = name;

  btnCardLike.addEventListener('click', () => {
    btnCardLike.classList.toggle('card__like-btn_active');
  });

  btnCardDel.addEventListener('click', () => {
    templateContent.remove();
  });

  //открыть картинку в увеличенном масштабе
  cardImage.addEventListener('click', () => {
    cardZoom(name, link);
  })

  return templateContent;
}

//вывести карточки в контейнере
function renderCard(name, link) {
  containerCards.append(createCard(name, link));
};


//const defaultCards в другом файле
//загрузка дефолтных карточек
defaultCards.forEach(({name, link}) => {
  renderCard(name, link);
});

//закрытие попапов
btnClose.forEach(item => {
  item.addEventListener('click', event => {
    const popup = event.target.closest('.popup');
    closePopup(popup);
  });
});
