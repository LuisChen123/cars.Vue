<template>
  <div>
    <div class="title">
      <div class="us">{{ titleName }}</div>
      <div class="route">当前位置：主页>{{ pathName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "titlePath",
  props: {
    titleName: {
      type: String,
      default: ""
    },
    pathName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.title {
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  .us {
    font-size: 21px;
    border-bottom: 2px solid black;
    width: 137px;
    text-indent: 20px;
  }
  .route {
    margin-top: 8px;
  }
}
</style>