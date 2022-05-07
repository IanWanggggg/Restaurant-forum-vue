<template>
  <div class="container py-5">
    <NavTabs />

    <Spinner v-if="isLoading"/>

    <template v-else>
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in topRestaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary">{{
              "收藏數: " + restaurant.FavoriteCount
            }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{
                name: 'restaurant-dashboard',
                params: { id: restaurant.id },
              }"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorite(restaurant)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import restaurantsAPI from "../api/restaurants";
import usersAPI from "../api/users";
import { Toast } from "../utility/helpers";
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    NavTabs,
    Spinner
  },

  data() {
    return {
      topRestaurants: [],
      isLoading: true
    };
  },

  methods: {
    async fetchTopRestaurants() {
      try {
        this.isLoading = true
        const { data } = await restaurantsAPI.getRestaurantTop();
        this.topRestaurants = data.restaurants;
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳排行，請稍後再試",
        });
      }
    },
    async addFavorite(restaurant) {
      try {
        const { data } = await usersAPI.addFavorite({
          restaurantId: restaurant.id,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        restaurant.isFavorited = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
      }
    },
    async deleteFavorite(restaurant) {
      try {
        const { data } = await usersAPI.deleteFavorite({
          restaurantId: restaurant.id,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        restaurant.isFavorited = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
      }
    },
  },

  created() {
    this.fetchTopRestaurants();
  },
};
</script>