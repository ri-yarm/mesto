const popup = document.querySelector('.popup'),
      popupExitButton = popup.querySelector('.popup__exit-button'),
      form = document.querySelector('.form'),
      formSubmitButton = form.querySelector('.form-submit-button'),
      profileEditButton = document.querySelector('.profile__edit-button'),
      inputName = form.querySelector('.form__input_type_name'),
      inputJob = form.querySelector('.form__input_type_job'),
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
  closePopup();
}

form.addEventListener('submit', submitFormSend);

//загрузка дефолтных карточек
const sectionPlaces = document.querySelector('.places'),
      template = document.getElementById('template-cards').content.querySelector('.card');

function addDefaultCards(elements) {
  elements.forEach(({name, link}) => { 
    sectionPlaces.append(createCard(name, link));
  })
}

//создать карточку
function createCard(name, link) {
  const cards = template.cloneNode(true);
        cardsImage = cards.querySelector('.card__image');
        cardsTitle = cards.querySelector('.card__title');

  cardsTitle.textContent = name;
  cardsImage.src = link;
  cardsImage.alt = ` ${name}.`;

  return cards;
}

addDefaultCards(defaultCards);
