<template>
  <div>
    <div class="second-container">
      <nav-box/>
    </div>
    <div class="third-container">
      <div class="left-box">
        <left-Up-box titleDE="关于我们"/>
        <left-bottom-box/>
      </div>
      <div class="right-box">
        <titlePath titleName="关于我们" pathName="关于我们"/>
        <div class="bottom">
          <p class>《织梦58》诞生于2014年6月（www.dede58.com），以提供分享精品织梦源码及织梦建站过程常遇到的问题解决方案汇总为主要宗旨。</p>
          <br>
          <p>《织梦58》内容涉及: 企业类织梦源码，门户类织梦源码，及工作室或博客类等基于织梦系统仿制等风格。</p>
          <br>
          <p>《织梦58》将向着共享化、全面化、专业化、深度化、免费化的多元方向发展，打造实用快捷的建站体验，为会员及用户提供高质量的服务。</p>
          <br>
          <p>《织梦58》感谢无数关注、支持我们的会员及各位访客们，感谢您们的信任。年轻的《织梦58》愿与同样充满活力的您，彼此相伴，共同成长！</p>
          <br>
          <p>《织梦58》只专心做一件事，便是做好的完整的织梦源码！</p>
          <br>
          <br>
          <p>
            织梦58开站以来，尽管没有积累太多用户口碑和市场份额，但我们一直努力，每天保持更新各行各业好源码，让找织梦源码去dede58已经成为很多织梦爱
            好者的习惯。
          </p>
          <br>
          <p>相信通过我们的努力,dede58会越来越好！</p>
          <br>
          <br>
          <p>dede58离不开您的参与，如果您：</p>
          <ol>
            <li>要出售自己持有的好源码？欢迎您来这里分享，经过审核后会支付一定的金币做为回报。</li>
            <li>苦苦寻觅织梦源码 、迫切希望得到一个改改就能用上的企业网站？这里或许能很快解决您的问题。</li>
            <li>想找个网络模板收藏夹存放自己喜爱的源码或模板？ 这里就是您的选择。</li>
            <li>想结交更多热爱织梦源码建站的朋友？那就快来分享您的源码，寻找志趣相投的朋友吧。</li>
          </ol>
          
        </div>
      </div>
    </div>
    <footer-box/>
  </div>
</template>

<script>
import nav from "./children/nav";
import footer from "./children/footer";
import leftUpBox from "./children/leftUpBox";
import leftBottomBox from "./children/leftBottomBox";
import titlePath from "./children/titlePath";

export default {
  name: "aboutUs",
  data() {
    return {
      titleName: "",
      titleDE: "",
      pathName: ""
    };
  },
  components: {
    "nav-box": nav,
    "footer-box": footer,
    "left-Up-box": leftUpBox,
    "left-bottom-box": leftBottomBox,
    titlePath: titlePath
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.third-container {
  display: flex;
  justify-content: center;
  height: 723px;
  width: 100%;

  .left-box {
    display: flex;
    flex-direction: column;
  }
  .right-box {
    margin-left: 30px;
    width: 812px;
    display: inline-block;
  }
  .bottom {
    border-top: 1px solid black;
    margin-top: 1px;
    width: 850px;
    ol {
      list-style: decimal;
      margin-left: 13px;
      li {
        line-height: 30px;
      }
    }
  }
}
</style>