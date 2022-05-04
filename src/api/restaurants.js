import { apiHelper } from "../utility/helpers"
const getToken = () => {return localStorage.getItem('token')}

export default {
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

// import { apiHelper } from '../utility/helpers'
// const getToken = () => localStorage.getItem('token')

// export default {
//   getRestaurants({ page, categoryId }) {
//     const searchParams = new URLSearchParams({ page, categoryId })
//     return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
//       headers: { Authorization: `Bearer ${getToken()}` }
//     })
//   }
// }