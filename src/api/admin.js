import { apiHelper } from "../utility/helpers";

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    create(category) {
      return apiHelper.post('/admin/categories', category)
    },
    delete({categoryId}) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    update({categoryId, name}) {
      return apiHelper.put(`/admin/categories/${categoryId}`, {name})
    }
  },
  restaurants: {
    create({formData}) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    delete({restaurantId}) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    getDetail({restaurantId}) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    update({restaurantId, formData}) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    }
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
    setAdmin({userId, isAdmin}) {
      return apiHelper.put(`/admin/users/${userId}`, {isAdmin})
    }
  }
}