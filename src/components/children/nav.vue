<template>
  <div>
    <div class="top-cotainer">
      <div id="phone">
        <p id="zixunrexian">咨询
          <br>热线
        </p>
        <div id="phoneNumber">4000-96877</div>
      </div>
      <div id="searchBar">
        <input type="search" placeholder="请输入关键字">
      </div>
    </div>
    <!-- header结束 -->
    <!-- 导航条开始 -->
    <div id="sunav" class="nav">
      <ul>
        <li class="navList">
         <router-link to="/">网站首页</router-link>
        </li>
        <li class="navList">
          <router-link to="/aboutus">关于我们</router-link>
        </li>
        <li class="sunav navList">
          <router-link to="/allCarShow">车辆展示</router-link>
          <span>
            <ul>
              <li>
                <a href="#">热门车型</a>
              </li>
              <li>
                <a href="#">豪华车型</a>
              </li>
              <li>
                <a href="#">紧凑车型</a>
              </li>
              <li>
                <a href="#">推荐车型</a>
              </li>
            </ul>
          </span>
        </li>
        <li class="navList">
          <router-link to="/fieldNews">行业资讯</router-link>
        </li>
        <li class="navList">
          <a>主要车型</a>
        </li>
        <li class="navList">
          <a>资质荣誉</a>
        </li>
        <li class="navList">
          <a>租车须知</a>
        </li>
        <li class="navList">
          <a>人才招聘</a>
        </li>
        <li class="navList">
          <router-link to="/comment">在线留言</router-link>
        </li>
        <li class="navList">
          <a>联系我们</a>
        </li>
      </ul>
    </div>
    
    <!-- 导航条结束 -->
    <!-- swipe开始 -->
    <div class="swipe" scoped>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <a href>
            <img src="../children../../../assets/pic/banner.jpg" alt="firstImage">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href>
            <img src="../children../../../assets/pic/banner.jpg" alt="secImage">
          </a>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <!-- swipe结束 -->
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
export default {
  name: "home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function() {
            //console.log(this.activeIndex);切换结束时，告诉我现在是第几个slide
          }
        },
        //左右点击
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "custom",
          //自定义分页器样式
          renderCustom: function(swiper, current, total) {
            const activeColor = "#168fed";
            const normalColor = "#aeaeae";
            let color = "";
            let paginationStyle = "";
            let html = "";
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor;
              } else {
                color = normalColor;
              }
              paginationStyle = `background:${color};opacity:1;margin-right:20px;width:20px;height:20px;transform:skew(15deg);border-radius:0;`;
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`;

              
            }
            return html;
          }
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss">
.top-cotainer {
  background-color: rgb(10, 22, 34);
  background-image: url("../children../../../assets/pic/logo.png");
  height: 115px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: left 464px bottom 39px;
  #phone {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 246px;
    height: 50px;
    background-image: url("../children../../../assets/pic/telt.png");
    background-repeat: no-repeat;
    margin-left: 1257px;
    background-position-y: center;

    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    color: rgb(252, 255, 255);
    text-align: start;
    #zixunrexian {
      height: 30px;
      font-size: 15px;
      line-height: 14px;
      margin: 0px;
    }
  }
  #phoneNumber {
    font-size: 30px;
    font-weight: bolder;
  }
  #searchBar {
    display: flex;
    justify-content: space-between;
    width: 205px;
    height: 30px;
    margin-top: 6px;
    margin-left: 1257px;
    background-image: url("../children../../../assets/pic/button.png");
    background-repeat: no-repeat;
    background-size: 41px 30px;
    background-position: right 0px;

    input {
      border: 1px solid rgb(150, 115, 31);
      color: rgb(150, 115, 31);
      width: 205px;
      height: 30px;
      background-color: transparent;
    }
  }
}

.nav {
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 68px;
  background: url(../children../../../assets/pic/navbg.jpg) left top repeat-x;
  ul {
    height: 80px;
    align-items: middle;

    li {
      float: left;
      list-style-type: none;
      width: 100px;
      line-height: 68px;
      text-align: center;

      a {
        text-decoration: none;
        display: block;
        color: black;
        width: 100px;
        line-height: 68px;
      }
      span {
        display: none;
        text-decoration: none;
        position: absolute;
        width: 80px;
      }
    }
    .navList :hover {
      color: rgb(255, 189, 22);
      background: url(../children../../../assets/pic/nav.jpg);
    }

    .navList:hover span ul li a {
      background-color: rgb(26, 42, 57);
      color: rgb(255, 189, 22);
    }
  }
}

.nav ul li a:hover {
  background-color: rgb(26, 42, 57);
}

.nav ul li:hover span {
  display: block;
  text-decoration: none;
  z-index: 999;
}

.swipe {
  width: 100%;
  height: 480px;
  a {
    display: block;
    text-align: center;
  }
  .swiper-button-prev {
    background-image: url(../children../../../assets/pic/hover_left.png);
  }
  .swiper-button-next {
    background-image: url(../children../../../assets/pic/hover_right.png);
  }
}
</style>