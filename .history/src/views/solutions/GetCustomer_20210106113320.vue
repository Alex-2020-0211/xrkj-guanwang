<template>
  <div class="getcustomer">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <HeaderC :headerData="headerData" />
      <!-- why -->
      
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
  methods: {
    
  },
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
    // why
    
  }
}
</style>
