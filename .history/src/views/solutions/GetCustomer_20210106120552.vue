<template>
  <div class="getcustomer">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <HeaderC :headerData="headerData" />
      <!-- OneStop -->
      <div class="oneStop">
        <div class="top">
          <h5>引流裂变营销一步到位</h5>
          <p class="question">
            获客裂变不是问题
          </p>
          <div class="case">
            <img src="../../assets/img/logo.png" />
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
            <img src="../../assets/img/logo.png" />
          </div>
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
// @ is an alias to /src
import HeaderC from "../../components/Header copy";
import Footer from "../../components/Footer";

export default {
  name: "GetCustomer",
  components: {
    HeaderC,
    Footer,
  },
  data() {
    return {
      headerData: {
        free: "免费试用",
        title: "多平台获客",
        content: "精确引流就那么简单",
        detail: "为销售赋能，为团队添力",
        immediately: "立即体验",
        kefu: "",
        path: "1",
      },
      footerData: {
        title: "限时免费！ 立刻定制企业管理解决方案",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.getcustomer {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6.06%;
    border: 0.01rem solid #000;
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
