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
          <button class="mianfei">{{ headerData.free }}</button>
        </div>
        <div class="headerMain">
          <div class="theme">
            <dl>
              <dt v-if="headerData.title">{{ headerData.title }}</dt>
              <dd v-if="headerData.content">{{ headerData.content }}</dd>
            </dl>
            <p class="jianjie" v-if="headerData.detail">
              {{ headerData.detail }}
            </p>
            <button class="knowMore" v-if="headerData.immediately">
              {{ headerData.immediately }}
            </button>
          </div>
          <img
            class="mainImg"
            v-if="headerData.path"
            :src="headerData.path"
            alt
          />
        </div>
      </div>
      <!-- 关于NICETEAM -->
      <div class="about"></div>
      <!-- 底部 -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "AboutUs",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      url: require("../assets/img/fuli.png"),
      headerData: {
        free: "免费试用",
        title: "NICETEAM",
        content: "激活团队管理为绩效赋能",
        detail: "",
        immediately: "",
        path: "1",
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
    // 头部
    .header {
      width: 100%;
      height: 4.5rem;
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
        margin-top: 0.35rem;
        margin-left: 20%;
        display: flex;
        justify-content: space-between;
        .theme {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          dl {
            dt {
              font-size: 0.2rem;
              font-weight: bold;
              text-align: left;
              margin-bottom: 0.03rem;
            }
            dd {
              text-align: left;
            }
          }
          .jianjie {
            width: 3rem;
            text-align: left;
          }
          .knowMore {
            width: 1.5rem;
            height: 0.5rem;
            color: #fff;
            font-size: 0.18rem;
            letter-spacing: 0.02rem;
            background-color: #f63;
            border: 0;
            border-radius: 0.05rem;
          }
        }
        .mainImg {
          width: 4.2rem;
          height: 2.7rem;
        }
      }
    }
    // 关于NICETEAM
    .about {
      height: 13.63rem;
    }
  }
}
</style>
