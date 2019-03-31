<template>
  <div class="fisrt-cotainer">
    <side-box/>
    <nav-box/>
    <!-- 这是网页顶部的nav组件，包括顶部标题，导航栏，轮播图 -->
    <!-- 下面是home部分的开始 -->
    <div class="second-container">
      <div class="caseBox">
        <h3 class="mainTitle">主要车型</h3>
        <h4 class="secondTitle">MAIN MODELS</h4>
        <div class="body">
          大众宝来、马自达、华晨宝马、奥迪Q7、奥迪Q5、
          速腾迈腾、别克商务、吉利汽车、
          奔驰、凯迪拉克大众宝来、马自达、华晨宝马、奥迪Q7、奥迪Q5、
          速腾迈腾、别克商务、吉利汽车、
          奔驰、凯迪拉克大众宝来、马自达、华晨宝马、奥迪Q7、奥迪Q5、
          速腾迈腾、别克商务、吉利汽车、
          奔驰、凯迪拉克大众宝来、马自达、华晨宝马、奥迪Q7、奥迪Q5、
          速腾迈腾、别克商务、吉利汽车、
          奔驰、凯迪拉克
        </div>
        <a href>查看更多</a>
      </div>
      <div class="alignBox">
        <div class="noticeBox">
          <p class="notice">最新公告:</p>

          <transition>
            <div class="messageBox" @mouseenter="letStop" @mouseleave="LetStart">{{ msg }}</div>
          </transition>
          <!-- @mouseenter是鼠标进入该元素后启动     @mouseleave是鼠标离开该元素后执行   他们是对立存在  而且不会触发冒泡事件 -->
        </div>
        <div class="picBox">
          <ul class="picList">
            <a href alt class="picLink">
              <li>
                <div>
                  <img src="../assets/pic/1-160S0215T50-L.jpg" alt>
                  <p>
                    汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰\
                    达汉兰达汉兰达汉兰达汉兰达汉兰达
                  </p>
                </div>
              </li>
            </a>
            <a href alt class="picLink">
              <li>
                <div>
                  <img src="../assets/pic/1-160S0215T50-L.jpg" alt>
                  <p>
                    汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰\
                    达汉兰达汉兰达汉兰达汉兰达汉兰达
                  </p>
                </div>
              </li>
            </a>
            <a href alt class="picLink">
              <li>
                <div>
                  <img src="../assets/pic/1-160S0215T50-L.jpg" alt>
                  <p>
                    汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰达汉兰\
                    达汉兰达汉兰达汉兰达汉兰达汉兰达
                  </p>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <div class="third-container">
      <div class="text-container">
        <h3 class="mainTitle">车辆展示</h3>
        <br>
        <h5 class="smallTitle">VEHICLES SHOW</h5>
      </div>
      <br>

      <!-- 这是小型swiper的开始 -->

      <div class="swipe-Contianer">
        <div class="innerBox">
          <div class="preButton" @click="preList"></div>
          <transition mode="out-in">
            <!-- 加入动画，使用transtion包裹元素 -->

            <ul :class="[isActive?'switchPanel':'nextSwitchPanel']">
              <li class="picList">
                <div class="darkGlass"></div>
                <img src="../assets/pic/1-160S0215T50-L.jpg" alt>
                <p>路虎哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森</p>
              </li>
              <li class="picList">
                <div class="darkGlass"></div>
                <img src="../assets/pic/1-160S02154010-L.jpg" alt>
                <p>奇瑞qq</p>
              </li>
              <li class="picList">
                <div class="darkGlass"></div>
                <img src="../assets/pic/1-160S02154010-L.jpg" alt>
                <p>五菱宏光</p>
              </li>
              <li class="picList">
                <div class="darkGlass"></div>
                <img src="../assets/pic/1-160S02154010-L.jpg" alt>
                <p>奔驰迈巴赫</p>
              </li>
              <li class="picList">
                <div class="darkGlass"></div>
                <img src="../assets/pic/1-160S02154010-L.jpg" alt>
                <p>兰博基尼</p>
              </li>
              <li class="picList">
                <div class="darkGlass"></div>
                <img src="../assets/pic/1-160S02159230-L.jpg" alt>
                <p>哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森</p>
              </li>
              <li class="picList">
                <div class="darkGlass"></div>
                <img src="../assets/pic/1-160S02159230-L.jpg" alt>
                <p>哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森</p>
              </li>
              <li class="picList">
                <div class="darkGlass"></div>
                <img src="../assets/pic/1-160S02159230-L.jpg" alt>
                <p>哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森哈雷戴维森</p>
              </li>
            </ul>
          </transition>
          <!-- 动画结束 -->
          <div class="nextButton" @click.prevent="preList"></div>
        </div>
      </div>
      <!-- 这是小型swiper的结束 -->
    </div>
    <div class="more">
      <a href alt>
        <p>查看更多</p>
      </a>
    </div>

    <div class="fourth-container">
      <div class="leftBox">
        <h5 class="leftmainTitle">About Us</h5>
        <h6 class="leftsecondTitle">关于我们</h6>
        <p class="mainBody">
          《织梦58》诞生于2014年6月（www.dede58.com），以提供分享精品织梦源码及织梦建站过程常遇
          到的问题解决方案汇总为主要宗旨。 《织梦58》内容涉及: 企业类织梦源码，门户类织梦源码，及工作室或博客类等基于织
          梦系统仿制等风格。 《织梦58》将向着共享化、全面化、专业化、深度化、免费化的多元方向发展，打造实用快捷的
          建站体验，为会员及用户提供高质量的服务。 《织梦58》
          感谢无数关注、支持我们的会员及各位访客们，感谢您们的信任。年轻的...
        </p>
        <div class="leftextraWord">
          <a class="leftextra" href alt>
            <p>查看更多</p>
          </a>
        </div>
      </div>
      <div class="rightBox">
        <h5 class="rightmainTitle">News</h5>
        <h6 class="rightsecondTitle">新闻资讯</h6>
        <ul class="newsUl">
          <li class="newList">
            <span class="numBack">01</span>
            <div class="detial">
              <a href class="newsLink">
                <p class="newsTitle">工信部印发《内燃机再制造推进计划》</p>
                <span class="time">2016/08/30</span>
              </a>
            </div>
          </li>
          <li class="newList">
            <span class="numBack">02</span>
            <div class="detial">
              <a href class="newsLink">
                <p class="newsTitle">保守预测 2011轻客行业将重回个位数增长</p>
                <span class="time">2016/08/30</span>
              </a>
            </div>
          </li>
          <li class="newList">
            <span class="numBack">03</span>
            <div class="detial">
              <a href class="newsLink">
                <p class="newsTitle">汽车岁末大回馈火热进行</p>
                <span class="time">2016/08/30</span>
              </a>
            </div>
          </li>
        </ul>
        <div class="rightextraWord">
          <a class="rightextra" href alt>
            <p>查看更多</p>
          </a>
        </div>
      </div>
    </div>

    <div class="fivth-container">
      <div class="inner-Container">
        <div>租车须知</div>
      </div>
    </div>

    <footer-box/>
  </div>
</template>

<script>
import nav from "./children/nav";
import footer from "./children/footer";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import sideBox from "./children/sideBox";

require("swiper/dist/css/swiper.css");
export default {
  name: "home",
  data() {
    return {
      msg: "织梦58，诚信为本，市场在变，诚信永远不变...",
      intervalId: null,
      isActive: false,
      next: "flex-start"
    };
  },
  created() {},
  methods: {
    LetStart() {
      if (this.intervalId != null) {
        return;
      }
      this.intervalId = setInterval(() => {
        var start = this.msg.substring(0, 1);
        var end = this.msg.substring(1);
        this.msg = end + start;
      }, 350);
    },
    letStop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    preList() {
      if (this.isActive == false) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  },
  components: {
    "nav-box": nav,
    "footer-box": footer,
    "side-box": sideBox
  },
  mounted() {
    this.LetStart();
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
/* .v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
} */

.second-container {
  display: flex;
  justify-content: center;
  background-image: url("../assets/pic/case.jpg");
  background-repeat: repeat-x;
  width: 100%;
  height: 290px;
  background-color: rgb(230, 230, 230);
  .caseBox {
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    width: 233px;
    height: 287px;
    background-image: url("../assets/pic/case.png");
    background-repeat: no-repeat;
    text-align: center;
    line-height: 30px;
    .mainTitle {
      font-size: 20px;
      font-weight: bold;
    }
    .secondTitle {
      font-size: 18px;
    }
    .body {
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      margin: 18px;
      height: 124px;
    }
    a {
      display: inline-block;
      width: 165px;
      height: 34px;
      background-image: url("../assets/pic/morebg2.gif");
      background-position: center center;
      text-decoration: none;
      color: black;
    }
  }
  .alignBox {
    background-color: rgb(230, 230, 230);
    margin-left: 20px;
    .noticeBox {
      width: 800px;
      height: 51px;
      background-image: url("../assets/pic/notice.gif");
      background-repeat: no-repeat;
      background-color: white;
      background-position-x: left;
      background-position-y: center;
      .notice {
        display: inline-block;
        width: 100px;
        padding-top: 15px;
        padding-left: 15px;
        height: 35px;
        margin-left: 10px;
      }
      .messageBox {
        display: inline-block;
      }
    }
    .picBox {
      display: flex;
      width: 800px;

      .picList {
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        vertical-align: middle;
        a {
          text-decoration: none;
          color: black;
          li {
            background-color: white;
            text-align: center;
            margin-right: 23px;
            margin-top: 10px;
            div {
              white-space: nowrap;
              height: 200px;
              margin: 0;
              padding: 0;
              width: 217px;
              img {
                margin-bottom: 10px;
                width: 215px;
                height: 161px;
              }
              p {
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
          }
        }
      }
    }

    .picBox .picList a:hover {
      opacity: 1;
      transform: translate(0, -8px);
      transition: all 0.8s ease;
    }
  }
}

.third-container {
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .text-container {
    height: 80px;
    width: 100%;
    text-align: center;
    margin-bottom: 0px;
    .mainTitle {
      font-size: 18px;
      line-height: 0px;
      font-weight: bold;
      margin-bottom: 0px;
    }
    .smallTitle {
      margin-top: 0px;
      font-size: 18px;
    }
  }

  .swipe-Contianer {
    width: 100%;
    height: 800px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .innerBox {
      width: 1210px;
      height: 300px;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .preButton {
        width: 33px;
        height: 76px;
        background-image: url("../assets/pic/about03.jpg");
        background-repeat: no-repeat;
        background-position: center center;
      }

      .switchPanel {
        height: 100%;
        width: 1079px;
        display: flex;
        justify-content: flex-start;
        overflow: hidden;
        align-items: center;
        background-color: white;
        .picList {
          margin: 0 4px 20px 0;
          background-color: white;
          padding: 0 10px;
          position: relative;

          .darkGlass {
            width: 245px;
            height: 184px;
            background-color: black;
            opacity: 0.5;
            position: absolute;
            display: none;
            background-image: url("../assets/pic/button.png");
            background-position: center center;
            background-repeat: no-repeat;
          }

          img {
            height: 184px;
            width: 245px;
          }
          p {
            background-color: #fdb816;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 245px;
            line-height: 41px;
          }
        }
      }
      .nextSwitchPanel {
        height: 100%;
        width: 1079px;
        display: flex;
        justify-content: flex-end;
        overflow: hidden;
        align-items: center;
        background-color: white;
        .picList {
          margin: 0 4px 20px 0;
          background-color: white;
          padding: 0 10px;
          position: relative;

          .darkGlass {
            width: 245px;
            height: 184px;
            background-color: black;
            opacity: 0.5;
            position: absolute;
            display: none;
            background-image: url("../assets/pic/button.png");
            background-position: center center;
            background-repeat: no-repeat;
          }

          img {
            height: 184px;
            width: 245px;
          }
          p {
            background-color: #fdb816;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 245px;
            line-height: 41px;
          }
        }
      }

      .nextButton {
        width: 33px;
        height: 76px;
        background-image: url("../assets/pic/about04.jpg");
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
  }
}

/* 给图片列表加上不透明效果，开始 */
.third-container
  .swipe-Contianer
  .innerBox
  .switchPanel
  .picList:hover
  .darkGlass {
  display: block;
}
.third-container
  .swipe-Contianer
  .innerBox
  .nextSwitchPanel
  .picList:hover
  .darkGlass {
  display: block;
}

/* 给图片列表加上不透明效果，结束 */

.more {
  width: 100%;
  background-image: url(../assets/pic/morebg1.gif);
  background-repeat: no-repeat;
  background-position: center center;
  a {
    text-decoration: none;
    p {
      text-align: center;
      padding: 9px 0;
      font-size: 16px;
      color: #fdb816;
    }
  }
}

.fourth-container {
  display: flex;
  justify-content: center;
  height: 353px;
  width: 100%;
  background-image: url("../assets/pic/map.png");
  background-color: rgb(253, 184, 22);
  background-repeat: no-repeat;
  background-position: center center;
  .leftBox {
    margin: 10px;
    margin-right: 50px;
    height: 320px;
    width: 440px;
    .leftmainTitle {
      font-size: 21px;
    }
    .leftsecondTitle {
      font-weight: bold;
      font-size: 17px;
    }
    .mainBody {
      margin-top: 40px;
      text-indent: 30px;
      line-height: 25px;
    }
    .leftextraWord {
      height: 44px;
      text-decoration: none;
      color: black;
      background-image: url("../assets/pic/morebg2.gif");
      background-repeat: no-repeat;
      .leftextra {
        text-decoration: none;
        color: black;
        p {
          margin-left: 54px;
          padding-top: 7px;
        }
      }
    }
  }
  .rightBox {
    margin: 10px;
    margin-left: 50px;
    height: 320px;
    width: 440px;
    .rightmainTitle {
      font-size: 21px;
      text-align: end;
    }
    .rightsecondTitle {
      font-weight: bold;
      font-size: 17px;
      text-align: end;
    }
    .newsUl {
      .newList {
        margin-bottom: 10px;
        .numBack {
          display: inline-block;
          background-image: url("../assets/pic/num.png");
          background-repeat: no-repeat;
          width: 62px;
          height: 56px;
          padding-left: 12px;
          font-size: 29px;
          color: rgb(253, 184, 22);
          background-position-x: 0px;
          background-position-y: 1px;
          padding-top: 12px;
        }
        .detial {
          display: inline-block;
          margin-left: 27px;
          .newsLink {
            color: black;
            text-decoration: none;
            .newsTitle {
              border-bottom: 1px solid rgb(217, 154, 0);
              margin-bottom: 3px;
              .time {
              }
            }
          }
        }
      }
    }
    .rightextraWord {
      background-image: url(../assets/pic/morebg2.gif);
      background-repeat: no-repeat;
      background-position-x: right;
      height: 44px;
      margin-top: 30px;
      .rightextra {
        text-decoration: none;
        color: black;
        text-align: end;

        p {
          height: 44px;
          text-align: end;
          margin-right: 49px;
          padding-top: 7px;
        }
      }
    }
  }
}
.fivth-container {
  height: 304px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner-Container {
    width: 1000px;
    height: 250px;
    background-image: url("../assets/pic/ad.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    div {
      width: 234px;
      height: 46px;
      font-size: 18px;
      font-weight: bold;
      background-image: url("../assets/pic/zhu.png");
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 250px;
    }
  }
}

.sixth-container {
}

.third-container .swiper .carQuery a li .picTextContainer:hover .opacityBOx {
  display: block;
}
</style>
