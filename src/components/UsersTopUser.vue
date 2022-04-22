<template>
  <div class="col-3">
    <router-link :to="{name: 'user', params:{id: user.id}}">
      <img
        :src="
          user.image
            ? user.image
            : 'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2021/06/17/20210617-045327_U22834_M695876_d6f7.jpeg?itok=Nzun_aAN'
        "
        width="140px"
        height="140px"
      />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.stop.prevent="unfollowUser()"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="followUser()"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    initial_user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initial_user,
    };
  },
  methods: {
    followUser() {
      this.user = {
        ...this.user,
        isFollowed: true,
      };
    },
    unfollowUser() {
      this.user = {
        ...this.user,
        isFollowed: false,
      };
    },
  },
};
</script>