<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
import restaurantsApi from "../api/restaurants";

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantsApi.getFeed();
        this.restaurants = response.data.restaurants;
        this.comments = response.data.comments.filter(function (item) {
          return item.Restaurant && item.text;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>
