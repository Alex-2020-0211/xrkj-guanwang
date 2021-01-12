<template>
  <div class="home">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <HeaderC :headerData="headerData" />
      <!-- why -->
      <div class="why">
        <div class="why-top">
          <div class="bgc">
            <h5 class="why-top-title">为什么选择NICETEAM?</h5>
          </div>
        </div>
      </div>
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
  name: "Home",
  components: {
    HeaderC,
    Footer,
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
.home {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6.06%;
    border: 0.01rem solid #000;
    // why
    .why {
      height: 11.56rem;
      .why-top {
        height: 6.2rem;

        .why-top-title {
          font-size: 0.24rem;
          color: #fff;
        }
      }
    }
  }
}
</style>
