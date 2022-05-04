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
        @click.stop.prevent="unfollowUser(user.id)"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="followUser(user.id)"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import usersAPI from '../api/users'
import {Toast} from '../utility/helpers'

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
    async followUser(userId) {
      try {
        const {data} = await usersAPI.addFollowing({userId})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user = {
          ...this.user,
          isFollowed: true
        }
      }
      catch(error) {
        Toast.fire({
          icon: 'error',
          title: '目前無法追蹤使用者，請稍後再試'
        })
      }
    },
    async unfollowUser(userId) {
      try {
        const {data} = await usersAPI.removeFollowing({userId})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user = {
          ...this.user,
          isFollowed: false
        }
      }
      catch(error) {
        Toast.fire({
          icon: 'error',
          title: '目前無法取消追蹤使用者，請稍後再試'
        })
      }
    },
  },
};
</script>