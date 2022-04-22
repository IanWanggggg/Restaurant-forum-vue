<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UsersTopUser
        v-for="user in users"
        :key="user.id"
        :initial_user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import UsersTopUser from "../components/UsersTopUser.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$15QlzrLsEi9vBujiAQckgOuH/gEZjE9jrFc3VUhlfu7FrikYl2qPC",
      isAdmin: true,
      image: null,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$w/aEQgNLYZT/8efkQgC1OOUHqpjT1uJejcb0rfHUJCVm71bS8NsTO",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$aKNVtGam2Y3sVxssM0vqBOh1Ma1f263CTtIfgyypD6AhDvtSyy426",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-19T07:27:20.000Z",
      updatedAt: "2022-04-19T07:27:20.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
export default {
  components: {
    NavTabs,
    UsersTopUser,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
