<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="user.image ? user.image : 'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2021/06/17/20210617-045327_U22834_M695876_d6f7.jpeg?itok=Nzun_aAN'" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.email }}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ user.Comments.length }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ user.FavoritedRestaurants.length }}</strong>
            收藏的餐廳
          </li>
          <li>
            <strong>{{ user.Followings.length }}</strong> followings
            (追蹤者)
          </li>
          <li>
            <strong>{{ user.Followers.length }}</strong> followers
            (追隨者)
          </li>
        </ul>
        <p>
          <router-link
            :to="{ name: 'user-edit', params: { id: currentUser.id } }"
            v-if="currentUser.id == user.id"
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
import {mapState} from 'vuex'
import usersAPI from '../api/users'
import {Toast} from '../utility/helpers'

export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
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
        isFollowed: false
      },
    };
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    fetchUser() {
      this.user = {
        ...this.user,
        ...this.initialUser
      }
    },
    async addFollowing() {
      try {
        const {data} = await usersAPI.addFollowing({userId: this.user.id})

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user.isFollowed = true;

      }
      catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將使用者加入追蹤'
        })
      }
    },
    async deleteFollowing() {
      try {
        const {data} = await usersAPI.removeFollowing({userId: this.user.id})

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

      this.user.isFollowed = false;

      }
      catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將使用者移除追蹤'
        })
      }
    },
  },
  created() {
    this.fetchUser();
  },
  watch: {
    initialUser() {
      this.fetchUser()
    }
  }
};
</script>
