import { INIT_REVIEWS, ADD_REVIEW } from "../actionType/reviewsAT";
export const initReviews = (payload) => {
  return {
    type: INIT_REVIEWS,
    payload,
  };
}

export const addReviews = (payload) => {
  return {
    type: ADD_REVIEW,
    payload,
  };
}
