<template>
  <div class="getcustomer">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <HeaderC :headerData="headerData" />
      <!-- OneStop -->
      <div class="oneStop">
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
    
  }
}
</style>
