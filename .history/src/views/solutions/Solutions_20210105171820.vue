<template>
  <div class="home">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <Header :headerData="headerData" />
      <!-- 底部 -->
      <Footer :footerData="footerData" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isDetail: false,
      url: require("../../assets/img/partner.png"),
      headerData: {
        free: "免费试用",
        title: "游戏化管理平台",
        content: "销售团队弹性激励",
        detail: "NICETEAM : 一个促进全员销售的员工激励平台，让销售更轻松，让管理更高效，让工作更有趣",
        immediately:"立即了解",
        path:"1",
      },
      footerData:{
        title: "限时免费！ 立刻定制企业管理解决方案",
      },
    };
  },
  methods: {
    
  },
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
  }
}
</style>
