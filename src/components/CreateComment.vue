<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import commentsAPI from "../api/comments";
import { mapState } from "vuex";
import { Toast } from "../utility/helpers";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async handleSubmit() {
      try {
        const { data } = await commentsAPI.add({
          restaurantId: this.restaurantId,
          text: this.text,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: data.RestaurantId,
          text: this.text,
          currentUser: this.currentUser,
        });
        this.text = "";
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法新增評論",
        });
      }
    },
  },
};
</script>