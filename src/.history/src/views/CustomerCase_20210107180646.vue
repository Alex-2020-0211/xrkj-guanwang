<template>
  <div class="customercase">
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
              <dt>“ 对工作上瘾? ”</dt>
              <dd>让销售上瘾，让团队带劲</dd>
            </dl>
            <button class="knowMore" @click="goAbout()">了解一下</button>
          </div>
        </div>
      </div>
      <!-- 选择NICETEAM的理由 -->
      <div class="reason">
        <!-- top -->
        <div class="reasonT">
          <h5>他们选择NICETEAM的理由</h5>
          <p class="question">
            随着90后、00后进入职场，中小企业在员工管理方面遇到了新的难题和痛点，并阻碍了企业的发展。
          </p>
          <div class="case">
            <img src="../assets/img/case-1.png" />
            <div class="told">
              <p class="fs50 left">“</p>
              <p class="left">我从来没想过，管理会这么有趣且高效!</p>
              <p class="fs50 right">”</p>
              <p class="person" style="margin-top: 0.4rem;">
                <strong>李天昊</strong><span>盛利金融</span>
              </p>
            </div>
          </div>
          <div class="case">
            <div class="told">
              <p class="fs50 left">“</p>
              <p class="left">
                从0到1，NICETEAM给予了我太大的帮助，游戏化管理的模式让我从怀疑到信赖到今天的喜欢
              </p>
              <p class="fs50 right">”</p>
              <p class="person">
                <strong>陈慧慧</strong><span>喜盈门科技</span>
              </p>
            </div>
            <img src="../assets/img/case-2.png" />
          </div>
        </div>
        <!-- middle -->
        <div class="reasonM">
          <div class="content">
            <div class="content-item" style="margin-left: 0.5rem;">
              <p class="circle-item"></p>
              <dl>
                <dt>专业的团队</dt>
                <dd>提供专业的技术团队和设计团队为用户提供周全的保障</dd>
              </dl>
            </div>
            <div class="content-item">
              <p class="circle-item"></p>
              <dl>
                <dt>优质的商家</dt>
                <dd>严选品牌供应商，放大福利价值，提升员工对福主观能动性。</dd>
              </dl>
            </div>
            <div class="content-item" style="margin-right: 0.55rem;">
              <p class="circle-item"></p>
              <dl>
                <dt>销售行为实时采集</dt>
                <dd>
                  SCRM销售场景的数据采集为你研判员工和客户提供精准数据支撑，有效提高业绩
                </dd>
              </dl>
            </div>
          </div>
          <div class="reason-box">
            <div class="reason-box-item item1"></div>
            <div class="reason-box-item"></div>
            <div class="reason-box-item item3"></div>
            <div class="reason-box-item item4"></div>
          </div>
        </div>
        <!-- bottom -->
        <div class="reasonB">
          <h5>源于客户信赖</h5>
          <p>源于用户信赖，助力企业高效管理</p>
          <div class="accordion">
            <!-- <div class="accordion-item">
              <p>
                从0到1，NICETEAM给予了我太大的帮助，游戏化管理的模式让我从怀疑到信赖到今天的喜欢，团队业绩越来越好，员工也爱上了我们这个小家庭
              </p>
              <div class="accordion-bottom">
                <p class="accordion-circle"></p>
                <strong>张立</strong>
                <span>禧多多科技</span>
              </div>
            </div> -->
            <el-carousel
              :interval="4000"
              type="card"
              height="3.135rem"
              autoplay="auto"
              arrow="never"
            >
              <el-carousel-item>
                <div class="accordion-item">
                  <p>
                    从0到1，NICETEAM给予了我太大的帮助，游戏化管理的模式让我从怀疑到信赖到今天的喜欢，团队业绩越来越好，员工也爱上了我们这个小家庭
                  </p>
                  <div class="accordion-bottom">
                    <p class="accordion-circle"></p>
                    <strong>张立</strong>
                    <span>禧多多科技</span>
                  </div>
                </div>
                <!-- <h3 class="medium">{{ item }}</h3> -->
              </el-carousel-item>
              <el-carousel-item>
                <div class="accordion-item">
                  <p>
                    从0到1，NICETEAM给予了我太大的帮助，游戏化管理的模式让我从怀疑到信赖到今天的喜欢，团队业绩越来越好，员工也爱上了我们这个小家庭
                  </p>
                  <div class="accordion-bottom">
                    <p class="accordion-circle"></p>
                    <strong>张立</strong>
                    <span>禧多多科技</span>
                  </div>
                </div>
                <!-- <h3 class="medium">{{ item }}</h3> -->
              </el-carousel-item>
              <el-carousel-item>
                <div class="accordion-item">
                  <p>
                    从0到1，NICETEAM给予了我太大的帮助，游戏化管理的模式让我从怀疑到信赖到今天的喜欢，团队业绩越来越好，员工也爱上了我们这个小家庭
                  </p>
                  <div class="accordion-bottom">
                    <p class="accordion-circle"></p>
                    <strong>张立</strong>
                    <span>禧多多科技</span>
                  </div>
                </div>
                <!-- <h3 class="medium">{{ item }}</h3> -->
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <!-- 两边盒子
      <div class="box"></div>
      <div class="box" style="right:0;"></div> -->
      <!-- 底部 -->
      <Footer :footerData="footerData" />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  name: "CustomerCase",
  components: {
    Footer,
  },
  data() {
    return {
      footerData: {
        title: "限时免费！ 立刻定制企业管理解决方案",
      },
      auto:true,
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
.customercase {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6%;
    border: 0.01rem solid #000;
    position: relative;
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
          background-color: #78DF92;
          margin-right: 0.4rem;
          outline: none;
        }
        .mianfei:active{
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
    // 选择NICETEAM的理由
    .reason {
      height: 18.8rem;
      margin-bottom: 1.2rem;
      .reasonT {
        h5 {
          font-size: 0.3rem;
          display: block;
          padding-top: 0.5rem;
          padding-bottom: 0.15rem;
        }
        .question {
          width: 40%;
          margin-left: 30%;
          color: #66667f;
          margin-bottom: 0.2rem;
        }
        .case {
          width: 80%;
          margin-left: 10%;
          height: 3.4rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          img {
            width: 3.5rem;
            height: 2.3rem;
            border: 1px solid #ccc;
          }
          .told {
            width: 3rem;
            height: 2.3rem;
            p {
              width: 2rem;
            }
            .fs50 {
              font-size: 0.5rem;
            }
            .left {
              text-align: left;
            }
            .right {
              text-align: right;
            }
            .person {
              display: flex;
              justify-content: space-between;
              strong {
                font-weight: bold;
                font-size: 0.2rem;
              }
            }
          }
        }
      }
      .reasonM {
        height: 4.3rem;
        border: 0.3rem solid #ccc;
        margin-top: 0.6rem;
        margin-left: -0.02rem;
        margin-right: -0.01rem;
        .content {
          width: 98%;
          margin-left: 1%;
          display: flex;
          justify-content: space-around;
          margin-top: 0.6rem;
          .content-item {
            width: 2.9rem;
            height: 3.46rem;
            background-color: #fff;
            z-index: 999;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            dl {
              width: 1.45rem;
              dt {
                font-size: 0.18rem;
                margin-top: -1.4rem;
              }
              dd {
                text-align: left;
                margin-top: 0.2rem;
              }
            }
            .circle-item {
              width: 0.8rem;
              height: 0.8rem;
              border: 0.02rem solid #878787;
              border-radius: 50%;
              margin-bottom: 1.3rem;
            }
          }
        }
        .reason-box {
          width: 94%;
          margin-left: 1.5%;
          height: 1.75rem;
          background-color: #169bd5;
          position: absolute;
          top: 15.3rem;
          left: 0.2rem;
          .reason-box-item {
            width: 1.83rem;
            height: 1.83rem;
            background-color: #169bd5;
            transform: rotate(30deg);
            position: absolute;
            top: -0.59rem;
            left: 3.1rem;
          }
          .item1 {
            transform: rotate(-30deg);
            left: 0.34rem;
          }
          .item3 {
            transform: rotate(-30deg);
            left: 8.4rem;
          }
          .item4 {
            left: 11.2rem;
          }
        }
      }
      .reasonB {
        h5 {
          font-size: 0.3rem;
          display: block;
          letter-spacing: 0.02rem;
          padding-bottom: 0.05rem;
          font-weight: bold;
          margin-top: 0.6rem;
          margin-bottom: 0.05rem;
        }
        .accordion {
          width: 70%;
          margin-left: 15%;
          height: 3.35rem;
          margin-top: 0.3rem;
          overflow: hidden;
          .accordion-item {
            width: 100%;
            // margin-left: 15%;
            height: 100%;
            background-color: #fff;
            border: 0.01rem solid #ebebeb;
            border-radius: 0.3rem;
            p {
              margin-top: 0.3rem;
              width: 66%;
              margin-left: 17%;
              text-align: left;
              font-size: 0.2rem;
              line-height: 0.42rem;
            }
            .accordion-bottom {
              display: flex;
              justify-content: space-between;
              align-items: center;
              //   margin-top: 0.1rem;
              .accordion-circle {
                width: 0.6rem;
                height: 0.6rem;
                border: 0.02rem solid #878787;
                border-radius: 50%;
                margin-top: 0;
              }
              strong {
                font-weight: bold;
                font-size: 0.26rem;
                margin-left: 0.9rem;
              }
              span {
                font-size: 0.2rem;
                margin-right: 0.9rem;
              }
            }
          }
        }
      }
    }
    // // 两边盒子
    // .box {
    //   width: 1.35rem;
    //   height: 2.245rem;
    //   background-color: #f00;
    //   position: absolute;
    //   top: 8rem;
    // }
  }
}
</style>
