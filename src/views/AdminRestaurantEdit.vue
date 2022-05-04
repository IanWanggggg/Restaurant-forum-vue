<template>
  <div class="container py-5">
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :initialRestaurant="restaurant"
      :isProcessing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from '../api/admin'
import {Toast} from '../utility/helpers'


export default {
  components: {
    AdminRestaurantForm,
  },
  methods: {
    async handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      try {
        this.isProcessing = true
        const {data} = await adminAPI.restaurants.update({restaurantId:this.restaurant.id, formData})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({name: 'admin-restaurants'})
      }
      catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        const {data} = await adminAPI.restaurants.getDetail({restaurantId})

        // STEP 3: 透過解構賦值將需要的資料取出
        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId
        } = data.restaurant

        // STEP 4: 將資料帶入 Vue 內
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId
        }
      }
      catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, from, next) {
    const {id} = to.params
    this.fetchRestaurant(id)
    next()
  }
};
</script>