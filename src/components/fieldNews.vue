<template>
  <div>
    <div class="second-container">
      <nav-box/>
    </div>
    <div class="third-container">
      <div class="left-box">
        <left-Up-box titleDE="行业资讯"/>
        <left-bottom-box/>
      </div>
      <div class="right-box">
        <titlePath titleName="行业资讯" pathName="行业资讯"/>
        <div class="newsListTable">
          <router-link
            v-for="item in list"
            :key="item.id"
            :to=" 'fieldNews/fieldNewsDetial/' + item.id "
            tag="li"
            class="newsList"
          >
            <div class="newsBox">
              <span class="newsTitle">> {{ item.title }}</span>
              <span class="newsDate">{{ item.date }}</span>
            </div>
          </router-link>
        </div>
        <!-- <div class="page">
          <li>
            <a href="">首页</a>
          </li>
          <li>
            <a href="">上一页</a>
          </li>
          <li>
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">下一页</a>
          </li>
        </div> -->
    
<div class="block">
  <span class="demonstration">大于 7 页时的效果</span>
  <el-pagination
    @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
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
      pathName: "",
      list: []
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
    handleSizeChange(e){
console.log(e)
    },
    handleCurrentChange(e){
console.log(e)
    },
    getInfo(){
      this.$axios.get("/api/home.json").then(result => {
        if(result.data.status === 0){
          this.list = result.data.news;
          console.log(this.list);
        }else{
          alert("faild to connect servers,please check internet connection")
        }
      })
    }

  },
  created(){
    this.getInfo();
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
    .newsListTable {
      margin-left: 50px;
      margin-top: 10px;
      font-size: 14px;
      line-height: 50px;
      .newsList {
        list-style: none;
        .newsBox {
          .newsTitle {
          }
          .newsDate {
            float: right;
          }
        }
      }
    }
    .page {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 30px;
      li {
        background-color: gray;
        border: 7px solid gray;
        font-size: 20px;
        color: white;
        list-style: none;
        margin-right: 10px;
        width: 60px;
        text-align: center;
        a {
          font-size: 10px;
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}
</style>