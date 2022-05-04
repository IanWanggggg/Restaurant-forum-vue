<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin | adminOrUser }}</td>
          <td v-if="!(user.id === currentUser.id)">
            <button
              v-if="user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              v-if="!user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
              type="button"
              class="btn btn-link"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

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
    },
  ],
};

const currentUser = {
  id: 1,
  name: "root",
  email: "root@example.com",
  password: "$2a$10$15QlzrLsEi9vBujiAQckgOuH/gEZjE9jrFc3VUhlfu7FrikYl2qPC",
  isAdmin: true,
  image: null,
  createdAt: "2022-04-19T07:27:20.000Z",
  updatedAt: "2022-04-19T07:27:20.000Z",
};

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {}
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
      this.currentUser = currentUser
    },
    toggleUserRole(userId) {
      this.users = this.users.map(function (user) {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
  created() {
    this.fetchUsers();
  },
  filters: {
    adminOrUser(userIsAdmin) {
      return userIsAdmin ? "admin" : "user";
    },
  },
};
</script>