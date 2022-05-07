import { apiHelper } from "../utility/helpers"

export default {
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurants({page , categoryId}) {
    const searchParams = new URLSearchParams({page: page, categoryId: categoryId})

    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeed() {
    return apiHelper.get('/restaurants/feeds')
  },
  getRestaurantTop() {
    return apiHelper.get('/restaurants/top')
  }

}
