<template>
  <div class="productintroduction">
    <div class="border">
      <!-- 头部 -->
      <div class="header">
        <div class="headerTop">
          <p class="bar">
            <img class="logo" src="../../assets/img/logo.png" alt />
            <a class="header-item" href="javascript:;" @click="goHome()"
              >首页</a
            >
            <a
              class="header-item"
              href="javascript:;"
              @click="goProductIntroduction()"
              >产品介绍</a
            >
            <a class="header-item" href="javascript:;" @click="goSolutions()"
              >解决方案</a
            >
            <a class="header-item" href="javascript:;" @click="goCustomercase()"
              >客户案例</a
            >
            <a class="header-item" href="javascript:;" @click="goBlog()"
              >Nice博客</a
            >
            <a class="header-item" href="javascript:;" @click="goAbout()"
              >关于</a
            >
          </p>
          <button class="mianfei" @click="tiyan()">免费试用</button>
        </div>
        <div class="headerMain">
          <div class="theme">
            <dl>
              <dt>管理也能玩出味？</dt>
              <dd>NICETEAM 让管理不再沉闷，让工作玩味不停</dd>
            </dl>
            <button class="knowMore" @click="tiyan()">立刻体验</button>
          </div>
        </div>
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
          <h5>为销售赋能，为团队添力</h5>
          <p class="question">
            让玩不再是儿戏，让游戏化管理为销售赋能
          </p>
          <div class="case">
            <dl>
              <dt>
                <img src="../../assets/img/01.png" alt />
                <div class="title" style="margin-right: 0.3rem">
                  <p>SCRM</p>
                  <p>优化客户管理</p>
                </div>
              </dt>
              <dd>
                通过销售数据，根据用户行为定义用户画像。利用数据重新定义用户管理，赋能企业销售全新活力。
              </dd>
            </dl>
            <img src="../../assets/img/guanli-1.png" />
          </div>
          <div class="f9">
            <div class="case">
              <img src="../../assets/img/guanli-2.png" />
              <dl>
                <dt>
                  <img src="../../assets/img/02.png" alt />
                  <div class="title">
                    <p>数据分析</p>
                    <p>让销售实时高效</p>
                  </div>
                </dt>
                <dd>
                  让数据说话，让销售先行。实时把握用户行为，关注企业转化情况，跟进员工销售行为。让管理有效透明，让销售有迹可循。
                </dd>
              </dl>
            </div>
          </div>
          <div class="case">
            <dl>
              <dt>
                <img src="../../assets/img/03.png" alt />
                <div class="title">
                  <p>精细化管理</p>
                  <p>比用户先行一步</p>
                </div>
              </dt>
              <dd>
                实时记录用户状态，为企业实时推送用户行为记录，为公司业绩添一把力，助力提高员工积极性。
              </dd>
            </dl>
            <img src="../../assets/img/guanli-3.png" />
          </div>
          <div class="f9">
            <div class="case">
              <img src="../../assets/img/guanli-4.png" />
              <dl>
                <dt>
                  <img src="../../assets/img/04.png" alt />
                  <div class="title">
                    <p>数据沉淀</p>
                    <p>提供持久生命力</p>
                  </div>
                </dt>
                <dd>
                  赋予每一笔订单全新生命力，让数据成为企业最坚实的基础，用管理给予企业最强盛的生命力。
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
  </div>
</template>

<script>
import Weixinkefu from "../../components/Weixinkefu";
import Footer from "../../components/Footer";

export default {
  name: "ProductIntroduction",
  components: {
    Weixinkefu,
    Footer,
  },
  data() {
    return {
      url: require("../../assets/img/fuli.png"),
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
      isOn1: false,
      isOn2: false,
      isOn3: true,
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
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 5.556%;
    border: 0.01rem solid #000;
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
}
</style>
