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
        <div class="page">
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
      list: [
        {
          id: 0,
          title: "工信部印发《内燃机再制造推进计划》",
          date: "2016/08/05"
        },
        {
          id: 1,
          title: "保守预测 2011轻客行业将重回个位数增长",
          date: "2016/08/05"
        },
        {
          id: 2,
          title: "汽车岁末大回馈火热进行",
          date: "2016/08/05"
        },
        {
          id: 3,
          title: "油价上涨 燃油税开征改变我们的购车理念",
          date: "2016/08/05"
        },
        {
          id: 4,
          title: "新能源车核心零部件：放手胜过庇护",
          date: "2016/08/05"
        },
        {
          id: 5,
          title: "国家发改委将在全国范围内严查成品油变相涨价",
          date: "2016/08/05"
        },
        {
          id: 6,
          title: "公司召开2013年质量月启动会》",
          date: "2016/08/05"
        },
        {
          id: 7,
          title: "公司进行工序审核",
          date: "2016/08/05"
        }
      ]
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