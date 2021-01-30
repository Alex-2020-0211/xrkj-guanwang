<template>
  <div class="productintroduction">
    <!-- 头部 -->
    <Header :headerData="headerData" />
    <!-- 多平台获客 -->
    <div class="customer">
      <dl>
        <dt>顾客走，难留存 ？</dt>
        <dd>流量有效掌控，客资转换不用愁</dd>
      </dl>
      <button class="mianfei" @click="tiyan()">免费体验</button>
      <img class="cust" src="../../assets/img/customer.png" alt="" />
    </div>
    <!-- 导航 -->
    <div class="nav">
      <div class="nav-box">
        <div
          :class="isOn1 == true ? 'on' : 'nav-item'"
          @click="
            On1();
            goProductIntroduction();
          "
        >
          <img
            style="margin-right:0.05rem;"
            src="../../assets/img/icon-1.png"
            alt
          />
          <span :class="isOn1">全频道获客</span>
        </div>
        <div
          :class="isOn2 == true ? 'on' : 'nav-item'"
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
          :class="isOn3 == true ? 'on' : 'nav-item'"
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
          :class="isOn4 == true ? 'on' : 'nav-item'"
          @click="
            On4();
            goInspire();
          "
        >
          <p class="nav-circle">
            <img src="../../assets/img/icon-4.png" alt />
          </p>
          <span :class="isOn4">团队销售激励</span>
        </div>
      </div>
    </div>
    <!-- OneStop -->
    <div class="oneStop">
      <div class="top">
        <h5>用户就是最好的广告</h5>
        <p class="question">
          获客-转化-裂变玩转你的私域流量
        </p>
        <div class="case">
          <dl>
            <dt>
              <img src="../../assets/img/01.png" alt />
              <div class="title">
                <p>身未动，心已远</p>
                <p>客资自己找上门</p>
              </div>
            </dt>
            <dd>
              为销售提供不同的素材及内容，搭建企业和用户之前的互动桥梁，用社交的方式获取订单。
            </dd>
          </dl>
          <img src="../../assets/img/zhuanhua-1.png" />
        </div>
        <div class="f9">
          <div class="case">
            <img src="../../assets/img/zhuanhua-2.png" />
            <dl>
              <dt>
                <img src="../../assets/img/02.png" alt />
                <div class="title">
                  <p>精准定位</p>
                  <p>让交易变得简单</p>
                </div>
              </dt>
              <dd>
                朋友圈、公众号、推文、答卷协助精准定位用户身份，实时洞察用户习惯，让销售如虎添翼。
              </dd>
            </dl>
          </div>
        </div>
        <div class="case">
          <dl>
            <dt>
              <img src="../../assets/img/03.png" alt />
              <div class="title">
                <p>高效互动</p>
                <p>让效果显而易见</p>
              </div>
            </dt>
            <dd>
              销售只有地推面谈？让数据说话，通过用户行为有效促进企业与用户间的有效互动，为团队赋能，让销售高效。
            </dd>
          </dl>
          <img src="../../assets/img/zhuanhua-3.png" />
        </div>
        <div class="f9">
          <div class="case">
            <img src="../../assets/img/zhuanhua-4.png" />
            <dl>
              <dt>
                <img src="../../assets/img/04.png" alt />
                <div class="title" style="margin-right: 0.42rem;">
                  <p>客户流转</p>
                  <p>用心做转换</p>
                </div>
              </dt>
              <dd>
                根据用户信息建立基础数据库，员工针对不同用户建立标签库。通过一系列客户自动流转功能，帮助企业提升客户流转速度和利用效率。
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="bottom">
        <!-- 合作伙伴 -->
        <div class="partners">
          <p>
            <img class="pan1" src="../../assets/img/pan-1.png" alt="" />
          </p>
          <img src="../../assets/img/pan-2.png" alt="" />
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
      isOn2: true,
      isOn3: false,
      isOn4: false,
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
        height: 3.4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0.2rem;
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
      .partners {
        height: 6.4rem;
        .pan1 {
          margin-top: 0.9rem;
          margin-bottom: 0.3rem;
        }
      }
    }
  }
}
</style>
