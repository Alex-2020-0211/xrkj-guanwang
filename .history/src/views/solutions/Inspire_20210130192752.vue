<template>
  <div class="productintroduction">
    <!-- 头部 -->
    <Header :headerData="headerData" />
    <!-- 多平台获客 -->
    <div class="customer">
      <dl>
        <dt>多平台获客</dt>
        <dd>精准引流就这么简单</dd>
      </dl>
      <button class="mianfei" @click="tiyan()">免费体验</button>
      <img class="cust" src="../../assets/img/customer.png" alt="" />
    </div>
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
          src="../../assets/img/icon-1.png"
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
          <img src="../../assets/img/icon-2.png" alt />
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
          <img src="../../assets/img/icon-3.png" alt />
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
            src="../../assets/img/icon-4.png"
            alt
          />
        </p>
        <span :class="isOn4">团队销售激励</span>
      </div>
    </div>
    <!-- OneStop -->
    <div class="oneStop">
      <div class="top">
        <h5>刷怪升级打副本</h5>
        <p class="question">
          工作不再乏味无趣
        </p>
        <div class="case">
          <dl>
            <dt>
              <img src="../../assets/img/01.png" alt />
              <div class="title" style="margin-right: 0.3rem">
                <p>定制销售目标</p>
                <p>放飞星愿</p>
              </div>
            </dt>
            <dd>
              niceteam游戏化管理系统，为员工提供个性化任务体系，激活销售工作。
            </dd>
          </dl>
          <img src="../../assets/img/inspire-1.png" />
        </div>
        <div class="f9">
          <div class="case">
            <img src="../../assets/img/inspire-2.png" />
            <dl>
              <dt>
                <img src="../../assets/img/02.png" alt />
                <div class="title">
                  <p>星愿任务系统</p>
                  <p>让销售灵活高效</p>
                </div>
              </dt>
              <dd>
                销售任务智能派发，员工完成任务即可激活星愿点数，系统实时记录，工作就像刷怪升级，奖励即时反馈。
              </dd>
            </dl>
          </div>
        </div>
        <div class="case">
          <dl>
            <dt>
              <img src="../../assets/img/03.png" alt />
              <div class="title">
                <p>星芒集点兑换</p>
                <p>让星愿发光</p>
              </div>
            </dt>
            <dd>
              niceteam星选为员工精选了各种精美心愿礼物，从入职就开始悉心服务。
            </dd>
          </dl>
          <img src="../../assets/img/inspire-3.png" />
        </div>
        <div class="f9">
          <div class="case">
            <img src="../../assets/img/inspire-4.png" />
            <dl>
              <dt>
                <img src="../../assets/img/04.png" alt />
                <div class="title">
                  <p>员工用心工作</p>
                  <p>星愿官实时反馈</p>
                </div>
              </dt>
              <dd>
                员工心不在焉？团队黯淡无光？星愿官实时反馈，让员工重获激情。
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
          <img src="../../assets/img/comer.png" alt="" />
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
import Header from "../../components/Header";
import Weixinkefu from "../../components/Weixinkefu";
import Footer from "../../components/Footer";

export default {
  name: "ProductIntroduction",
  components: {
    Header,
    Weixinkefu,
    Footer,
  },
  data() {
    return {
      url: require("../../assets/img/fuli.png"),
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
      isOn1: false,
      isOn2: false,
      isOn3: false,
      isOn4: true,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goProductIntroduction() {
      this.$router.push("/productintroduction");
    },
    goSolutions() {
      this.$router.push("/solutions");
    },
    goCustomercase() {
      this.$router.push("/customercase");
    },
    goBlog() {
      this.$router.push("/blog");
    },
    goAbout() {
      this.$router.push("/aboutus");
    },
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
      this.isOn1 = true;
      this.isOn2 = false;
      this.isOn3 = false;
      this.isOn4 = false;
    },
    On2() {
      this.isOn1 = false;
      this.isOn2 = true;
      this.isOn3 = false;
      this.isOn4 = false;
    },
    On3() {
      this.isOn1 = false;
      this.isOn2 = false;
      this.isOn3 = true;
      this.isOn4 = false;
    },
    On4() {
      this.isOn1 = false;
      this.isOn2 = false;
      this.isOn3 = false;
      this.isOn4 = true;
    },
    tiyan() {
      this.$router.push("/connect");
    },
  },
};
</script>

<style lang="scss" scoped>
.productintroduction {
  font-size: 0.16rem;
  // 多平台获客
  .customer {
    height: 3rem;
    background-color: #4a4bda;
    position: relative;
    dl {
      padding-top: 0.6rem;
      color: #fff;
      dt {
        font-size: 0.4rem;
        margin-bottom: 0.2rem;
      }
      dd {
        font-size: 0.18rem;
        margin-bottom: 0.4rem;
      }
    }
    .mianfei {
      width: 1.4rem;
      height: 0.4rem;
      font-size: 0.14rem;
      color: #fff;
      border: 0;
      border-radius: 0.2rem;
      background-color: #f8892b;
      outline: none;
    }
    .mianfei:active {
      border: 0.02rem solid #aaa;
    }
    .cust {
      position: absolute;
      top: 0;
      left: 18%;
    }
  }
  // 导航
  .nav {
    width: 100%;
    height: 0.6rem;
    background-color: #f4f1ff;
    .nav-box {
      width: 60%;
      margin-left: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      .nav-item {
        height: 100%;
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .nav-circle {
          // background-color: #06f;
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
        height: 100%;
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #06f;
        font-size: 0.18rem;
        font-weight: bold;
        background-color: #fff;
      }
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
              // margin-right: 0.25rem;
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
