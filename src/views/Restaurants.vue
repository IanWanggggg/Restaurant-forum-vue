<template>
  <div class="container py-5">
    <NavTabs />

    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :totalPage="totalPage"
      :categoryId="categoryId"
      :currentPage="page"
      :previousPage="prev"
      :nextPage="next"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";
import restaurantsApi from "../api/restaurants";
import { Toast } from "../utility/helpers";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: "-1",
      page: 1,
      totalPage: [],
      prev: -1,
      next: -1,
    };
  },
  methods: {
    async fetchRestaurants({ page, categoryId }) {
      try {
        const response = await restaurantsApi.getRestaurants({
          page: page,
          categoryId: categoryId,
        });
        console.log(response);
        this.restaurants = response.data.restaurants;
        this.categories = response.data.categories;
        this.categoryId = response.data.categoryId;
        this.page = response.data.page;
        this.totalPage = response.data.totalPage;
        this.prev = response.data.prev;
        this.next = response.data.next;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取的餐廳資料，請稍後再試",
        });
      }
    },
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({ page: page, categoryId: categoryId });
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ page: page, categoryId: categoryId });
    next();
  },
};
</script>
