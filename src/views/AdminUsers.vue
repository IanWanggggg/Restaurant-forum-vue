<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <Spinner v-if="isLoading" />

    <table v-else class="table">
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
              @click.stop.prevent="toggleUserRole({userId:user.id, isAdmin: user.isAdmin})"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              v-if="!user.isAdmin"
              @click.stop.prevent="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
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
import { mapState } from "vuex";
import adminAPI from "../api/admin";
import { Toast } from "../utility/helpers";
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    AdminNav,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true
        const { data } = await adminAPI.users.get();
        console.log(data);
        this.users = data.users;
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料",
        });
      }
    },
    async toggleUserRole({userId, isAdmin}) {
      try {
        const { data } = await adminAPI.users.setAdmin({ userId, isAdmin: (!isAdmin).toString() });
        console.log(data);
        this.users = this.users.map(function (user) {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            };
          }
          return user;
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法設定使用者為admin",
        });
      }
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