<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">義大利料理</p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link class="btn btn-primary btn-border mr-2" :to="{name: 'restaurant-dashboard', params: {id: restaurant.id}}">Dashboard</router-link>

      <button
        v-if="restaurant.isFavorited"
        @click.stop.prevent="deleteFavorite"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        v-else
        @click.stop.prevent="addFavorite"
        type="button"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        @click.stop.prevent="deleteLike"
        type="button"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        v-else
        @click.stop.prevent="addLike"
        type="button"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from "../api/users";
import { Toast } from "../utility/helpers";

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },
  methods: {
    async addFavorite() {
      try {
        const { data } = await usersAPI.addFavorite({
          restaurantId: this.restaurant.id,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛",
        });
      }
    },
    async deleteFavorite() {
      try {
        const { data } = await usersAPI.deleteFavorite({
          restaurantId: this.restaurant.id,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛",
        });
      }
    },
    async addLike() {
      try {
        const {data} = await usersAPI.addLike({restaurantId: this.restaurant.id})

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

      this.restaurant = {
        ...this.restaurant,
        isLiked: true,
      };

      }
      catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入Like'
        })
      }
    },
    async deleteLike() {
      try {
        const {data} = await usersAPI.deleteLike({restaurantId: this.restaurant.id})

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

      this.restaurant = {
        ...this.restaurant,
        isLiked: false,
      };

      }
      catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除Like'
        })
      }
    },
  },
};
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>