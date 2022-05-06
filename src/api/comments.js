import { apiHelper } from "../utility/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  add({ restaurantId, text }) {
    return apiHelper.post('/comments', {
      restaurantId,
      text
    }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  }
}