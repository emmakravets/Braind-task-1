const STAR_WIDTH = 15;

const replaceComma = (number) => {
  return number.toString().replace(`,`, `.`);
}

export default class Rating {
  setRatingWidth() {
    const ratingInputElements = document.querySelectorAll(`.rating__input--fifth`);
    const totalRatingCountElement = document.querySelector(`.rating__total-count`).textContent;

    ratingInputElements.forEach((ratingInputElement) => {
      const width = STAR_WIDTH * replaceComma(totalRatingCountElement);

      ratingInputElement.style.width = `${width}px`;
    });
  }
}
