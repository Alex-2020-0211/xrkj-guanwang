<template>
  <div class="solutions">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <HeaderC :headerData="headerData" />
      <!-- why -->
      <div class="why">
        <div class="why-top">
          <div class="bgc">
            <h5 class="why-top-title">为什么选择NICETEAM?</h5>
            <div class="container">
              <div class="wrap" ref="wrap" style="left:0rem;">
                <div class="why-top-content">
                  <img
                    class="content1"
                    src="../../assets/img/why-content.png"
                    alt=""
                  />
                  <dl>
                    <dt>多平台获客</dt>
                    <dd>
                      平台裂变引流，建立私人客户互客客户池，帮助商家矩阵建立
                    </dd>
                  </dl>
                  <p
                    class="next"
                    @click="
                      toManage();
                      on2();
                    "
                  >
                    <img src="../../assets/img/箭头.png" alt="" />
                  </p>
                </div>
                <div class="why-top-content">
                  <img
                    class="content1"
                    src="../../assets/img/why-content.png"
                    alt=""
                  />
                  <dl>
                    <dt>客户关系管理</dt>
                    <dd>
                      让交易更简单，让沟通更高效 SCRM让销售更精准，让管理
                      更有趣。
                    </dd>
                  </dl>
                  <p
                    class="pre"
                    @click="
                      toHuoke();
                      on1();
                    "
                  >
                    <img src="../../assets/img/左箭头.png" alt="" />
                  </p>
                  <p
                    class="next"
                    @click="
                      toTransform();
                      on3();
                    "
                  >
                    <img src="../../assets/img/箭头.png" alt="" />
                  </p>
                </div>
                <div class="why-top-content">
                  <img
                    class="content1"
                    src="../../assets/img/why-content.png"
                    alt=""
                  />
                  <dl>
                    <dt>私域互动转化</dt>
                    <dd>
                      帮助企业搭建专属的流量池，从 微信生态开始，从12亿用户入手
                      让流量更精确，让裂变更高效。
                    </dd>
                  </dl>
                  <p
                    class="pre"
                    @click="
                      toManage();
                      on2();
                    "
                  >
                    <img src="../../assets/img/左箭头.png" alt="" />
                  </p>
                </div>
              </div>
              <div class="bar">
                <p
                  :class="isOn1"
                  @click="
                    on1();
                    toHuoke();
                  "
                ></p>
                <p
                  :class="isOn2"
                  @click="
                    on2();
                    toManage();
                  "
                ></p>
                <p
                  :class="isOn3"
                  @click="
                    on3();
                    toTransform();
                  "
                ></p>
              </div>
            </div>
          </div>
        </div>
        <div class="why-middle">
          <h5>为不同行业提供多场景服务</h5>
          <p>全场景智慧覆盖，让管理更全面</p>
          <div class="content">
            <div class="content-item" style="margin-left: 0.5rem;">
              <p class="circle-item"></p>
              <dl style="margin-top: -0.3rem;">
                <dt>专业的团队</dt>
                <dd>提供专业的技术团队和设计团队为用户提供周全的保障</dd>
              </dl>
            </div>
            <div class="content-item">
              <p class="circle-item"></p>
              <dl style="margin-top: -0.3rem;">
                <dt>优质的商家</dt>
                <dd>严选品牌供应商，放大福利价值，提升员工对福主观能动性。</dd>
              </dl>
            </div>
            <div class="content-item" style="margin-right: 0.5rem;">
              <p class="circle-item" style="margin-top: 0.15rem;"></p>
              <dl>
                <dt>销售行为实时采集</dt>
                <dd>
                  SCRM销售场景的数据采集为你研判员工和客户提供精准数据支撑，有效提高业绩
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="why-bottom">
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
// @ is an alias to /src
import HeaderC from "../../components/Header copy";
import Weixinkefu from "../../components/Weixinkefu";
import Footer from "../../components/Footer";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Solutions",
  components: {
    HeaderC,
    Weixinkefu,
    Footer,
    Carousel,
    Slide,
  },
  data() {
    return {
      headerData: {
        free: "免费试用",
        title: "用户就是最好的广告",
        content: "获客-转化-裂变玩转你的私域流量",
        detail: "",
        immediately: "立即体验",
        kefu: "联系客服",
        path: require("../../assets/img/toutu.png"),
      },
      footerData: {
        title: "限时免费！ 立刻定制企业管理解决方案",
      },
      isOn1: "on",
      isOn2: "",
      isOn3: "",
      distance: 0.01,
    };
  },
  methods: {
    on1() {
      this.isOn1 = "on";
      this.isOn2 = "";
      this.isOn3 = "";
    },
    on2() {
      this.isOn1 = "";
      this.isOn2 = "on";
      this.isOn3 = "";
    },
    on3() {
      this.isOn1 = "";
      this.isOn2 = "";
      this.isOn3 = "on";
    },
    toHuoke() {
      // console.log(this.$refs.wrap.style.cssText);
      this.$refs.wrap.style.cssText = "left: 0rem;";
    },
    toManage() {
      // console.log(this.$refs.wrap.style.cssText);
      this.$refs.wrap.style.cssText = "left: -8.53rem;";
    },
    toTransform() {
      // console.log(this.$refs.wrap.style.cssText);
      this.$refs.wrap.style.cssText = "left: -17.06rem;";
    },
    auto(){
      this.distance += 0.01;
      this.$refs.wrap.style.cssText = "left: -" + this.distance + "rem;";
      console.log(this.$refs.wrap.style.cssText.match(/\d+(.\d+)?/g))
      // if(this.$refs.wrap.style.cssText < )
    }
  },
  mounted(){
    setTimeout(this.auto,1000)
    // this.timer = setInterval(this.auto,10)
  },
  beforeDestroy(){
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.solutions {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6%;
    border: 0.01rem solid #000;
    // why
    .why {
      height: 15.1rem;
      .why-top {
        height: 6.2rem;
        .bgc {
          height: 4.225rem;
          background-color: #06f;
          .why-top-title {
            font-size: 0.24rem;
            color: #fff;
          }
          .container {
            width: 60%;
            margin-left: 20%;
            margin-top: 0.3rem;
            height: 5.41rem;
            position: relative;
            overflow: hidden;
            .wrap {
              width: 500%;
              height: 5.41rem;
              position: absolute;
              border: 0.01rem solid #ececec;
              // border-radius: 0.1rem;
              .why-top-content {
                float: left;
                width: 8.5rem;
                height: 5.41rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background-color: #fff;
                border: 0.01rem solid #ececec;
                // border-radius: 0.1rem;
                position: relative;
                .content1 {
                  margin-bottom: 0.5rem;
                }
                dl {
                  width: 2.4rem;
                  color: #06f;
                  margin-right: 0.3rem;
                  margin-bottom: 1rem;
                  dt {
                    font-size: 0.22rem;
                    text-align: left;
                    margin-bottom: 0.3rem;
                  }
                  dd {
                    text-align: left;
                    line-height: 0.3rem;
                    letter-spacing: 0.02rem;
                  }
                }
                .pre {
                  width: 0.7rem;
                  height: 0.7rem;
                  background-color: #ccc;
                  opacity: 0.5;
                  border-radius: 50%;
                  position: absolute;
                  top: 2rem;
                  left: 0.3rem;
                  img {
                    width: 0.45rem;
                    height: 0.45rem;
                    margin-top: 0.12rem;
                  }
                }
                .next {
                  width: 0.7rem;
                  height: 0.7rem;
                  background-color: #ccc;
                  opacity: 0.5;
                  border-radius: 50%;
                  position: absolute;
                  top: 2rem;
                  right: 0.3rem;
                  img {
                    width: 0.45rem;
                    height: 0.45rem;
                    margin-top: 0.12rem;
                  }
                }
              }
            }
            .bar {
              position: absolute;
              left: 3.6rem;
              bottom: 0.3rem;
              display: flex;
              p {
                width: 0.2rem;
                height: 0.2rem;
                border-radius: 0.2rem;
                background-color: #80b3ff;
                margin-right: 0.15rem;
              }
              .on {
                width: 0.8rem;
                background-color: #06f;
              }
            }
          }
        }
      }
      .why-middle {
        h5 {
          display: block;
          font-size: 0.24rem;
          font-weight: 450;
          margin-top: 0.2rem;
          margin-bottom: 0.1rem;
        }
        .content {
          width: 70%;
          margin-left: 15%;
          display: flex;
          justify-content: space-around;
          margin-top: 0.6rem;
          margin-bottom: 0.6rem;
          .content-item {
            width: 2rem;
            height: 2.46rem;
            background-color: #dcf1ff;
            border-radius: 0.1rem;
            z-index: 999;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            dl {
              width: 1.45rem;
              dt {
                font-size: 0.18rem;
                font-weight: 500;
              }
              dd {
                text-align: left;
                margin-top: 0.2rem;
              }
            }
            .circle-item {
              width: 0.5rem;
              height: 0.5rem;
              border: 0.02rem solid #878787;
              border-radius: 50%;
              background-color: #fff;
              margin-bottom: -0.2rem;
            }
          }
        }
      }
      .why-bottom {
        .comer {
          margin-top: 1rem;
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
