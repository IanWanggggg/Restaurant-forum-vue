<template>
  <Spinner v-if="isLoading" />
  <table v-else class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from '../api/admin'
import {Toast} from '../utility/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    Spinner
  },
  data() {
    return {
      restaurants: [],
      isLoading: true
    };
  },
  methods: {
    async fetchRestaurants() {
      try {
        this.isLoading = true
        const response = await adminAPI.restaurants.get()
        if(response.status !== 200) {
          throw new Error(response.statusText)
        }
        this.restaurants = response.data.restaurants
        this.isLoading = false
      }
      catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳列表，請稍後再試'
        })
      }
    },
    async deleteRestaurant(restaurantId) {
      try {
        const {data} = await adminAPI.restaurants.delete({restaurantId})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.filter(function (item) {
          return item.id !== restaurantId;
        });
      }
      catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳，請稍後再試'
        })
      }
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>