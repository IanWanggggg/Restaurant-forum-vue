<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <RestaurantDetail :initial-restaurant="restaurant" />
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      @after-delete-comment="afterDeleteComment"
      :restaurantComments="restaurantComments"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment @after-create-comment="afterCreateComment" :restaurantId="restaurant.id"/>
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue"

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
    updatedAt: "2022-04-22T06:08:50.991Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };
      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const {commentId, restaurantId, text, currentUser} = payload
      this.restaurantComments.push(
        {
        id: commentId,
        text: text,
        UserId: currentUser.id,
        RestaurantId: restaurantId,
        createdAt: new Date(),
        updatedAt: new Date(),
        User: {
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          password:
            "$2a$10$aKNVtGam2Y3sVxssM0vqBOh1Ma1f263CTtIfgyypD6AhDvtSyy426",
          isAdmin: currentUser.isAdmin,
          image: currentUser.image,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
        },
      }
      )
    }
  },
  created() {
    const restaurantId = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
};
</script>
