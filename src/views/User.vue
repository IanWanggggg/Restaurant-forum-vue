<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard :initialUser="user" />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :initialFollowings="user.Followings" />

        <!-- UserFollowersCard -->
        <UserFollowersCard :initialFollowers="user.Followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :initialComments="user.Comments" />

        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard :initialFavoritedRestaurants="user.FavoritedRestaurants" />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingCard.vue";
import UserFollowersCard from "../components/UserFollowerCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "../api/users";
import { Toast } from "../utility/helpers";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        password: "",
        isAdmin: false,
        image: "",
        createdAt: "",
        updatedAt: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
        isFollowed: false,
      },
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        console.log(data);

        const {
          id,
          name,
          email,
          password,
          isAdmin,
          image,
          createdAt,
          updatedAt,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = data.profile;

        const {isFollowed} = data

        this.user = {
          ...this.user,
          id,
          name,
          email,
          password,
          isAdmin,
          image,
          createdAt,
          updatedAt,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
          isFollowed
        };

      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料",
        });
      }
    },
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to,from,next) {
    const {id} = to.params
    this.fetchUser(id)
    next()
  }
};
</script>