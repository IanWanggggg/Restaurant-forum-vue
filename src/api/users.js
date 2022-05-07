import { apiHelper } from "../utility/helpers";

export default {
  getCurrentUser() {
    return apiHelper.get('/get_current_user')
  },
  get({userId}) {
    return apiHelper.get(`/users/${userId}`)
  },
  addFavorite({restaurantId}) {
    return apiHelper.post(`/favorite/${restaurantId}`, null )
  },
  deleteFavorite({restaurantId}) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getUserTop() {
    return apiHelper.get('/users/top')
  },
  addFollowing({userId}) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  removeFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  },
  update({userId, formData}) {
    return apiHelper.put(`/users/${userId}`, formData)
  }

}