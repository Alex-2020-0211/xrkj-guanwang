<template>
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
      <button class="mianfei">免费体验</button>
    </div>
    <div class="headerMain">
      <div class="theme">
        <dl>
          <dt>游戏化管理平台</dt>
          <dd>销售团队弹性激励</dd>
        </dl>
        <p class="jianjie">
          NICETEAM:
          一个促进全员销售的员工激励平台，让销售更轻松，让管理更高效，让工作更有趣
        </p>
        <button class="knowMore">立即了解</button>
      </div>
      <img class="mainImg" src="" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {

  },
  data() {
      return{
          
      }
  },
  methods: {},
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
    margin-left: 20%;
    padding-top: 0.3rem;
    display: flex;
    justify-content: space-around;
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
    }
    .tiyan {
      width: 1rem;
      height: 0.3rem;
      color: #fff;
      border: 0.01rem solid #fff;
      border-radius: 0.05rem;
      background-color: #7fb2ff;
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
      }
    }
    .mainImg {
      width: 3.8rem;
      height: 2.7rem;
    }
  }
}
</style>
