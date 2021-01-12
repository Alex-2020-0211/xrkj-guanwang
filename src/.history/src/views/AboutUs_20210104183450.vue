<template>
  <div class="aboutus">
    <div class="border">
      <!-- 头部 -->
      <Header :headerData="headerData" />
      <!-- 关于NICETEAM -->
      <div class="about">

      </div>
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
        path: "",
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
    .about{
      height: 13.63rem;
    }
  }
}
</style>
