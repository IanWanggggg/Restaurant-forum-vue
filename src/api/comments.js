import { apiHelper } from "../utility/helpers";

export default {
  add({ restaurantId, text }) {
    return apiHelper.post('/comments', {
      restaurantId,
      text
    })
  },
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}