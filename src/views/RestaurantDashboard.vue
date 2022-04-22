<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Ike Waters",
    tel: "1-731-325-1267",
    address: "3059 Axel Drives",
    opening_hours: "08:00",
    description:
      "Sint et est sunt sit. Ut ut in sed rem nesciunt amet ipsum. Aut est asperiores fugit earum amet. Nihil magni quidem repellat quis. Repellat eligendi ab nobis.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=88.84876219349604",
    viewCounts: 1,
    createdAt: "2022-04-19T07:27:20.000Z",
    updatedAt: "2022-04-22T06:08:50.000Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Voluptate molestiae laudantium ut quos sed.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$aKNVtGam2Y3sVxssM0vqBOh1Ma1f263CTtIfgyypD6AhDvtSyy426",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
        },
      },
      {
        id: 51,
        text: "Fugiat magni et totam.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$aKNVtGam2Y3sVxssM0vqBOh1Ma1f263CTtIfgyypD6AhDvtSyy426",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
        },
      },
      {
        id: 101,
        text: "Architecto assumenda vitae quibusdam delectus nobis est illo eligendi.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$aKNVtGam2Y3sVxssM0vqBOh1Ma1f263CTtIfgyypD6AhDvtSyy426",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {}
    }
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = dummyData.restaurant
    }
  },
  created() {
    this.fetchRestaurant()
  }
};
</script>