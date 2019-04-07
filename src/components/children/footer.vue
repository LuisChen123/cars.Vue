<template>
  <div class="outer-Container">
    <div class="firstBox">
      <div class="leftBox">
        <div class="webmap">
          <p>
            网站地图
            <span>
              <a href="www.baidu.com" class>( 百度</a>
            </span>
            <span>
              <a href="www.google.com" class>/ 谷歌 )</a>
            </span>
          </p>
        </div>
        <div class="linkBox">
          <ul class="firstlinkList">
            <li>网站首页</li>
            <li>关于我们</li>
            <li>车辆展示</li>
            <li>行业资讯</li>
          </ul>
          <ul class="secondLinkList">
            <li>主要车型</li>
            <li>资质荣誉</li>
            <li>租车须知</li>
            <li>人才招聘</li>
          </ul>
          <ul class="thirdLinkList">
            <li>在线留言</li>
            <li>联系我们</li>
          </ul>
        </div>
      </div>
      <div class="rightBox">
        <div class="phoneNumber">
          <p class="hotLine">热线电话</p>
          <p class="number">4000-96877</p>
          <p class="time">7x24小时全国客服热线，全年无休</p>
        </div>
        <div class="QRcode">
          <img src="../../assets/pic/erweima.png" alt>
          <p>扫一扫关注我们</p>
        </div>
      </div>
    </div>
    <div class="secondBox">
      <ul>
        <li>
          友情链接：
          <a href>织梦模板</a>
        </li>
        <li>
          <a href>织梦主机</a>
        </li>
        <li>
          <a href>响应式织梦模板</a>
        </li>
      </ul>
    </div>
    <div class="thirdBox">
      <div class="leftBox">
        <ul class="firstLine">
          <li>地址：这里是您的公司地址</li>
          <li>电话：4000-96877</li>
          <li>手机：4000-96877</li>
        </ul>
        <ul class="secondLine">
          <li>Copyright © 2002-2011 DEDE58.COM 织梦模板 版权所有</li>
          <li>
            技术支持：
            <a href class>网络设计</a>
          </li>
          <li>
            ICP备案编号：
            <a href class>ICP备********号</a>
          </li>
        </ul>
      </div>
      <div class="rightBox">
        <ul>
          <a href="www.baidu.com">
            <li></li>
          </a>
          <a href="www.baidu.com">
            <li></li>
          </a>
          <a href="www.baidu.com">
            <li></li>
          </a>
          <a href="www.baidu.com">
            <li></li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.outer-Container {
  width: 100%;
  height: 359px;
  background-image: url("../../assets/pic/nav.jpg");
  background-repeat: repeat-x;
  background-position: top center;
  background-color: rgb(19, 33, 45);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #7b8e9e;
  .firstBox {
    width: 1000px;
    margin-top: 20px;
    height: 300px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    position: relative;
    margin-bottom: 37px;
    .leftBox {
      position: absolute;
      left: 0;
      .webmap {
        background-image: url("../../assets/pic/bmap.png");
        background-repeat: no-repeat;
        background-position: left center;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          padding-top: 5px;
          a {
            text-decoration: none;
            color: #7b8e9e;
          }
        }
      }
      .linkBox {
        display: flex;
        width: 270px;
        margin-left: 10px;
        font-size: 12px;
        .firstlinkList {
          line-height: 23px;
          margin-right: 30px;
        }
        .secondLinkList {
          line-height: 23px;
          margin-right: 30px;
        }
        .thirdLinkList {
          line-height: 23px;
          margin-right: 30px;
        }
      }
    }
    .rightBox {
      display: flex;
      position: absolute;
      right: 0;

      .phoneNumber {
        background-image: url("../../assets/pic/tel.png");
        background-repeat: no-repeat;
        background-position: left top;
        color: rgb(253, 184, 17);
        margin-right: 80px;
        margin-top: 32px;
        .hotLine {
          text-align: center;
          padding-right: 60px;
          margin-bottom: 0;
        }
        .number {
          text-align: center;
          padding-left: 12px;
          font-size: 25px;
          margin-bottom: 0;
        }
        .time {
          margin-top: 0;
          font-size: 14px;
        }
      }
      .QRcode {
        margin-right: 50px;
        img {
          width: 100px;
          height: 100px;
        }
        p {
        }
      }
    }
  }
  .secondBox {
    width: 1000px;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid #7b8e9e;
    border-top: 1px solid #7b8e9e;
    background-color: rgb(19, 33, 45);
    margin-left: 10px;
    ul {
      display: flex;
      width: 722.36px;
      line-height: 48px;
      margin-left: 10px;
      font-size: 12px;
      li {
        margin-right: 12px;
        font-size: 12px;
        a {
          text-decoration: none;
          color: #7b8e9e;
          font-size: 12px;
        }
      }
    }
  }
  .thirdBox {
    height: 160px;
    width: 1000px;
    background-color: rgb(19, 33, 45);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    font-size: 12px;
    .leftBox {
      .firstLine {
        display: flex;
        li {
          margin-right: 10px;
        }
      }
      .secondLine {
        display: flex;
        li {
          margin-right: 10px;
          a {
            text-decoration: none;
            color: #7b8e9e;
          }
        }
      }
    }
    .rightBox {
      width: 171px;
      height: 32px;

      background-image: url("../../assets/pic/share.gif");

      ul {
        display: flex;
        justify-content: space-between;
        li {
          width: 36px;
          height: 36px;

          justify-content: space-evenly;
          a {
          }
        }
      }
    }
  }
}
</style>