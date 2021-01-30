<template>
  <div class="productintroduction">
    <!-- 头部 -->
    <Header :headerData="headerData" />
    <!-- 导航 -->
    <div class="nav">
      <div
        class="nav-item"
        @click="
          On1();
          goProductIntroduction();
        "
      >
        <img
          style="width: 0.6rem; height:0.6rem; margin-left: 0.1rem"
          src="../assets/img/icon-1.png"
          alt
        />
        <span :class="isOn1">全频道获客</span>
      </div>
      <div
        class="nav-item"
        @click="
          On2();
          goTransform();
        "
      >
        <p class="nav-circle">
          <img src="../assets/img/icon-2.png" alt />
        </p>
        <span :class="isOn2">私域流量转换</span>
      </div>
      <div
        class="nav-item"
        @click="
          On3();
          goManage();
        "
      >
        <p class="nav-circle">
          <img src="../assets/img/icon-3.png" alt />
        </p>
        <span :class="isOn3">销售客资管理</span>
      </div>
      <div
        class="nav-item"
        @click="
          On4();
          goInspire();
        "
      >
        <p class="nav-circle">
          <img
            style="width:0.25rem; height:0.25rem;"
            src="../assets/img/icon-4.png"
            alt
          />
        </p>
        <span :class="isOn4">团队销售激励</span>
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
            <dt>
              <img src="../assets/img/01.png" alt />
              <div class="title">
                <p>多频道获客</p>
                <p>激活用户市场</p>
              </div>
            </dt>
            <dd>
              小程序、公众号、朋友圈、微信社群生态圈激活12亿用户市场。线上线下互联激发企业活力，助力企业建立专属客户流量池。
            </dd>
          </dl>
          <img src="../assets/img/huoke-1.png" />
        </div>
        <div class="f9">
          <div class="case">
            <img src="../assets/img/huoke-2.png" />
            <dl>
              <dt>
                <img src="../assets/img/02.png" alt />
                <div class="title">
                  <p>裂变工具</p>
                  <p>助力客资转换</p>
                </div>
              </dt>
              <dd>
                拆红包，敲金蛋，拼团，裂变玩不停，百种玩法为营销保驾护航，为传统获客添新动力。
              </dd>
            </dl>
          </div>
        </div>
        <div class="case">
          <dl>
            <dt>
              <img src="../assets/img/03.png" alt />
              <div class="title">
                <p>游戏化管理</p>
                <p>促进团队激情</p>
              </div>
            </dt>
            <dd>
              分享、裂变、砍价、拼单你以为的营销都是打怪升级，游戏化管理，趣味性工作，让工作生动有趣，不再乏味无趣。
            </dd>
          </dl>
          <img src="../assets/img/huoke-3.png" />
        </div>
        <div class="f9">
          <div class="case">
            <img src="../assets/img/huoke-4.png" />
            <dl>
              <dt>
                <img src="../assets/img/04.png" alt />
                <div class="title">
                  <p>微信生态</p>
                  <p>打开信息管理</p>
                </div>
              </dt>
              <dd>
                为企业快速搭建自己的小程序官网，构建客户信任关系。根据企业商户属性推荐个性化活动定制。为客资裂变建立坚实基础。
              </dd>
            </dl>
          </div>
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
    <!-- 微信客服 -->
    <Weixinkefu />
    <!-- 底部 -->
    <Footer :footerData="footerData" />
  </div>
</template>

<script>
import Header from "../components/Header";
import Weixinkefu from "../components/Weixinkefu";
import Footer from "../components/Footer";

export default {
  name: "ProductIntroduction",
  components: {
    Header,
    Weixinkefu,
    Footer,
  },
  data() {
    return {
      headerData: {
        isOn1: "",
        isOn2: "on",
        isOn3: "",
        isOn4: "",
        isOn5: "",
        isOn6: "",
      },
      footerData: {
        title: "限时免费！ 距离销冠团队只差一步",
      },
      isOn1: "on",
      isOn2: "",
      isOn3: "",
      isOn4: "",
    };
  },
  methods: {
    goTransform() {
      this.$router.push("/transform");
    },
    goManage() {
      this.$router.push("/manage");
    },
    goInspire() {
      this.$router.push("/inspire");
    },
    On1() {
      this.isOn1 = "on";
      this.isOn2 = "";
      this.isOn3 = "";
      this.isOn4 = "";
    },
    On2() {
      this.isOn1 = "";
      this.isOn2 = "on";
      this.isOn3 = "";
      this.isOn4 = "";
    },
    On3() {
      this.isOn1 = "";
      this.isOn2 = "";
      this.isOn3 = "on";
      this.isOn4 = "";
    },
    On4() {
      this.isOn1 = "";
      this.isOn2 = "";
      this.isOn3 = "";
      this.isOn4 = "on";
    },
  },
};
</script>

<style lang="scss" scoped>
.productintroduction {
  font-size: 0.16rem;
    // 头部
    .header {
      width: 100%;
      height: 4.1rem;
      color: #fff;
      background-color: #06f;
      margin-top: -0.01rem;
      .headerTop {
        width: 60%;
        margin-left: 21%;
        padding-top: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          width: 0.55rem;
          height: 0.55rem;
          margin-right: 0.2rem;
        }
        .bar {
          width: 60%;
          font-weight: bold;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .header-item {
            text-decoration: none;
          }
          .header-item:link {
            color: #fff;
          }
          .header-item:visited {
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
          outline: none;
        }
        .knowMore:active {
          background-color: #f63;
          color: #fff;
        }
      }
    }
    // 导航
    .nav {
      width: 80%;
      margin-left: 10%;
      margin-top: -0.3rem;
      height: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border: 0.01rem solid #ccc;
      border-radius: 0.1rem;
      .nav-item {
        width: 20%;
        margin-left: 5%;
        margin-right: 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .nav-circle {
          width: 0.4rem;
          height: 0.4rem;
          border: 0.02rem solid #ccc;
          border-radius: 50%;
          background-color: #06f;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 0.1rem;
          img {
            width: 0.3rem;
            height: 0.3rem;
          }
        }
        span {
          letter-spacing: 0.01rem;
        }
      }
      .on {
        color: #06f;
        font-size: 0.18rem;
        font-weight: bold;
      }
    }
    // OneStop
    .oneStop {
      margin-top: 1rem;
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
        .f9 {
          width: 100%;
          height: 3.2rem;
          // padding-top: 0.2rem;
          background-color: #f9f9f9;
        }
        .case {
          width: 70%;
          margin-left: 15%;
          margin-bottom: 0.2rem;
          height: 3.4rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .sort {
            color: #06f;
            font-size: 0.4rem;
            font-weight: bolder;
          }
          img {
            width: 3.5rem;
            height: 2.3rem;
            border: 1px solid #ccc;
          }
          dl {
            height: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-bottom: 0.7rem;
            dt {
              // text-align: left;
              display: flex;
              justify-content: space-between;
              img {
                width: 0.6rem;
                height: 0.6rem;
                border: 0;
              }
              .title {
                margin-right: 0.25rem;
                p {
                  text-align: left;
                  font-size: 0.24rem;
                  font-weight: bolder;
                  letter-spacing: 0.01rem;
                  color: #1b1b1b;
                }
              }
            }
            dd {
              width: 2.6rem;
              text-align: left;
              line-height: 0.25rem;
            }
          }
        }
      }
      .bottom {
        margin-top: 1.5rem;
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
</style>
