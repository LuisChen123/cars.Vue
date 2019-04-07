<template>
  <div>
    <div class="top-cotainer">
      <div id="phone">
        <p id="zixunrexian">
          咨询
          <br>热线
        </p>
        <div id="phoneNumber">4000-96877</div>
      </div>
      <div id="searchBar">
        <input type="search" placeholder="请输入关键字">
        <!-- <input type="button" value=""> -->
        <input type="submit" value="">
      </div>
    </div>
    <!-- header结束 -->
    <!-- 导航条开始 -->

    <div class="mainNavBox">
      <ul class="mainNav">
        <li class="mainNavList">
          <router-link class="links" to="/">网站首页</router-link>
        </li>

        <li class="mainNavList">
          <router-link class="links" to="/aboutus">关于我们</router-link>
        </li>

        <li class="mainNavList" id="spNave">
          <router-link class="links" to="/allCarShow">车辆显示</router-link>
          <div class="subNavBox">
            <li class="subNav">
              <router-link class="sub-links" to>热门车型</router-link>
            </li>
            <li class="subNav">
              <router-link class="sub-links" to>豪华车型</router-link>
            </li>
            <li class="subNav">
              <router-link class="sub-links" to>紧凑车型</router-link>
            </li>
            <li class="subNav">
              <router-link class="sub-links" to>推介车型</router-link>
            </li>
          </div>
        </li>

        <li class="mainNavList">
          <router-link class="links" to="/fieldNews">行业资讯</router-link>
        </li>
        <li class="mainNavList">
          <router-link class="links" to>主要车型</router-link>
        </li>
        <li class="mainNavList">
          <router-link class="links" to>资质荣誉</router-link>
        </li>
        <li class="mainNavList">
          <router-link class="links" to>租车须知</router-link>
        </li>
        <li class="mainNavList">
          <router-link class="links" to>人才招聘</router-link>
        </li>
        <li class="mainNavList">
          <router-link class="links" to="/comment">在线留言</router-link>
        </li>
        <li class="mainNavList">
          <router-link class="links" to>联系我们</router-link>
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
      activeIndex: "1",
      activeIndex2: "1",

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
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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
    background-position-y: center;
    float: right;
    right: 301px;

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
    float: right;
    margin-top: 50px;
    margin-right: 50px;
    background-image: url("../children../../../assets/pic/button.png");
    background-repeat: no-repeat;
    background-size: 28px 30px;
    background-position: right 0px;

    input {
      padding-left: 5px;
      border: 1px solid rgb(150, 115, 31);
      color: rgb(150, 115, 31);
      width: 205px;
      height: 30px;
      background-color: transparent;
    }
  }
}

/* 这是导航栏开始 */
.mainNavBox {
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/pic/navbg.jpg");
  background-repeat: repeat-x;
  background-position: center center;
  .mainNav {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    height: 100%;
    .mainNavList {
      height: 110%;
      vertical-align: middle;
      display: flex;
      align-items: center;
      width: 100px;
      justify-content: center;
      margin: 0px 5px;
      .links {
        text-decoration: none;
        color: black;
      }

      .subNavBox {
        display: none;
        position: absolute;
        background-color: rgb(26, 42, 57);
        margin-top: 109px;
        width: 100px;
        text-align: center;
        line-height: 40px;
        z-index: 999;
        .subNav {
          z-index: 9999;
          .sub-links {
            text-decoration: none;
            color: black;
          }
        }
      }
    }
  }
}
.mainNavList:hover {
  background-image: url("../../assets/pic/nav.jpg");
  color: rgb(253, 184, 17);
}

.mainNavList:hover .links{
  color: rgb(253, 184, 17)!important;
}


#spNave:hover .subNavBox {
  display: block;
}

#spNave:hover .subNavBox .subNav .sub-links{
  color: rgb(253, 184, 17);
}


#spNave .subNavBox .subNav:hover .sub-links{
  background-image: unset !important;
  background-color: rgb(253, 184, 17) !important;
  color: black!important;
}
.mainNavBox .mainNav .mainNavList .subNavBox .subNav:hover{
   background-color: rgb(253, 184, 17) !important;
  color: black!important;
}

/* 这是导航栏结束 */

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