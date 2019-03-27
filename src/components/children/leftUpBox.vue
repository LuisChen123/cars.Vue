<template>
  <div>
    <div class="left-top-box-container">
      <div class="topLeft">{{ titleDE }}</div>
      <div class="whiteBox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftUpBox",
  props: {
    titleDE: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.left-top-box-container {
  margin-bottom: 51px;
  width: 200px;
  background-color: rgb(26, 42, 57);
  float: right;
  .topLeft {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    padding-top: 12px;
    height: 63px;
    width: 200px;
    background-image: url("../../assets/pic/case.png");
    background-repeat: no-repeat;
    background-position-y: bottom;
  }
  .whiteBox {
    margin-top: 57px;
    
    width: 200px;
    background-color: white;
  }
}
</style>