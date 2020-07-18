import {createElement} from "src/utils.js";

const createPhotoPopupTemplate = (src, alt) => {
  return (
    `<div class="photo-popup">
      <div class="photo-popup__container">
        <img class="photo-popup__image" src="${src}" alt="${alt}">
        <div class="photo-popup__close-btn-wrapper">
          <button class="photo-popup__close-btn" type="button" aria-label="Закрыть окно"></button>
        </div>
      </div>
     </div>`
  );
};

export default class PhotoPopupComponent {
  constructor(src, alt) {
    this._element = null;
    this._src = src;
    this._alt = alt;
  }

  getTemplate() {
    return createPhotoPopupTemplate(this._src, this._alt);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  setCloseBtnClickHandler(handler) {
    this.getElement().querySelector(`.photo-popup__close-btn`).addEventListener(`click`, handler);
  }
}
