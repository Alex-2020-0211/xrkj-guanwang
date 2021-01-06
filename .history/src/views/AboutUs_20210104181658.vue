<template>
  <div class="aboutus">
    <div class="border">
      <!-- 头部 -->
      <Header :headerData="headerData" />
      <!-- 关于NICETEAM -->
      
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
        title: "管理也能玩出味 ?",
        content: "",
        detail:
          "NICETEAM : 让管理不再沉闷，工作玩味不停，全国上千家中小企业的销售福星",
        immediately: "立即咨询",
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
  }
}
</style>
