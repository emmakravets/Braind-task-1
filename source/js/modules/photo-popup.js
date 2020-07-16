import PhotoPopupComponent from "src/components/photo-popup-component.js";
import {appendElement, removeElement} from "src/utils.js";

export default class PhotoPopup {
  constructor() {
    this._containerElement = null;
    this._photoPopupComponent = null;

    this._src = null;
    this._alt = null;
  }

  render() {
    this._createPhotoHandlers();
  }

  setReviewImageClickHandler(handler) {
    const reviewImagesElements = document.querySelector(`.review__images-wrapper`);

    reviewImagesElements.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const element = evt.target;

      if (element.tagName !== `IMG` && !element.classList.contains(`review__image`)) {
        return;
      }

      this._src = evt.target.src;
      this._alt = evt.target.alt;

      handler();
    });
  }

  _createPhotoHandlers() {
    const reviewImageClickHandler = () => {
      this._openPopup(this._src, this._alt);
    };

    this.setReviewImageClickHandler(reviewImageClickHandler);
  }

  _openPopup(src, alt) {
    this._renderPopup(src, alt);
  }

  _closePopup() {
    removeElement(this._containerElement, this._photoPopupComponent);
    this._photoPopupComponent.getElement().classList.remove(`photo-popup--show`);
  }

  _createPopupHandlers() {
    const popupCloseBtnClickHandler = () => {
      this._closePopup();
    };

    this._photoPopupComponent.setCloseBtnClickHandler(popupCloseBtnClickHandler);
  }

  _renderPopup(src, alt) {
    this._photoPopupComponent = new PhotoPopupComponent(src, alt);

    this._containerElement = document.querySelector(`main`);
    appendElement(this._containerElement, this._photoPopupComponent);

    const imageElement = this._photoPopupComponent.getElement().querySelector(`.photo-popup__image`);

    imageElement.src = this._src;
    imageElement.alt = this._alt;
    this._photoPopupComponent.getElement().classList.add(`photo-popup--show`);

    this._createPopupHandlers();
  }
}
