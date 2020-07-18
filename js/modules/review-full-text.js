export default class ReviewFullText {
  render() {
    this.renderText();
    this._createReviewTextHandlers();
  }

  renderText() {
    const reviewTextElements = document.querySelectorAll(`.review__text`);

    reviewTextElements.forEach((reviewTextElement) => {
      reviewTextElement.classList.add(`review__text--croped`);
    });
  }

  setMoreBtnClickHandlers(handler) {
    const reviewListElement = document.querySelector(`.reviews__list`);
    reviewListElement.addEventListener(`click`, handler);
  }

  _createReviewTextHandlers(kek) {
    const moreBtnClickHandler = (evt) => {
      const element = evt.target;

      if (element.tagName !== `BUTTON` && !element.classList.contains(`review__btn-more`)) {
        return;
      }

      if (element.previousElementSibling.classList.contains(`review__text--croped`)) {
        this._showReviewText(element);
        element.previousElementSibling.classList.remove(`review__text--croped`);
      } else {
        this._hideReviewText(element);
        element.previousElementSibling.classList.add(`review__text--croped`);
      }
    }

    this.setMoreBtnClickHandlers(moreBtnClickHandler);
  }

  _showReviewText(element) {
    element.classList.remove(`review__btn-more--hide`);
    element.classList.toggle(`review__btn-more--show`);
    element.textContent = `Свернуть`;
  }

  _hideReviewText(element) {
    element.classList.remove(`review__btn-more--show`);
    element.classList.add(`review__btn-more--hide`);
    element.textContent = `Подробнее`;
  }
}
