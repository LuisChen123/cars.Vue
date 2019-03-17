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
          <a>网站首页</a>
        </li>
        <li class="navList">
          <a>关于我们</a>
        </li>
        <li class="sunav navList">
          <a href="#">车辆展示</a>
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
          <a>行业资讯</a>
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
          <a>在线留言</a>
        </li>
        <li class="navList">
          <a>联系我们</a>
        </li>
      </ul>
    </div>
    <!-- 导航条结束 -->
    <!-- Carousel开始 -->

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../children../../../assets/pic/banner.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../children../../../assets/pic/banner.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>










  </div>
</template>

<script>
export default {

  name: "home",
  data() {
    return {};
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
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
  height: 80px;
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
}
</style>