<template>
  <div>
    <nav-box/>
    <div class="second-container">
      <div class="left-contianer">
        <div class="left-top-box-container">
          <div class="topLeft">车辆展示</div>
          <ul>
            <li>
              <a href>>热门车型</a>
            </li>
            <li>
              <a href>>豪华车型</a>
            </li>
            <li>
              <a href>>紧凑车型</a>
            </li>
            <li>
              <a href>>推荐车型</a>
            </li>
          </ul>
          <div class="whiteBox"></div>
        </div>
        <left-Bottom-Box/>
      </div>
      <div class="right-contianer">
        <title-Path titleName="车辆展示" pathName="车辆展示"/>
        <router-view></router-view>
        <div class="page">
          <li>
            <router-link to="/allCarShow/firstCarPage">首页</router-link>
          </li>
          <li>
            <router-link to="/allCarShow/firstCarPage">上一页</router-link>
          </li>
          <li>
            <router-link to="/allCarShow/firstCarPage">1</router-link>
          </li>
          <li>
            <router-link to="/allCarShow/secondCarPage">2</router-link>
          </li>
          <li>
            <router-link to="/allCarShow/secondCarPage">下一页</router-link>
          </li>
        </div>
      </div>
    </div>
    <footer-box/>
  </div>
</template>

<script>
import nav from "./children/nav";
import footer from "./children/footer";
import leftBottomBox from "./children/leftBottomBox";
import titlePath from "./children/titlePath";

export default {
  name: "allCarShow",
  data() {
    return {
      titleName: "",
      titleDE: "",
      pathName: "",
      list: [
        {
          id: 0,
          title: "路虎揽胜",
          url: require("../assets/pic/1-160S0215T50-L.jpg")
        },
        {
          id: 1,
          title: "宝马",
          url: require("../assets/pic/1-160S0215Z40-L.jpg")
        },
        {
          id: 2,
          title: "奔驰",
          url: require("../assets/pic/1-160S02154010-L.jpg")
        },
        {
          id: 3,
          title: "载重车",
          url: require("../assets/pic/1-160S0215T50-L.jpg")
        },
        {
          id: 4,
          title: "轻卡",
          url: require("../assets/pic/1-160S02159230-L.jpg")
        },
        {
          id: 5,
          title: "轻卡",
          url: require("../assets/pic/1-160S0215T50-L.jpg")
        },
        {
          id: 6,
          title: "公路客车",
          url: require("../assets/pic/1-160S0215T50-L.jpg")
        },
        {
          id: 7,
          title: "城市客车",
          url: require("../assets/pic/1-160S0215T50-L.jpg")
        },
        {
          id: 8,
          title: "轻型客车",
          url: require("../assets/pic/1-160S02154010-L.jpg")
        }
      ]
    };
  },
  created() {},
  methods: {},
  components: {
    "nav-box": nav,
    "footer-box": footer,
    "left-Bottom-Box": leftBottomBox,
    "title-Path": titlePath
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.second-container {
  display: flex;
  justify-content: center;
  .left-contianer {
    width: 200px;
    display: flex;
    flex-direction: column;
    .left-top-box-container {
      background-color: rgb(26, 42, 57);
      .topLeft {
        background-image: url("../assets/pic/case.png");
        height: 62px;
        background-position-y: bottom;
        height: 62px;
        background-position-y: bottom;
        font-size: 20px;
        text-align: center;
        vertical-align: middle;
        font-weight: bold;
        padding-top: 20px;
      }
      ul {
        margin: 23px 10px 10px 10px;
        line-height: 46px;
        font-size: 15px;
        text-indent: 20px;
        height: 220px;
        li {
          border-bottom: 1px solid rgb(155, 173, 189);
          a {
            text-decoration: none;
            color: rgb(155, 173, 189);
          }
        }
      }
      .whiteBox {
        height: 40px;
        background-color: white;
      }
    }
  }
  .right-contianer {
    width: 1000px;

    .page {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 30px;
      li {
        background-color: gray;
        border: 7px solid gray;
        font-size: 20px;
        color: white;
        list-style: none;
        margin-right: 10px;
        width: 60px;
        text-align: center;
        a {
          font-size: 10px;
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}
</style>