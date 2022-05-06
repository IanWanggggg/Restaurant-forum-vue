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
    <CreateComment
      @after-create-comment="afterCreateComment"
      :restaurantId="restaurant.id"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";
import restaurantsAPI from "../api/restaurants";
import { Toast } from "../utility/helpers";
import {mapState} from 'vuex'

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
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
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });

        console.log(data)

        // STEP 5: 透過 restaurantsAPI 取得餐廳資訊
        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };

        this.restaurantComments = Comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料",
        });
      }
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text, currentUser } = payload;
      this.restaurantComments.push({
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
      });
    },
  },
  created() {
    const {id} = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, from, next) {
    const {id} = to.params
    this.fetchRestaurant(id)
    next()
  }
};
</script>
