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
    .about {
      height: 13.63rem;
    }
  }
}
</style>
