<template>
  <div class="aboutus">
    <div class="border">
      <!-- 头部 -->
      <div class="header">
        <div class="headerTop">
          <p class="bar">
            <img class="logo" src="../assets/img/logo.png" alt />
            <a>首页</a>
            <a>产品介绍</a>
            <a>解决方案</a>
            <a>客户案例</a>
            <a>关于</a>
          </p>
          <button class="mianfei">免费试用</button>
        </div>
        <div class="headerMain">
          <div class="theme">
            <dl>
              <dt>“ 对工作上瘾? ”</dt>
              <dd>让销售上瘾，让团队带劲</dd>
            </dl>
            <button class="knowMore">了解一下</button>
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
            <img src="../assets/img/logo.png" />
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
            <img src="../assets/img/logo.png" />
          </div>
        </div>
        <!-- middle -->
        <div class="reasonM">
            <div class="reason-box">
                <div class="reason-box-item">
                    <div class="box-top"></div>
                    <div class="box-bottom"></div>
                </div>
            </div>
        </div>
        <!-- bottom -->
        <div class="reasonB">
          <h5>源于客户信赖</h5>
          <p>源于用户信赖，助力企业高效管理</p>
          <div class="accordion"></div>
        </div>
      </div>
      <!-- 两边盒子 -->
      <div class="box"></div>
      <div class="box" style="right:0;"></div>
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
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.aboutus {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6.06%;
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
        }
        .mianfei {
          width: 1rem;
          height: 0.3rem;
          color: #fff;
          border: 0.01rem solid #fff;
          border-radius: 0.05rem;
          background-color: #7fb2ff;
          margin-right: 0.4rem;
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
            font-size: 0.2rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 0.15rem;
            letter-spacing: 0.02rem;
          }
          dd {
            font-size: 0.18rem;
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
      height: 17.8rem;
      margin-bottom: 1.2rem;
      .reasonT {
        h5 {
          font-size: 0.24rem;
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
        margin-left: -2px;
        margin-right: -1px;
        .reason-box{
            width: 96%;
            margin-left: 2%;
            height: 2rem;
            background-color: #169bd5;
        }
      }
      .reasonB {
        h5 {
          font-size: 0.24rem;
          display: block;
          letter-spacing: 0.02rem;
          padding-bottom: 0.05rem;
          font-weight: bold;
          margin-top: 0.3rem;
          margin-bottom: 0.05rem;
        }
        .accordion {
          width: 60%;
          margin-left: 20%;
          height: 3.135rem;
          background-color: rgb(77, 58, 180);
          margin-top: 0.3rem;
        }
      }
    }
    // 两边盒子
    .box {
      width: 1.35rem;
      height: 2.245rem;
      background-color: #f00;
      position: absolute;
      top: 8rem;
    }
  }
}
</style>
