import { apiHelper } from "../utility/helpers"
const getToken = () => {return localStorage.getItem('token')}

export default {
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurants({page , categoryId}) {
    const searchParams = new URLSearchParams({page: page, categoryId: categoryId})

    return apiHelper.get(`/restaurants?${searchParams.toString()}`,{
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  },
  getFeed() {
    return apiHelper.get('/restaurants/feeds',{
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  },
  getRestaurantTop() {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  }

}
