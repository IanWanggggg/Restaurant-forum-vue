<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="user.profile.image" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ user.profile.name }}</h5>
        <p class="card-text">{{ user.profile.email }}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ user.profile.Comments.length }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ user.profile.FavoritedRestaurants.length }}</strong>
            收藏的餐廳
          </li>
          <li>
            <strong>{{ user.profile.Followings.length }}</strong> followings
            (追蹤者)
          </li>
          <li>
            <strong>{{ user.profile.Followers.length }}</strong> followers
            (追隨者)
          </li>
        </ul>
        <p>
          <router-link
            :to="{ name: 'user-edit', params: { id: currentUser.id } }"
            v-if="currentUser.id == user.profile.id"
          >
            <button type="submit" class="btn btn-primary">edit</button>
          </router-link>
          <template v-else>
            <button
              v-if="user.isFollowed"
              @click.stop.prevent="deleteFollowing"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              v-else
              @click.stop.prevent="addFollowing"
              class="btn btn-primary"
            >
              追蹤
            </button>
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script>  //user.profile.id = 1    currentUser.id = 1
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentUser: {},
      user: {},
    };
  },
  methods: {
    fetchUser() {
      this.currentUser = dummyUser.currentUser;
      this.user = this.initialUser;
    },
    addFollowing() {
      this.user.isFollowed = true;
    },
    deleteFollowing() {
      this.user.isFollowed = false;
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>
