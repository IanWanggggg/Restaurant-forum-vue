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

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Ike Waters",
      tel: "1-731-325-1267",
      address: "3059 Axel Drives",
      opening_hours: "08:00",
      description: "Sint et est sunt sit. Ut ut in sed rem nesciunt am",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.84876219349604",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Mariano Kovacek",
      tel: "(165) 473-8006",
      address: "8172 Trantow Pines",
      opening_hours: "08:00",
      description: "Qui aut harum neque aut sed quo quos nihil. Eos et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.500072808016625",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Roel Fisher",
      tel: "584-659-6697 x14675",
      address: "6460 Kling Crest",
      opening_hours: "08:00",
      description: "Voluptatem ipsa sapiente animi iste ut. Sint sit q",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.54101763467872",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Mrs. Jason Altenwerth",
      tel: "833-980-9129 x1828",
      address: "00077 Turcotte Circles",
      opening_hours: "08:00",
      description: "Minima ut aliquam quae molestiae dignissimos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.2777697892589",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Mayra Koepp",
      tel: "1-282-724-3482",
      address: "400 Cormier Falls",
      opening_hours: "08:00",
      description: "expedita officiis omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.057956793708044",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Meggie Moen",
      tel: "255-610-4986 x802",
      address: "307 Sporer Wall",
      opening_hours: "08:00",
      description: "cum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.855638253509206",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Sven Herman",
      tel: "1-218-234-5016",
      address: "1772 Prohaska Courts",
      opening_hours: "08:00",
      description: "Rerum aut voluptatum.\nRepellendus quaerat nemo aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.498583959981104",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Imani Macejkovic",
      tel: "(858) 228-1091 x716",
      address: "85362 Caterina Greens",
      opening_hours: "08:00",
      description: "Temporibus repellendus quis nihil.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.146034530177175",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Eddie Koepp",
      tel: "256.211.9657 x6790",
      address: "0253 Hamill Prairie",
      opening_hours: "08:00",
      description: "Iusto nostrum rerum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.632199516950994",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Orland Hyatt",
      tel: "119.092.1097 x528",
      address: "65656 Declan Manor",
      opening_hours: "08:00",
      description: "Deserunt fuga quaerat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.19395399804678",
      viewCounts: 0,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

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
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
      this.categories = dummyData.categories;
      this.categoryId = dummyData.categoryId;
      this.page = dummyData.page;
      this.totalPage = dummyData.totalPage;
      this.prev = dummyData.prev;
      this.next = dummyData.next;
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>
