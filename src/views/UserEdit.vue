<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="enter your name"
          required
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button :disabled="isProcessing" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "../api/users";
import { Toast } from "../utility/helpers";

export default {
  data() {
    return {
      user: {},
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    fetchUser() {
      this.user = this.currentUser;
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: "warning",
            title: "請填寫姓名",
          });
          return;
        }

        this.isProcessing = true;

        const form = e.target;
        const formData = new FormData(form);

        const { data } = await usersAPI.update({
          userId: this.user.id,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        } else {
          Toast.fire({
            icon: "success",
            title: data.message,
          });
        }
        this.$router.push({ name: "user", params: { id: this.user.id } });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更改使用者資料",
        });
      }
    },
  },
  created() {
    this.fetchUser();
  },
  watch: {
    currentUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };
    },
  },
};
</script>