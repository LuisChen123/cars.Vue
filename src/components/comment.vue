<template>
  <div>
    <div class="second-container">
      <nav-box/>
    </div>
    <div class="third-container">
      <div class="left-box">
        <left-Up-box titleDE="在线留言"/>
        <left-bottom-box/>
      </div>
      <div class="right-box">
        <titlePath titleName="在线留言" pathName="在线留言"/>
        <div class="commentArea">
          <li style="text-indent: 27px ;
          margin-top: 57px;">
            <span>*</span>姓名:
            <input type="text" v-model="name">
            {{ nameWarning }}
          </li>
          <li style="text-indent: 27px">
            <span>*</span>手机:
            <input type="text" v-model="phoneNumber">
            {{phoneNumberWarning }}
          </li>
          <li>
            <span>*</span>留言内容:
            <textarea name id cols="50" rows="5" v-model="comment"></textarea>
            {{commentWarning}}
          </li>
          <button id="commentBtn" type="button" class="btn btn-warning" @click="postComment">提交留言</button>
        </div>
      </div>
    </div>
    <!-- <footer-box/> -->
  </div>
</template>

<script>
import nav from "./children/nav";
import footer from "./children/footer";
import leftUpBox from "./children/leftUpBox";
import leftBottomBox from "./children/leftBottomBox";
import titlePath from "./children/titlePath";

export default {
  name: "comment",
  data() {
    return {
      titleName: "",
      titleDE: "",
      pathName: "",
      name: "",
      phoneNumber: "",
      comment: "",
      nameWarning: "",
      phoneNumberWarning: "",
      commentWarning: ""
    };
  },
  components: {
    "nav-box": nav,
    "footer-box": footer,
    "left-Up-box": leftUpBox,
    "left-bottom-box": leftBottomBox,
    titlePath: titlePath
  },
  methods: {
    postComment() {
      this.nameWarning = "";
      if (this.name.trim() == "") {
        this.nameWarning = "名字不能为空";
      } else console.log("something went wrong");

      this.phoneNumberWarning = "";
      if (this.phoneNumber.trim() == "") {
        this.phoneNumberWarning = "电话不能为空";
      } else console.log("something went wrong");

      this.commentWarning = "";
      if (this.comment.trim() == "") {
        this.commentWarning = "留言不能为空";
      } else console.log("something went wrong");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.third-container {
  display: flex;
  justify-content: center;
  width: 100%;
  .left-box {
    display: flex;
    flex-direction: column;
  }
  .right-box {
    vertical-align: middle;
    .commentArea {
      text-align: start;
      margin: 1px 0px 50px 50px;
      float: left;
      width: 100%;
      border-top: 1px solid;
      li {
        vertical-align: middle;
        margin-top: 20px;
        list-style: none;
        span {
          vertical-align: middle;
          color: red;
        }
        textarea {
          vertical-align: top;
        }
      }
      #commentBtn {
        margin-left: 210px;
        margin-top: 30px;
        box-shadow: 1px 3px 3px #888888;
      }
    }
  }
}
</style>