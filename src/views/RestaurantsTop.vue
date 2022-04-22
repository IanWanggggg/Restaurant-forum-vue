<template>
  <div class="container py-5">
    <NavTabs />
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
              :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
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
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Juliana Mayert Sr.",
      tel: "1-455-336-5577",
      address: "8703 Reynolds Landing",
      opening_hours: "08:00",
      description: "Et dolor sit iusto illum nihil sit est ut. Enim do",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.691034065529145",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Raleigh Feest DVM",
      tel: "418-629-1486 x804",
      address: "9842 Mills Mountains",
      opening_hours: "08:00",
      description: "Animi fugiat sint. In provident rerum et quia repe",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.88326946802097",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Brisa Cassin",
      tel: "1-321-608-2411 x766",
      address: "4846 Carter Spur",
      opening_hours: "08:00",
      description: "Laboriosam dolorem cum quas quo quis officia exped",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.81345638114573",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Adelle Koepp",
      tel: "348-454-1693 x3140",
      address: "2256 Hayes Roads",
      opening_hours: "08:00",
      description: "Quasi quas animi odit eum tenetur ut accusamus max",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.60455711293822",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Miss Joey Wisozk",
      tel: "176-679-2190",
      address: "954 Diego Manor",
      opening_hours: "08:00",
      description: "Eveniet voluptas delectus omnis quae architecto as",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.57950680455382",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Crawford Kshlerin",
      tel: "(879) 933-7773 x8519",
      address: "80658 Balistreri Canyon",
      opening_hours: "08:00",
      description: "Error molestias sapiente quo ut repudiandae nihil ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.1300588253989",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Ally Roberts",
      tel: "026.900.7315 x0102",
      address: "6049 Mosciski Point",
      opening_hours: "08:00",
      description: "dolores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.035785418244327",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Constance Barton IV",
      tel: "861.824.6551 x18975",
      address: "129 Corene Ramp",
      opening_hours: "08:00",
      description: "Quos eos minima non quaerat laborum et quisquam fu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.188854371170669",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Kiana Nikolaus",
      tel: "129-348-3406",
      address: "47906 Devonte Trail",
      opening_hours: "08:00",
      description: "iste autem sed",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.185551980298946",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Issac Pagac",
      tel: "436.839.4215 x1053",
      address: "467 Mertz Avenue",
      opening_hours: "08:00",
      description: "Aut saepe sit laborum id enim ipsam et. Nisi nam i",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.944407776535144",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },

  data() {
    return {
      topRestaurants: [],
    };
  },

  methods: {
    fetchTopRestaurants() {
      this.topRestaurants = dummyData.restaurants;
    },
    addFavorite(restaurant) {
      restaurant.isFavorited = true;
    },
    deleteFavorite(restaurant) {
      restaurant.isFavorited = false;
    },
  },

  created() {
    this.fetchTopRestaurants();
  },
};
</script>