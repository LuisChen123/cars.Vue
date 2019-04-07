<template>
  <div>
    <div class="carTable">
      <router-link
        v-for="item in list"
        :key="item.id"
        :to="'allCarShow/CarDetail/'+ item.id"
        tag="li"
      >
        <div class="info">
          <img class="tableImg" v-bind:src="item.url" alt="asdasd">
          <p class="info-title">{{ item.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
s
<script>
export default {
  name: "firstCarPage",
  data() {
    return {
      list: [
        {
          id: 0,
          title: "路虎揽胜",
          url: require("../../../assets/pic/1-160S02154010-L.jpg")
        },
        {
          id: 1,
          title: "宝马",
          url: require("../../../assets/pic/1-160S0215Z40-L.jpg")
        },
        {
          id: 2,
          title: "奔驰",
          url: require("../../../assets/pic/1-160S02154010-L.jpg")
        },
        {
          id: 3,
          title: "载重车",
          url: require("../../../assets/pic/1-160S0215T50-L.jpg")
        },
        {
          id: 4,
          title: "轻卡",
          url: require("../../../assets/pic/1-160S02159230-L.jpg")
        },
        {
          id: 5,
          title: "轻卡",
          url: require("../../../assets/pic/1-160S0215T50-L.jpg")
        },
        {
          id: 6,
          title: "公路客车",
          url: require("../../../assets/pic/1-160S0215T50-L.jpg")
        },
        {
          id: 7,
          title: "城市客车",
          url: require("../../../assets/pic/1-160S0215T50-L.jpg")
        },
        {
          id: 8,
          title: "轻型客车",
          url: require("../../../assets/pic/1-160S02154010-L.jpg")
        }
      ]
    };
  },
  components: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.carTable {
  display: flex;
  flex-wrap: wrap;
  border-top: 2px solid;
  margin-top: 1px;
  margin-left: 49px;

  li {
    list-style: none;
    margin: 10px 27px 10px 0px;

    .info {
      text-align: center;
      font-size: 33px;
      background-color: rgb(253, 184, 17);
      .tableImg {
      }
      .info-title {
        height: 40px;
        padding-top: 9px;
        font-size: 15px;
      }
    }
  }
}
</style>s