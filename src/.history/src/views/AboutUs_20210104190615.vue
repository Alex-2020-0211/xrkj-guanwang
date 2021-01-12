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
              <dt>NICETEAM</dt>
              <dd>激活团队管理</dd>
              <dd>为绩效赋能</dd>
            </dl>
          </div>
          <img class="mainImg" src="../assets/img/logo.png" alt />
        </div>
      </div>
      <!-- 关于NICETEAM -->
      <div class="about">
        <h5>关于</h5>
      </div>
      <!-- 底部 -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  name: "AboutUs",
  components: {
    Footer,
  },
  data() {
    return {};
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
        justify-content: space-around;
        align-items: center;
        dl {
          dt {
            font-size: 0.2rem;
            font-weight: bold;
            text-align: left;
            margin-bottom: 0.05rem;
          }
          dd {
            font-size: 0.18rem;
            letter-spacing: 0.02rem;
            text-align: left;
            margin-bottom: 0.02rem;
          }
        }
        .mainImg {
          width: 4.0rem;
          height: 2.5rem;
          margin-right: 0.3rem;
          margin-top: 0.25rem;
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
