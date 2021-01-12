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
      <!-- 导航 -->
      <div class="nav">
        <div class="nav-item">
          <p class="nav-circle"></p>
          <span>全频道获客</span>
        </div>
        <div class="nav-item">
          <p class="nav-circle"></p>
          <span>私域流量转换</span>
        </div>
        <div class="nav-item">
          <p class="nav-circle"></p>
          <span>销售客资管理</span>
        </div>
      </div>
      <!-- OneStop -->
      <div class="oneStop">
        <div class="top">
          <h5>引流裂变营销一步到位</h5>
          <p class="question">
            获客裂变不是问题
          </p>
          <div class="case">
            <dl>
              <dt>全频道助力用户增长</dt>
              <dd>小程序、公众号、朋友圈、微信群助力激活用户市场</dd>
            </dl>
            <img src="../assets/img/logo.png" />
          </div>
          <div class="case">
            <img src="../assets/img/logo.png" />
            <dl>
              <dt>多种玩法助力用户增长</dt>
              <dd>拆红包，敲金蛋，拼团，裂变玩不停，助力用户粉丝有效增长</dd>
            </dl>
          </div>
          <div class="case">
            <img src="../assets/img/logo.png" />
            <dl>
              <dt>多种玩法助力用户增长</dt>
              <dd>拆红包，敲金蛋，拼团，裂变玩不停，助力用户粉丝有效增长</dd>
            </dl>
          </div>
          <div class="case">
            <img src="../assets/img/logo.png" />
            <dl>
              <dt>多种玩法助力用户增长</dt>
              <dd>拆红包，敲金蛋，拼团，裂变玩不停，助力用户粉丝有效增长</dd>
            </dl>
          </div>
        </div>
        <div class="bottom">
          <div class="comer">
            <dl>
              <dt>10000+中小企业的信赖选择</dt>
              <dd>
                已覆盖教育、企业服务、互联网、地产家装、招商加盟、医美健康、汽车等行业
              </dd>
            </dl>
            <img src="../assets/img/comer.png" alt="" />
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
  methods: {
    goAbout() {
      this.$router.replace("/aboutus");
    },
  },
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
    // 导航
    .nav{
      width: 60%;
      margin-left: 20%;
      margin-top: -0.3rem;
      height: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border: 0.01rem solid #ccc;
      border-radius: 0.1rem;
      .nav-item{
        width: 20%;
        margin-left: 5%;
        display: flex;
      }
    }
    // OneStop
    .oneStop {
      .top {
        h5 {
          font-size: 0.3rem;
          display: block;
          padding-top: 0.5rem;
          padding-bottom: 0.15rem;
        }
        .question {
          width: 40%;
          margin-left: 30%;
          color: #000;
          font-size: 0.2rem;
          margin-bottom: 0.6rem;
          letter-spacing: 0.01rem;
        }
        .case {
          width: 56%;
          margin-left: 22%;
          height: 3.4rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          img {
            width: 3.5rem;
            height: 2.3rem;
            border: 1px solid #ccc;
          }
          dl {
            height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            dt {
              text-align: left;
              font-size: 0.2rem;
              font-weight: bold;
              color: #1b1b1b;
            }
            dd {
              width: 2.5rem;
              text-align: left;
            }
          }
        }
      }
      .bottom {
        margin-top: 2.5rem;
        margin-bottom: 0.5rem;
        .comer {
          margin-top: 0.15rem;
          dl {
            margin-bottom: 0.2rem;
            dt {
              font-size: 0.2rem;
              font-weight: bold;
              margin-bottom: 0.1rem;
            }
          }
          img {
            width: 8.6rem;
          }
        }
      }
    }
  }
}
</style>
