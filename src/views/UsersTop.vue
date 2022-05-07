<template>
  <div class="container py-5">
    <NavTabs />

    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <UsersTopUser
          v-for="user in users"
          :key="user.id"
          :initial_user="user"
        />
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import UsersTopUser from "../components/UsersTopUser.vue";
import usersAPI from "../api/users";
import { Toast } from "../utility/helpers";
import Spinner from "../components/Spinner.vue";

export default {
  components: {
    NavTabs,
    UsersTopUser,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getUserTop();
        console.log(data);
        this.users = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
