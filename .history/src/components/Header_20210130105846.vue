<template>
  <div class="header">
    <div class="headerTop">
      <p class="bar">
        <span class="logo">N<span style="color: #F07427;">i</span>ceteam</span>
        <a
          class="header-item"
          :class="ison2 == true ? on : ''"
          href="javascript:;"
          @click="goHome()"
          >首页</a
        >
        <a
          class="header-item"
          :class="ison2 == true ? on : ''"
          href="javascript:;"
          @click="goProductIntroduction()"
          >产品介绍</a
        >
        <a class="header-item" href="javascript:;" @click="goSolutions()"
          >解决方案</a
        >
        <a class="header-item" href="javascript:;" @click="goCustomercase()"
          >客户案例</a
        >
        <a class="header-item" href="javascript:;" @click="goBlog()"
          >Nice博客</a
        >
        <a class="header-item" href="javascript:;" @click="goAbout()">关于</a>
      </p>
      <button class="loginC" @click="login()">用户登录</button>
      <button class="mianfei" @click="tiyan()">免费体验</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {
      isOn1: true,
      isOn2: false,
      isOn3: false,
      isOn4: false,
      isOn5: false,
      isOn6: false,
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
    width: 60%;
    margin-left: 20%;
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
      width: 60%;
      font-weight: bold;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .header-item {
        text-decoration: none;
      }
      .on {
        padding-bottom: 0.1rem;
        border-bottom: 0.04rem solid #4a4bda;
      }
      .header-item:link {
        color: #303030;
      }
      .header-item:visited {
        color: #303030;
      }
    }
    .loginC {
      width: 1.2rem;
      height: 0.4rem;
      font-size: 0.14rem;
      color: #fff;
      border: 0;
      border-radius: 0.2rem;
      background-color: #f8892b;
      margin-left: 0.2rem;
      outline: none;
    }
    .loginC:active {
      border: 0.02rem solid #ccc;
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
      border: 0.02rem solid #ccc;
    }
  }
  // .headerMain {
  //   width: 60%;
  //   height: 2.7rem;
  //   margin-top: 0.35rem;
  //   margin-left: 20%;
  //   display: flex;
  //   justify-content: space-between;
  //   .theme {
  //     height: 100%;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: space-between;
  //     dl {
  //       dt {
  //         font-size: 0.2rem;
  //         font-weight: bold;
  //         text-align: left;
  //         margin-bottom: 0.03rem;
  //       }
  //       dd {
  //         text-align: left;
  //       }
  //     }
  //     .jianjie {
  //       width: 3rem;
  //       text-align: left;
  //     }
  //     .knowMore {
  //       width: 1.5rem;
  //       height: 0.5rem;
  //       color: #fff;
  //       font-size: 0.18rem;
  //       letter-spacing: 0.02rem;
  //       background-color: #f63;
  //       border: 0;
  //       border-radius: 0.05rem;
  //       outline: none;
  //     }
  //     .knowMore:active {
  //       border: 0.01rem solid #fff;
  //     }
  //   }
  //   .mainImg {
  //     width: 4.2rem;
  //     height: 2.7rem;
  //   }
  // }
}
</style>
