<template>
  <div class="header">
    <div class="headerTop">
      <p class="bar">
        <img class="logo" src="../assets/img/logo.png" alt />
        <a href="http://localhost:8080/#/">首页</a>
        <a href="http://localhost:8080/#/productintroduction">产品介绍</a>
        <a href="http://localhost:8080/#/solutions">解决方案</a>
        <a href="http://localhost:8080/#/customercase">客户案例</a>
        <a href="http://localhost:8080/#/aboutus">关于</a>
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
        <button
          class="knowMore"
          v-if="headerData.immediately"
          @click="goAbout()"
        >
          {{ headerData.immediately }}
        </button>
      </div>
      <img class="mainImg" v-if="headerData.path" :src="headerData.path" alt />
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
    return {};
  },
  methods: {
    goAbout() {
      this.$router.replace("/aboutus");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
      a {
        text-decoration: none;
      }
      a:link {
        color: #fff;
      }
      a:visited {
        color: #fff;
      }
    }
    .mianfei {
      width: 0.8rem;
      height: 0.3rem;
      font-size: 0.14rem;
      color: #fff;
      border: 0.01rem solid #fff;
      border-radius: 0.05rem;
      background-color: #7fb2ff;
      margin-right: 0.4rem;
      outline: none;
    }
    .mianfei:active {
      border: 0.01rem solid #ccc;
    }
  }
  .headerMain {
    width: 60%;
    height: 2.7rem;
    margin-top: 0.35rem;
    margin-left: 20%;
    display: flex;
    justify-content: space-between;
    .theme {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      dl {
        dt {
          font-size: 0.2rem;
          font-weight: bold;
          text-align: left;
          margin-bottom: 0.03rem;
        }
        dd {
          text-align: left;
        }
      }
      .jianjie {
        width: 3rem;
        text-align: left;
      }
      .knowMore {
        width: 1.5rem;
        height: 0.5rem;
        color: #fff;
        font-size: 0.18rem;
        letter-spacing: 0.02rem;
        background-color: #f63;
        border: 0;
        border-radius: 0.05rem;
        outline: none;
      }
      .knowMore:active {
        border: 0.01rem solid #fff;
      }
    }
    .mainImg {
      width: 4.2rem;
      height: 2.7rem;
    }
  }
}
</style>
