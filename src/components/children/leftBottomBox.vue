<template>
  <div>
    <div class="left-bottom-box-outer-container">
      <div class="top-part">
        <img src="../../assets/pic/tel.png" alt="telIcon">
        联系我们
      </div>
      <div class="bottomPart">
        <ul>
          <li>电话：4000-96877</li>
          <li>手机：4000-96877</li>
          <li>地址：这里是您的公司地址</li>
          <li>邮箱：admin@dede58.com</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftBottomBox",
  data() {
    return {
      msg: ""
    };
  },
  components: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.left-bottom-box-outer-container {
  background-color: rgb(253, 184, 17);
  background-image: url("../../assets/pic/cont.jpg");
  background-repeat: no-repeat;
  background-position: bottom center;
  width: 200px;
  height: 130px;
  .top-part {
    background-color: rgb(253, 184, 17);
    width: 200px;
    font-size: 18px;
    font-weight: bold;
    img {
    }
  }
  .bottomPart {
    color: rgb(155, 173, 189);
    background-color: rgb(26, 42, 57);
    ul {
      padding-top: 10px;
      margin: 10px;
      margin-top: 86px;
      li {
      }
    }
  }
}
</style>