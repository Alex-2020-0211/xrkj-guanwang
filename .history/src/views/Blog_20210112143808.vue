<template>
  <div class="blog">
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
            <a href="http://localhost:8080/#/aboutus">Nice博客</a>
            <a href="http://localhost:8080/#/aboutus">关于</a>
          </p>
          <button class="mianfei">免费试用</button>
        </div>
        <div class="headerMain">
          <div class="theme">
            <dl>
              <dt>Nice博客</dt>
            </dl>
          </div>
        </div>
      </div>
      <!-- 导航条 -->
      <div class="nav">
        <a href="">最新文章</a>
        <a href="">客户案例</a>
        <a href="">智能用户运营</a>
        <a href="">数据分析</a>
        <a href="">产品动态</a>
        <a href="">市场活动</a>
        <a href="">资料下载</a>
      </div>
      <!-- 具体内容 -->
      <div class="detail">
        <p>
          <span>当前位置</span>:<span>Niceteam</span> >
          <span>Niceteam博客</span>
        </p>
        <div class="detailContent">
          <div class="detailContent-item">
            <img src="../assets/img/case-1.png" alt="" />
            <div class="right">
              <dl>
                <dt>赋能家居售后服务 数据驱动平台优化及用户运营 | 行业案例</dt>
                <dd>
                  通过深入数据分析，针对性的运营策略及策略攻略，帮助家居售后服务平台提升需要的数量，并通过策略改进逐渐接近平衡的最佳状态。
                </dd>
              </dl>
              <div class="bottom">
                <p class="bottom-left"><img src="" alt="" /> <span>Niceteam 2020-06-18 13: 12</span></p>
                <p class="bottom-right"><img src="" alt="" /> <span>产品运营，用户运营</span></p>
              </div>
            </div>
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
  name: "Blog",
  components: {
    // Header,
    Footer,
  },
  data() {
    return {
      url: require("../assets/img/fuli.png"),
      footerData: {
        title: "限时免费！ 距离销冠团队只差一步",
      },
    };
  },
  methods: {
    goAbout() {
      this.$router.replace("/aboutus");
    },
    goProductIntroduction() {
      this.$router.replace("/productintroduction");
    },
    goTransform() {
      this.$router.replace("/transform");
    },
    goManage() {
      this.$router.replace("/manage");
    },
    On1() {
      this.isOn1 = "on";
      this.isOn2 = "";
      this.isOn3 = "";
    },
    On2() {
      this.isOn1 = "";
      this.isOn2 = "on";
      this.isOn3 = "";
    },
    On3() {
      this.isOn1 = "";
      this.isOn2 = "";
      this.isOn3 = "on";
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6%;
    border: 0.01rem solid #000;
    // 头部
    .header {
      width: 100%;
      height: 4.1rem;
      color: #fff;
      background: linear-gradient(to right, #59c0f6, #887af5);
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
          width: 0.9rem;
          height: 0.3rem;
          font-size: 0.14rem;
          color: #fff;
          border: 0.01rem solid #fff;
          border-radius: 0.05rem;
          background-color: #7fb2ff;
          margin-right: 0.4rem;
          outline: none;
        }
        .mianfei:active {
          border: 0.01rem solid #ccc;
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
            font-size: 0.3rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 0.15rem;
            letter-spacing: 0.03rem;
          }
        }
      }
    }
    // 导航条
    .nav{
        width: 60%;
        margin-left: 20%;
        display: flex;
        justify-content: flex-start;
        a{
            
        }
    }
    // 具体内容
    .detail{

    }
  }
}
</style>
