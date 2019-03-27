<template>
  <div class="fisrt-cotainer">
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
          <div class="picList">
            <a class="boxLink" href alt>
              <img class="carPic" src="../assets/pic/1-160S0215T50-L.jpg" alt="carImage">
              <br>
              <span>汉兰达</span>
            </a>
          </div>
          <div class="picList">
            <a class="boxLink" href alt>
              <img class="carPic" src="../assets/pic/1-160S0215Z40-L.jpg" alt="carImage">
              <br>
              <span>汉兰达</span>
            </a>
          </div>
          <div class="picList">
            <a class="boxLink" href alt>
              <img class="carPic" src="../assets/pic/1-160S02154010-L.jpg" alt="carImage">
              <br>
              <span>汉兰达</span>
            </a>
          </div>
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

      <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <ul class="carQuery">
              <a>
                <li>
                  <div class="picTextContainer">
                    <a href alt>
                      <img class="autoPic" src="../assets/pic/1-160S02154010-L.jpg" alt>
                    </a>
                    <p class="carName">路虎揽胜</p>
                  </div>
                </li>
              </a>
              <a>
                <li>
                  <div class="picTextContainer">
                    <img class="autoPic" src="../assets/pic/1-160S0215T50-L.jpg" alt>
                    <p class="carName">宝马</p>
                  </div>
                </li>
              </a>
              <a>
                <li>
                  <div class="picTextContainer">
                    <img class="autoPic" src="../assets/pic/1-160S0215Z40-L.jpg" alt>
                    <p class="carName">奔驰</p>
                  </div>
                </li>
              </a>
              <a>
                <li>
                  <div class="picTextContainer">
                    <img class="autoPic" src="../assets/pic/1-160S02159230-L.jpg" alt>
                    <p class="carName">载重车</p>
                  </div>
                </li>
              </a>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="carQuery">
              <a>
                <li>
                  <div class="picTextContainer">
                    <img class="autoPic" src="../assets/pic/1-160S02154010-L.jpg" alt>
                    <p class="carName">轻卡</p>
                  </div>
                </li>
              </a>
              <a>
                <li>
                  <div class="picTextContainer">
                    <img class="autoPic" src="../assets/pic/1-160S0215T50-L.jpg" alt>
                    <p class="carName">公路客车</p>
                  </div>
                </li>
              </a>
              <a>
                <li>
                  <div class="picTextContainer">
                    <img class="autoPic" src="../assets/pic/1-160S0215Z40-L.jpg" alt>
                    <p class="carName">城市客车</p>
                  </div>
                </li>
              </a>
              <a>
                <li>
                  <div class="picTextContainer">
                    <img class="autoPic" src="../assets/pic/1-160S02159230-L.jpg" alt>
                    <p class="carName">轻型客车</p>
                  </div>
                </li>
              </a>
            </ul>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="more">
        <a href alt>
          <p>查看更多</p>
        </a>
      </div>
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
      <a href class="noticeLink">
        <div class="notice">租车须知</div>
      </a>
    </div>

    <footer-box/>
  </div>
</template>

<script>
import nav from "./children/nav";
import footer from "./children/footer";
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
export default {
  name: "home",
  data() {
    return {
      msg: "织梦58，诚信为本，市场在变，诚信永远不变...",
      intervalId: null,
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        // autoplay: {// 取消autoplay
        // delay: 3000,
        // stopOnLastSlide: false,
        // disableOnInteraction: true
        // },
        //滑动速度
        speed: 800,
        //滑动方向

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
            }
            return html;
          }
        }
      }
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
    }
  },
  components: {
    "nav-box": nav,
    "footer-box": footer
  },
  mounted() {
    this.LetStart();
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
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
      margin: 18px;
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
      justify-content: center;
      width: 800px;
      height: 254px;
      .picList {
        width: 215px;
        margin: 10px;
        margin-top: 30px;
        background: white;
        height: 192px;
        .boxLink {
          text-decoration: none;
          color: black;
          .carPic {
            width: 215px;
            height: 161px;
          }
          span {
            padding-left: 86px;
            font-size: 18px;
          }
        }
      }
    }

    .picBox :hover {
      opacity: 1;
      transform: translate(0, -8px);
      transition: all 0.8s ease;
    }
  }
}

.third-container {
  height: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .text-container {
    height: 80px;
    width: 100%;
    text-align: center;
    margin-bottom: 0px;
    .mainTitle {
      line-height: 0px;
      font-weight: bold;
      margin-bottom: 0px;
    }
    .smallTitle {
      margin-top: 0px;
    }
  }
  .swiper {
    width: 100%;
    height: 300px;
    display: flex;
    padding-right: 100px;

    .carQuery {
      display: block;
      width: 100%;
      height: 300px;

      /* padding-right: 10px; */
      margin-left: 420px;
      a {
        display: inline-block;
        text-align: center;
        text-decoration: none;
        color: black;
        li {
          display: inline-block;
          list-style: none;
          height: 240px;
          .picTextContainer {
            .autoPic {
              width: 260px;
              height: 195px;
            }

            .carName {
              width: 260px;
              height: 45px;
              background-color: rgb(253, 184, 22);
              padding-top: 12px;
              font-size: 16px;
            }
          }
        }
      }
    }

    .swiper-button-prev {
      background-image: url("../assets/pic/about03.jpg");
      width: 33px;
      height: 78px;
      background-size: 33px 78px;
      margin-top: -46px;
      left: 330px;
    }
    .swiper-button-next {
      background-image: url("../assets/pic/about04.jpg");
      width: 33px;
      height: 78px;
      background-size: 33px 78px;
      right: 238px;
    }
  }
  .more {
    height: 80px;
    width: 100%;
    background-image: url(../assets/pic/morebg1.gif);
    background-repeat: no-repeat;
    background-position: center center;
    a {
      text-decoration: none;

      p {
        height: 30px;
        text-align: center;
        margin-top: 19px;
        font-size: 16px;
        color: rgb(253, 184, 22);
      }
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
  width: 100%;
  background-image: url("../assets/pic/ad.jpg");
  background-repeat: no-repeat;
  background-position: center center;

  .noticeLink {
    text-decoration: none;
    color: black;
    display: inline-block;
    .notice {
      display: inline-block;
      height: 304px;
      width: 234px;
      margin-top: -40px;
      margin-left: 970px;
      padding-left: 90px;
      padding-top: 140px;
      background-image: url("../assets/pic/zhu.png");
      background-repeat: no-repeat;
      background-position: center center;
      position: relative;
      font-weight: bold;
      font-size: 18px;
    }
  }
}

.sixth-container {
}
</style>
