<template>
  <div class="footer">
    <div class="TopFooter">
      <div class="topLeft">
        <div class="webMap">
          网站地图（
          <a href="www.baidu.com" class="baidu">百度 /</a>
          <a href="www.google.com" class="google">谷歌)</a>
        </div>
        <div class="linkList">
          <ul>
            <li>
              <a href alt="网站首页">网站首页</a>
              <a href alt="关于我们">关于我们</a>
              <a href alt="车辆展示">车辆展示</a>
              <a href alt="行业资讯">行业资讯</a>
            </li>
            <li>
              <a href alt="主要车型">主要车型</a>
              <a href alt="资质荣誉">资质荣誉</a>
              <a href alt="租车须知">租车须知</a>
              <a href alt="人才招聘">人才招聘</a>
            </li>
            <li class="lastList">
              <a href alt="在线留言">在线留言</a>
              <a href alt="联系我们">联系我们</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="topCenter">
        <p class="phone">
          热线电话
          <br>
          <label>4000-96877</label>
        </p>
        <span>7x24小时全国客服热线，全年无休</span>
      </div>
      <div class="topRight">
        <p>
          <img src="../../assets/pic/erweima.png" alt>
          <br>
          <label for>扫一扫关注我们</label>
        </p>
      </div>
    </div>
    <div class="footerCenter">
      <b>友情链接：</b>
      <a href alt="织梦模板">织梦模板</a>
      <a href alt="织梦主机">织梦主机</a>
      <a href alt="响应式织梦模板">响应式织梦模板</a>
    </div>
    <div class="footBottom">
      <div class="leftFooter">
        <div class="firstLine">地址：这里是您的公司地址 电话：4000-96877 手机：4000-96877</div>
        <div class="secondLine">Copyright© 2002-2011 DEDE58.COM 织梦模板 版权所有</div>
        <div class="thirdLine">
          技术支持：
          <a href alt="网络设计">网络设计</a>
        </div>
        <div class="fourthLine">ICP备案编号：ICP备********号</div>
      </div>
      <div class="rightFooter">
        <a href alt title="sina"></a>
        <a href alt title="yoyo"></a>
        <a href alt title="tencent"></a>
        <a href alt title="baidu"></a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.footer {
  width: 100%;
  background-image: url("../../assets/pic/nav.jpg");
  background-repeat: repeat-x;
  background-color: rgb(26, 42, 57);
  display: flex;
  flex-direction: column;
  align-items: center;
  .TopFooter {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 210px;
    border-bottom: 1px solid rgb(123, 142, 158);
    .topLeft {
      width: 193px;
      height: 38px;
      background-image: url("../../assets/pic/bmap.png");
      background-repeat: no-repeat;
      margin-top: 12px;
      padding-top: 10px;
      .webMap {
        float: right;
        color: rgb(123, 142, 158);
        a {
          text-decoration: none;
          color: rgb(123, 142, 158);
        }
      }
      .linkList {
        display: block;
        width: 500px;
        margin-top: 74px;
        ul {
          display: block;
          width: 500px;
          height: 85px;
          list-style: none;
          li {
            display: inline-block;
            list-style: none;
            width: 70px;
            height: 80px;
            margin-right: 40px;
            a {
              text-decoration: none;
              color: rgb(123, 142, 158);
              line-height: 20px;
              text-align: center;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
          .lastList {
            vertical-align: top;
          }
        }
      }
    }
    .topCenter {
      color: rgb(255, 189, 22);
      margin-left: 138px;
      width: 354px;
      margin-top: 50px;
      background-image: url("../../assets/pic/tel.png");
      background-repeat: no-repeat;
      background-position-y: 8px;
      .phone {
        font-size: 18px;
        display: block;
        margin-left: 55px;
        label {
          font-size: 26px;
          span {
            display: block;
          }
        }
      }
    }
    .topRight {
      display: inline-block;
      margin-top: 31px;
      width: 123px;
      height: 180px;
      p {
        color: rgb(123, 142, 158);
        text-align: center;
        img {
          width: 121px;
          height: 123px;
        }
      }
    }
  }

  .footerCenter {
    word-spacing: 10px;
    width: 1000px;
    height: 50px;
    border-bottom: 1px solid rgb(123, 142, 158);
    padding-top: 15px;
    b {
      color: rgb(123, 142, 158);
    }
    a {
      text-decoration: none;
      color: rgb(123, 142, 158);
    }
  }
  .footBottom {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    color: rgb(123, 142, 158);
    padding: 34px 0;
    font-size: 12px;
    .leftFooter {
      .firstLine {
        padding: 10px 0;
      }
      .secondLine {
        display: inline-block;
      }
      .thirdLine {
        display: inline-block;
        margin-left: 15px;
        a {
          text-decoration: none;
          color: rgb(123, 142, 158);
        }
      }
      .fourthLine {
        display: inline-block;
        margin-left: 15px;
      }
    }
    .rightFooter {
      margin-top: 30px;
      width: 185px;
      height: 46px;
      background-image: url("../../assets/pic/share.gif");
      background-repeat: no-repeat;
    }
  }
}
</style>