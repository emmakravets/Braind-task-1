const cropText = (text) => {
  return text.length > 254 ? text.slice(0, 253) + `...` : text;
};

export default class ReviewFullText {
  constructor() {
    this.reviewFullText = null;
  }

  render() {
    this.renderText();
    // this._createReviewTextHandlers();
  }

  renderText() {
    const reviewTextElements = document.querySelectorAll(`.review__text`);

    reviewTextElements.forEach((reviewTextElement) => {
      this.reviewFullText = reviewTextElement.textContent;

      this._createReviewTextHandlers(this.reviewFullText);

      const reviewCropedText = cropText(reviewTextElement.textContent);
      reviewTextElement.textContent = reviewCropedText;


      // this._createReviewTextHandlers(this.reviewFullText);
    });

  }

  setMoreBtnClickHandlers(handler) {
    const moreBtnElements = document.querySelectorAll(`.review__btn-more`);
    moreBtnElements.forEach((moreBtnElement) => {
      moreBtnElement.addEventListener(`click`, handler);
    });
  }

  _createReviewTextHandlers(reviewText) {
    const moreBtnClickHandler = (evt) => {
      const element = evt.target;

      this._showReviewText(element);

      element.previousElementSibling.textContent = reviewText;
      console.log(this.reviewFullText)
    }

    this.setMoreBtnClickHandlers(moreBtnClickHandler);
  }

  _showReviewText(element) {
    element.classList.remove(`review__btn-more--hide`);
    element.classList.add(`review__btn-more--show`);
    element.textContent = `Свернуть`;
  }

  _hideReviewText(element) {
    element.classList.remove(`review__btn-more--show`);
    element.classList.add(`review__btn-more--hide`);
    element.textContent = `Подробнее`;
  }
}
