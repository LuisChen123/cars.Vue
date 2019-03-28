<template>
  <div class="sideBox-Contianer">
    <div class="miniSideBox" :style="{visibility:miniBoxShow}" @click="boxSwitch"></div>
    <div class="largeQRcode" :style="{visibility:largeBoxShow}">
      <img
        id="closeIcon"
        src="../../assets/pic/u=2594960388,3632675066&fm=26&gp=0.jpg"
        alt
        @click="hiddenLargeBox"
      >
      <img src="../../assets/pic/erweima.png" alt="closeButton">
      <p>扫一扫看WAP演示xxxxxxxxssssxx</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideBox",

  data() {
    return {
      largeBoxShow: "",
      miniBoxShow: ""
    };
  },
  methods: {
    boxSwitch() {
      console.log("hello");
      this.largeBoxShow = "visible";
      this.miniBoxShow = "hidden";
    },
    hiddenLargeBox() {
      this.largeBoxShow = "hidden";
      this.miniBoxShow = "visible";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.sideBox-Contianer {
  position: fixed;
  float: right;
  z-index: 2;
  right: 0;
  top: 20%;
  margin-left: 530px;
  display: block;

  .miniSideBox {
    background-image: url("../../assets/pic/phoneTip_right.png");
    background-repeat: no-repeat;
    background-position: center center;
    width: 47px;
    height: 60px;
    float: right;
    padding-top: 480px;
    visibility: visible;
  }

  .largeQRcode {
    visibility: hidden;
    width: 313px;
    height: 483px;
    background-image: url("../../assets/pic/small_phone.png");
    z-index: 999;
    #closeIcon {
      width: 16px;
      height: 16px;
      padding: 0;
      position: absolute;
      margin-top: 13px;
      margin: 8px 0 0 270px;
    }
    img {
      width: 200px;
      height: 200px;
      margin-left: 62px;
      margin-top: 110px;
    }
    p {
      text-align: center;
      text-indent: 60px;
      font-size: 15px;
      color: red;
    }
  }
}
</style>