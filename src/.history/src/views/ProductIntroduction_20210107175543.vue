<template>
  <div class="productintroduction">
    <div class="border">
      <!-- 头部 -->
      <div class="header">
        <div class="headerTop">
          <p class="bar">
            <img class="logo" src="../assets/img/logo.png" alt />
            <a href="http://localhost:8080/#/">首页</a>
            <a href="http://localhost:8080/#/productintroduction">产品介绍</a>
            <a href="http://localhost:8080/#/solutions">解决方案</a>
            <a href="http://localhost:8080/#/customercase">客户案例</a>
            <a href="http://localhost:8080/#/aboutus">关于</a>
          </p>
          <button class="mianfei">免费试用</button>
        </div>
        <div class="headerMain">
          <div class="theme">
            <dl>
              <dt>多平台获客</dt>
              <dd>精准引流就那么简单</dd>
            </dl>
            <button class="knowMore" @click="goAbout()">立刻体验</button>
          </div>
        </div>
      </div>
      
      <!-- 底部 -->
      <Footer :footerData="footerData" />
    </div>
  </div>
</template>

<script>
// import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "ProductIntroduction",
  components: {
    // Header,
    Footer,
  },
  data() {
    return {
      url: require("../assets/img/fuli.png"),
      headerData: {
        free: "免费试用",
        title: "管理也能玩出味 ?",
        content: "",
        detail:
          "NICETEAM : 让管理不再沉闷，工作玩味不停，全国上千家中小企业的销售福星",
        immediately: "立即咨询",
        path: "1",
      },
      footerData: {
        title: "限时免费！ 距离销冠团队只差一步",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.productintroduction {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6%;
    border: 0.01rem solid #000;
    // 头部
    .header {
      width: 100%;
      height: 3.5rem;
      color: #fff;
      background-color: #06f;
      .headerTop {
        width: 60%;
        margin-left: 21%;
        padding-top: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          width: 0.7rem;
          height: 0.55rem;
        }
        .bar {
          width: 60%;
          font-weight: bold;
          display: flex;
          justify-content: space-around;
          align-items: center;
          a {
            text-decoration: none;
          }
          a:link {
            color: #fff;
          }
          a:visited {
            color: #fff;
          }
        }
        .mianfei {
          width: 1.2rem;
          height: 0.4rem;
          font-size: 0.18rem;
          color: #fff;
          border: 0.01rem solid #fff;
          border-radius: 0.05rem;
          background-color: #78df92;
          margin-right: 0.4rem;
          outline: none;
        }
        .mianfei:active {
          border: 0.01rem solid #06f;
        }
      }
      .headerMain {
        width: 60%;
        height: 2.7rem;
        margin-left: 20%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        dl {
          dt {
            font-size: 0.24rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 0.15rem;
            letter-spacing: 0.02rem;
          }
          dd {
            font-size: 0.16rem;
            letter-spacing: 0.01rem;
            text-align: left;
            margin-bottom: 0.4rem;
          }
        }
        .knowMore {
          width: 1.5rem;
          height: 0.4rem;
          color: #06f;
          font-size: 0.18rem;
          letter-spacing: 0.02rem;
          background-color: #fff;
          border: 0;
          border-radius: 0.05rem;
        }
      }
    }
  }
}
</style>
