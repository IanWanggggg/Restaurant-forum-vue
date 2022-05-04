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
          v-model="user.profile.name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.profile.image"
          :src="user.profile.image"
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

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$15QlzrLsEi9vBujiAQckgOuH/gEZjE9jrFc3VUhlfu7FrikYl2qPC",
    isAdmin: true,
    image: null,
    createdAt: "2022-04-19T07:27:20.000Z",
    updatedAt: "2022-04-19T07:27:20.000Z",
    Comments: [
      {
        id: 3,
        text: "Tenetur quia quia.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 3,
          name: "Roel Fisher",
          tel: "584-659-6697 x14675",
          address: "6460 Kling Crest",
          opening_hours: "08:00",
          description:
            "Voluptatem ipsa sapiente animi iste ut. Sint sit quis in magni nobis enim adipisci. Ullam nihil quos rem dolorum totam rerum. Mollitia nihil quis dolor aut ea in rerum ullam laborum. Sunt pariatur illo esse in. Dicta dolorem minus nostrum cum quos quidem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=87.54101763467872",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 10,
        text: "Quam id odit porro et quo error voluptas minus saepe.",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 10,
          name: "Orland Hyatt",
          tel: "119.092.1097 x528",
          address: "65656 Declan Manor",
          opening_hours: "08:00",
          description: "Deserunt fuga quaerat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=69.19395399804678",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 12,
        text: "Ea architecto laudantium atque exercitationem veniam et.",
        UserId: 1,
        RestaurantId: 12,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 12,
          name: "Shea Wilderman",
          tel: "216.366.3177",
          address: "4330 Marvin Lock",
          opening_hours: "08:00",
          description:
            "Blanditiis officiis quod culpa possimus illum voluptas in.\nEnim pariatur facere consequatur.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=47.85040397258784",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 14,
        text: "Dolorem nulla deserunt qui sit.",
        UserId: 1,
        RestaurantId: 14,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 14,
          name: "Adan Hane",
          tel: "1-060-158-1613",
          address: "831 McGlynn Gateway",
          opening_hours: "08:00",
          description:
            "Adipisci perferendis eum.\nEst vel atque ea fugiat ad sit et eum.\nQui aliquam delectus quo cupiditate.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=79.48528577668475",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 15,
        text: "Quia alias aspernatur eos.",
        UserId: 1,
        RestaurantId: 15,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 15,
          name: "Julie Hagenes",
          tel: "(764) 157-5076 x62912",
          address: "67006 Yundt Key",
          opening_hours: "08:00",
          description:
            "Est quibusdam quisquam. Maiores totam officia doloribus facilis suscipit ad aut. Odit in soluta eligendi recusandae vel et fugiat. Totam corporis velit et officia quibusdam. Molestiae ipsa quo consequatur perspiciatis voluptas officia corrupti harum esse. Perferendis laborum voluptate in.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=89.44042728145278",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 16,
        text: "Sit sed asperiores doloremque aut.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 16,
          name: "Edward Balistreri",
          tel: "1-987-972-1612",
          address: "3083 Jonathon Trail",
          opening_hours: "08:00",
          description: "ab",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=9.88059747227461",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 17,
        text: "Non eaque magnam aut explicabo ut quia consectetur dolorum quod.",
        UserId: 1,
        RestaurantId: 17,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 17,
          name: "Julius Thiel",
          tel: "(673) 399-7994 x300",
          address: "256 Hagenes Ridge",
          opening_hours: "08:00",
          description:
            "Voluptatem ad sint hic doloribus. Ratione sequi molestiae sed illum consequatur culpa. Cum architecto praesentium vel eos similique amet. Labore dolor possimus aut rerum perferendis. Sunt dolorem et blanditiis modi non voluptas ipsa totam accusamus. Voluptas quibusdam in dicta animi quo deserunt quas nobis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=98.36778928552063",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 19,
        text: "Id quod et dolor eveniet ea pariatur sunt sint.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 19,
          name: "Aidan Rutherford",
          tel: "512.085.3971 x5420",
          address: "57075 Koepp Tunnel",
          opening_hours: "08:00",
          description: "Doloribus aperiam fugiat et omnis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=20.89307199759538",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 21,
        text: "Illum qui et.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 21,
          name: "Mikel Hamill",
          tel: "189-487-3037 x9085",
          address: "078 Gislason Springs",
          opening_hours: "08:00",
          description: "sed dolor sed",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=75.18093276334923",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 22,
        text: "Et cupiditate qui minima repudiandae magni aliquam rerum autem tenetur.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 22,
          name: "Zane Kuvalis II",
          tel: "182-821-5311 x5200",
          address: "95256 Veum Forest",
          opening_hours: "08:00",
          description:
            "Asperiores beatae ut praesentium repellat iure pariatur quidem. Eligendi ex error magni. Praesentium vitae at debitis fuga iure temporibus. Et debitis quibusdam ratione eligendi aperiam ipsa eveniet. Suscipit enim voluptatem fugiat aut nostrum facilis alias.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.95077628499773",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 25,
        text: "Non aperiam repellat.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 25,
          name: "Ms. Jalyn Hagenes",
          tel: "(362) 520-2271 x212",
          address: "4244 Carmine Heights",
          opening_hours: "08:00",
          description:
            "Nulla reprehenderit nisi veritatis doloremque et dolores facere. Laborum possimus velit sapiente culpa ad ipsam minima vel nostrum. Voluptatem impedit error provident sit quasi eius dolores. Voluptas ducimus sequi. Animi doloremque placeat ducimus et magnam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=35.49332615550838",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 29,
        text: "Vitae porro repellat quidem consequatur iste et eveniet nobis ut.",
        UserId: 1,
        RestaurantId: 29,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 29,
          name: "Hettie Mraz",
          tel: "890.361.9155",
          address: "20042 Gulgowski Mills",
          opening_hours: "08:00",
          description:
            "Et repellendus quisquam assumenda impedit pariatur blanditiis maiores enim.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=84.77283309555794",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 38,
        text: "Eum facilis autem atque architecto eos enim odit.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 38,
          name: "Demetrius Herman",
          tel: "456-563-3147 x53513",
          address: "371 Maximillia Lights",
          opening_hours: "08:00",
          description:
            "Nisi nesciunt sint. Tenetur fugiat explicabo et. Atque eaque minus porro vel autem. Eum at aut quo impedit ipsa sapiente et saepe. Nobis qui tempore expedita aut quasi architecto quisquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=4.243572056883305",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 43,
        text: "Ut officiis repudiandae error.",
        UserId: 1,
        RestaurantId: 43,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 43,
          name: "Constance Barton IV",
          tel: "861.824.6551 x18975",
          address: "129 Corene Ramp",
          opening_hours: "08:00",
          description:
            "Quos eos minima non quaerat laborum et quisquam fuga adipisci. Velit exercitationem repellendus.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=4.188854371170669",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 44,
        text: "Dolore nam fugit.",
        UserId: 1,
        RestaurantId: 44,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 44,
          name: "Ally Roberts",
          tel: "026.900.7315 x0102",
          address: "6049 Mosciski Point",
          opening_hours: "08:00",
          description: "dolores",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=11.035785418244327",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 47,
        text: "Id et quibusdam illo corporis numquam cum numquam libero.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 47,
          name: "Adelle Koepp",
          tel: "348-454-1693 x3140",
          address: "2256 Hayes Roads",
          opening_hours: "08:00",
          description:
            "Quasi quas animi odit eum tenetur ut accusamus maxime sit.\nDolorum magnam et corrupti nesciunt doloremque qui quibusdam enim voluptatem.\nIste similique qui.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=74.60455711293822",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 48,
        text: "Nihil a cupiditate harum voluptas animi.",
        UserId: 1,
        RestaurantId: 48,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 48,
          name: "Brisa Cassin",
          tel: "1-321-608-2411 x766",
          address: "4846 Carter Spur",
          opening_hours: "08:00",
          description:
            "Laboriosam dolorem cum quas quo quis officia expedita ipsam ut. Doloremque est quis alias cupiditate. Eos qui totam qui. Officia sunt reiciendis doloribus recusandae nemo dolorem dicta aut nesciunt. Cum tempore autem fugiat nulla veniam dignissimos minima at.\n \rAut aut perferendis eius alias expedita qui. Eius facere atque modi officia rem autem. Non quod non. Consequatur praesentium qui est eos maxime est repellat dolorem molestias. Fugiat temporibus cupiditate ut amet et ut.\n \rAutem similique explicabo. Eveniet enim quia impedit voluptatum velit. Reprehenderit blanditiis voluptatem rem dicta necessitatibus corrupti nam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=70.81345638114573",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 50,
        text: "Qui commodi id laborum temporibus eius accusantium amet.",
        UserId: 1,
        RestaurantId: 50,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 50,
          name: "Juliana Mayert Sr.",
          tel: "1-455-336-5577",
          address: "8703 Reynolds Landing",
          opening_hours: "08:00",
          description:
            "Et dolor sit iusto illum nihil sit est ut. Enim doloribus sunt voluptatibus voluptas qui eius qui. Recusandae iste accusantium laborum.\n \rIpsa exercitationem eligendi consequuntur qui. Consectetur dolore sed nulla magnam autem. Non et rerum. Aspernatur tenetur vel facilis non facere et nesciunt. Laudantium corrupti alias accusantium odit omnis dicta autem.\n \rOmnis id sequi repellendus ullam. Autem velit voluptate. Enim quam officiis debitis quis consequatur aperiam enim est illum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.691034065529145",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 63,
        text: "Ea provident voluptatibus incidunt illo delectus consequatur.",
        UserId: 1,
        RestaurantId: 13,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 13,
          name: "Brianne Trantow",
          tel: "528.017.3484",
          address: "87932 Herman Glens",
          opening_hours: "08:00",
          description: "qui",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=70.3648365462854",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 66,
        text: "Unde qui explicabo dolor velit autem quo.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 16,
          name: "Edward Balistreri",
          tel: "1-987-972-1612",
          address: "3083 Jonathon Trail",
          opening_hours: "08:00",
          description: "ab",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=9.88059747227461",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 68,
        text: "Quidem non enim cupiditate maxime autem et nam beatae.",
        UserId: 1,
        RestaurantId: 18,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 18,
          name: "Dr. Vena Bednar",
          tel: "1-576-374-7056 x0552",
          address: "6795 Doyle Trail",
          opening_hours: "08:00",
          description: "Ut natus in dolorum eius a et maxime quisquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=73.58182925363721",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 70,
        text: "Natus ipsum et omnis.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 20,
          name: "Winfield Upton",
          tel: "(613) 565-0609",
          address: "52826 Reynolds Court",
          opening_hours: "08:00",
          description: "reprehenderit",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=26.392320773047206",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 71,
        text: "Ut reprehenderit aut voluptatum earum est quia harum necessitatibus voluptas.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 21,
          name: "Mikel Hamill",
          tel: "189-487-3037 x9085",
          address: "078 Gislason Springs",
          opening_hours: "08:00",
          description: "sed dolor sed",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=75.18093276334923",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 81,
        text: "Et quia quo est dolores sunt tempore corrupti.",
        UserId: 1,
        RestaurantId: 31,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 31,
          name: "Erica Johnston",
          tel: "414.819.4163",
          address: "66263 Willms Ferry",
          opening_hours: "08:00",
          description: "A quia eaque.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=36.54718863039705",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 88,
        text: "Est occaecati sed laudantium perferendis.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 38,
          name: "Demetrius Herman",
          tel: "456-563-3147 x53513",
          address: "371 Maximillia Lights",
          opening_hours: "08:00",
          description:
            "Nisi nesciunt sint. Tenetur fugiat explicabo et. Atque eaque minus porro vel autem. Eum at aut quo impedit ipsa sapiente et saepe. Nobis qui tempore expedita aut quasi architecto quisquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=4.243572056883305",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 90,
        text: "Deserunt dolor doloribus sequi sint itaque eum.",
        UserId: 1,
        RestaurantId: 40,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 40,
          name: "Angela Wilkinson",
          tel: "(259) 349-1347 x1778",
          address: "88031 Rosenbaum Brooks",
          opening_hours: "08:00",
          description:
            "Blanditiis harum deleniti accusantium sequi. Dolore qui dolores deleniti pariatur suscipit. Aperiam accusantium alias.\n \rDolores omnis veritatis ipsum autem aut officia deserunt. Ut qui deleniti ea. Dicta et quis quo est praesentium iste doloremque praesentium. Sunt hic ab. Quis eum nemo et facere.\n \rOdit architecto magni error. Vel sint veritatis. Assumenda fuga fuga corrupti illo corrupti iure. Dolor assumenda adipisci voluptatem nisi velit rerum in. Sit omnis ut numquam cupiditate sit. Illo ut facilis ullam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=31.70107249034335",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 91,
        text: "Quos nam est voluptatum iusto excepturi voluptatem.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 41,
          name: "Issac Pagac",
          tel: "436.839.4215 x1053",
          address: "467 Mertz Avenue",
          opening_hours: "08:00",
          description:
            "Aut saepe sit laborum id enim ipsam et. Nisi nam impedit. Eveniet sed explicabo reprehenderit est velit. Maiores quo autem praesentium consequatur et repudiandae et rerum. Debitis voluptatem rem neque amet maiores ea temporibus dignissimos perspiciatis. Est nobis in ipsum nobis voluptatem quo.\n \rSimilique quia error sequi. Odit molestias qui. Voluptas aspernatur fuga qui repellendus ullam provident laborum.\n \rAut et consequatur saepe mollitia deserunt. Voluptatem iusto voluptatum eum ipsa sunt accusantium. Laboriosam dicta voluptates in quaerat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=43.944407776535144",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 95,
        text: "Consequatur et quasi dolorem dolores velit id.",
        UserId: 1,
        RestaurantId: 45,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 45,
          name: "Crawford Kshlerin",
          tel: "(879) 933-7773 x8519",
          address: "80658 Balistreri Canyon",
          opening_hours: "08:00",
          description:
            "Error molestias sapiente quo ut repudiandae nihil omnis voluptates ab. Blanditiis placeat tempora repudiandae repellendus dolor optio et. Veniam et assumenda quis voluptates.\n \rRepellendus aut alias est quam et veritatis est dolores commodi. Nulla sed ut temporibus explicabo ea quia illum excepturi. Quis sequi mollitia similique asperiores exercitationem et.\n \rCulpa enim consequatur. A omnis numquam molestiae possimus magnam blanditiis quam perspiciatis non. Enim magnam eos ea beatae autem esse.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=94.1300588253989",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 99,
        text: "Amet natus consequatur eaque cupiditate ipsam quibusdam ducimus.",
        UserId: 1,
        RestaurantId: 49,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 49,
          name: "Raleigh Feest DVM",
          tel: "418-629-1486 x804",
          address: "9842 Mills Mountains",
          opening_hours: "08:00",
          description:
            "Animi fugiat sint. In provident rerum et quia repellendus nulla consequuntur. Soluta asperiores ipsam illo omnis reprehenderit. Fuga beatae minus ipsa voluptate similique similique illum. Consequatur dolorum soluta. Autem earum et consequatur natus omnis quisquam assumenda qui quo.\n \rSed ut esse earum doloremque sunt dignissimos error. Omnis pariatur laudantium iusto libero illum odio ea fugit provident. Sapiente voluptatem distinctio dolorum nesciunt vel ducimus.\n \rAliquam doloremque impedit tempore vel corporis voluptatum quia sapiente tenetur. Modi cumque totam pariatur asperiores quia perspiciatis et molestiae. Animi et quia rerum eum. Facilis quis in. Rerum assumenda quia id. Deleniti voluptatem mollitia voluptatem non corporis recusandae.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=88.88326946802097",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 103,
        text: "Soluta corporis quo placeat necessitatibus vero.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 3,
          name: "Roel Fisher",
          tel: "584-659-6697 x14675",
          address: "6460 Kling Crest",
          opening_hours: "08:00",
          description:
            "Voluptatem ipsa sapiente animi iste ut. Sint sit quis in magni nobis enim adipisci. Ullam nihil quos rem dolorum totam rerum. Mollitia nihil quis dolor aut ea in rerum ullam laborum. Sunt pariatur illo esse in. Dicta dolorem minus nostrum cum quos quidem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=87.54101763467872",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 115,
        text: "Voluptatem rerum ab qui expedita.",
        UserId: 1,
        RestaurantId: 15,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 15,
          name: "Julie Hagenes",
          tel: "(764) 157-5076 x62912",
          address: "67006 Yundt Key",
          opening_hours: "08:00",
          description:
            "Est quibusdam quisquam. Maiores totam officia doloribus facilis suscipit ad aut. Odit in soluta eligendi recusandae vel et fugiat. Totam corporis velit et officia quibusdam. Molestiae ipsa quo consequatur perspiciatis voluptas officia corrupti harum esse. Perferendis laborum voluptate in.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=89.44042728145278",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 116,
        text: "Voluptatem necessitatibus debitis omnis aperiam eos eum.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 16,
          name: "Edward Balistreri",
          tel: "1-987-972-1612",
          address: "3083 Jonathon Trail",
          opening_hours: "08:00",
          description: "ab",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=9.88059747227461",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 117,
        text: "Omnis omnis velit labore.",
        UserId: 1,
        RestaurantId: 17,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 17,
          name: "Julius Thiel",
          tel: "(673) 399-7994 x300",
          address: "256 Hagenes Ridge",
          opening_hours: "08:00",
          description:
            "Voluptatem ad sint hic doloribus. Ratione sequi molestiae sed illum consequatur culpa. Cum architecto praesentium vel eos similique amet. Labore dolor possimus aut rerum perferendis. Sunt dolorem et blanditiis modi non voluptas ipsa totam accusamus. Voluptas quibusdam in dicta animi quo deserunt quas nobis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=98.36778928552063",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 121,
        text: "Illo iusto ad facere labore ullam.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 21,
          name: "Mikel Hamill",
          tel: "189-487-3037 x9085",
          address: "078 Gislason Springs",
          opening_hours: "08:00",
          description: "sed dolor sed",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=75.18093276334923",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 124,
        text: "Aliquam soluta nostrum consequatur aperiam sit nemo eveniet officiis.",
        UserId: 1,
        RestaurantId: 24,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 24,
          name: "Donald Casper",
          tel: "(798) 726-1515 x262",
          address: "62996 Gussie Court",
          opening_hours: "08:00",
          description:
            "Occaecati et voluptas sit qui accusamus quasi rerum.\nSed iusto incidunt iure quia et cum vel.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=2.0978335841573603",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 125,
        text: "Vero ullam aut in dignissimos et minima quibusdam velit.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 25,
          name: "Ms. Jalyn Hagenes",
          tel: "(362) 520-2271 x212",
          address: "4244 Carmine Heights",
          opening_hours: "08:00",
          description:
            "Nulla reprehenderit nisi veritatis doloremque et dolores facere. Laborum possimus velit sapiente culpa ad ipsam minima vel nostrum. Voluptatem impedit error provident sit quasi eius dolores. Voluptas ducimus sequi. Animi doloremque placeat ducimus et magnam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=35.49332615550838",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 132,
        text: "Aut aut vel et enim cum voluptas exercitationem.",
        UserId: 1,
        RestaurantId: 32,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 32,
          name: "Paige Bartoletti MD",
          tel: "1-275-251-8396",
          address: "3828 Andy Track",
          opening_hours: "08:00",
          description: "nulla tempora labore",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=63.47184319905406",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 135,
        text: "Accusantium temporibus dicta nesciunt optio.",
        UserId: 1,
        RestaurantId: 35,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 35,
          name: "Katrina Nitzsche",
          tel: "1-337-664-1573",
          address: "9575 Hessel Village",
          opening_hours: "08:00",
          description:
            "Facere non et aut odio molestiae. Reiciendis est quaerat aliquam. Nobis inventore itaque voluptas. Autem qui officiis rerum rerum ex. Labore expedita similique eveniet est.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=12.460830155965708",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 136,
        text: "Quas eos molestias magnam.",
        UserId: 1,
        RestaurantId: 36,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 36,
          name: "Julien Dicki",
          tel: "630.579.6710",
          address: "95262 Wilfrid Meadows",
          opening_hours: "08:00",
          description: "optio enim libero",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=63.02288814801334",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 138,
        text: "Voluptates debitis quasi voluptatum est tempore est est est.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 38,
          name: "Demetrius Herman",
          tel: "456-563-3147 x53513",
          address: "371 Maximillia Lights",
          opening_hours: "08:00",
          description:
            "Nisi nesciunt sint. Tenetur fugiat explicabo et. Atque eaque minus porro vel autem. Eum at aut quo impedit ipsa sapiente et saepe. Nobis qui tempore expedita aut quasi architecto quisquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=4.243572056883305",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 140,
        text: "Quam nam possimus ea.",
        UserId: 1,
        RestaurantId: 40,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 40,
          name: "Angela Wilkinson",
          tel: "(259) 349-1347 x1778",
          address: "88031 Rosenbaum Brooks",
          opening_hours: "08:00",
          description:
            "Blanditiis harum deleniti accusantium sequi. Dolore qui dolores deleniti pariatur suscipit. Aperiam accusantium alias.\n \rDolores omnis veritatis ipsum autem aut officia deserunt. Ut qui deleniti ea. Dicta et quis quo est praesentium iste doloremque praesentium. Sunt hic ab. Quis eum nemo et facere.\n \rOdit architecto magni error. Vel sint veritatis. Assumenda fuga fuga corrupti illo corrupti iure. Dolor assumenda adipisci voluptatem nisi velit rerum in. Sit omnis ut numquam cupiditate sit. Illo ut facilis ullam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=31.70107249034335",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 146,
        text: "Libero ullam quia enim eum enim.",
        UserId: 1,
        RestaurantId: 46,
        createdAt: "2022-04-19T07:27:20.000Z",
        updatedAt: "2022-04-19T07:27:20.000Z",
        Restaurant: {
          id: 46,
          name: "Miss Joey Wisozk",
          tel: "176-679-2190",
          address: "954 Diego Manor",
          opening_hours: "08:00",
          description:
            "Eveniet voluptas delectus omnis quae architecto asperiores rem ad ducimus. Placeat ut consectetur et suscipit velit. Fugiat modi odit perspiciatis odio aliquid. Molestiae rem accusantium eaque consequuntur illum. Ipsa ex laudantium corrupti expedita est optio.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.57950680455382",
          viewCounts: 0,
          createdAt: "2022-04-19T07:27:20.000Z",
          updatedAt: "2022-04-19T07:27:20.000Z",
          CategoryId: 1,
        },
      },
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [],
  },
  isFollowed: false,
};

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    fetchUser() {
      this.user = dummyUser;
    },
    handleFileChange(e) {
      const {files} = e.target
      if(files.length === 0){
        this.user.profile.image = ""
        return
      }else{
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.profile.image = imageURL
      }
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      console.log('submit data',formData)
    }
  },
  created() {
    this.fetchUser();
  },
};
</script>