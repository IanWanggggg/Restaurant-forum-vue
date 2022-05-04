<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            @click.stop.prevent="createCategory"
            type="button"
            class="btn btn-primary"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              @click="handleCancel(category.id)"
              class="cancel"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              @click.stop.prevent="toggleIsEditing(category.id)"
              type="button"
              class="btn btn-link mr-2"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
              type="button"
              class="btn btn-link mr-2"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import adminAPI from "../api/admin";
import { Toast } from "../utility/helpers";
//  2. 定義暫時使用的資料

export default {
  components: {
    AdminNav,
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories();
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();

        this.categories = data.categories.map(function (category) {
          return {
            ...category,
            isEditing: false,
            nameCached: "",
          };
        });

      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得類別資料",
        });
      }
    },
    async createCategory() {
      try {
        if (!this.newCategoryName.trim()) {
          Toast.fire({
            icon: "warning",
            title: "請輸入類別名稱",
          });
          return;
        } else if (
          this.categories.find((category) =>
              category.name.trim().toLowerCase() === this.newCategoryName.trim().toLowerCase()
          )) {
          Toast.fire({
            icon: "warning",
            title: "此類別已有存在",
          });
          return;
        }

        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName.trim(),
        });

        this.categories.push({
          name: this.newCategoryName,
          id: data.categoryId,
          isEditing: false,
        });

        this.newCategoryName = "";

        if (data.status !== "success") {
          throw new Error(data.message);
        } else {
          Toast.fire({
            icon: "success",
            title: "新增了一筆類別",
          });
        }
        
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法建立類別",
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ categoryId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除類別",
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map(function (category) {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
    async updateCategory({ categoryId, name }) {
      try {
        if (!name.trim()) {
          Toast.fire({
            icon: "warning",
            title: "類別名稱不可留白",
          });
          return;
        } else if (this.categories.find((category) => category.name === name)) {
          Toast.fire({
            icon: "warning",
            title: "已有重複的類別名稱",
          });
          return;
        }

        const { data } = await adminAPI.categories.update({ categoryId, name });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        this.toggleIsEditing(categoryId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新類別名稱",
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,

            // 把原本的餐廳類別名稱還回去
            name: category.nameCached,
          };
        }

        return category;
      });

      this.toggleIsEditing(categoryId);
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>