<template>
  <div class="header">
    <div class="headerTop">
      <span class="logo">N<span style="color: #F07427;">i</span>ceteam</span>
      <p class="bar">
        <a :class="headerData.isOn1" href="javascript:;" @click="goHome()"
          >首页</a
        >
        <a
          :class="headerData.isOn2"
          href="javascript:;"
          @click="goProductIntroduction()"
          >产品介绍</a
        >
        <a :class="headerData.isOn3" href="javascript:;" @click="goSolutions()"
          >解决方案</a
        >
        <a
          :class="headerData.isOn4"
          href="javascript:;"
          @click="goCustomercase()"
          >客户案例</a
        >
        <a :class="headerData.isOn5" href="javascript:;" @click="goBlog()"
          >Nice博客</a
        >
        <a :class="headerData.isOn6" href="javascript:;" @click="goAbout()"
          >关于</a
        >
      </p>
      <button class="loginC" @click="login()">用户登录</button>
      <button class="mianfei" @click="tiyan()">免费体验</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    headerData: {
      type: Object,
    },
  },
  data() {
    return {
      isOn1: "on",
      isOn2: "",
      isOn3: "",
      isOn4: "",
      isOn5: "",
      isOn6: "",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goProductIntroduction() {
      this.$router.push("/productintroduction");
    },
    goSolutions() {
      this.$router.push("/solutions");
    },
    goCustomercase() {
      this.$router.push("/customercase");
    },
    goBlog() {
      this.$router.push("/blog");
    },
    goAbout() {
      this.$router.push("/aboutus");
    },
    login(){
      window.location.href = ""
    },
    tiyan() {
      this.$router.push("/connect");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 头部
.header {
  width: 100%;
  height: 2.5rem;
  margin-top: -0.01rem;
  .headerTop {
    width: 80%;
    margin-left: 10%;
    padding: 0.2rem 0rem;
    color: #303030;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .logo {
      margin-right: 0.2rem;
      font-family: PingFang-SC-Heavy;
      font-size: 0.32rem;
      color: #4a4bda;
    }
    .bar {
      width: 40%;
      font-weight: bold;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 2rem;
      a {
        text-decoration: none;
      }
      .on {
        margin-top: 0.1rem;
        padding-bottom: 0.05rem;
        border-bottom: 0.04rem solid #4a4bda;
      }
      a:link {
        color: #303030;
      }
      a:visited {
        color: #303030;
      }
    }
    .loginC {
      width: 1.2rem;
      height: 0.4rem;
      font-size: 0.14rem;
      color: #4a4bda;
      border: 0.01rem solid #4a4bda;
      border-radius: 0.2rem;
      background-color: #fff;
      margin-left: 0.2rem;
      outline: none;
    }
    .loginC:active {
      border: 0.03rem solid #4a4bda;
    }
    .mianfei {
      width: 1.2rem;
      height: 0.4rem;
      font-size: 0.14rem;
      color: #fff;
      border: 0;
      border-radius: 0.2rem;
      background-color: #f8892b;
      margin-right: 0.4rem;
      outline: none;
    }
    .mianfei:active {
      border: 0.02rem solid #aaa;
    }
  }
}
</style>
