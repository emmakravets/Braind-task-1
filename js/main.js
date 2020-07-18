import ReviewFullText from "./modules/review-full-text.js";
import PhotoPopup from "./modules/photo-popup.js";
import Rating from "./modules/rating.js";

const reviewFullText = new ReviewFullText();
const photoPopup = new PhotoPopup();
const rating = new Rating();

reviewFullText.render();
photoPopup.render();
rating.setRatingWidth();
