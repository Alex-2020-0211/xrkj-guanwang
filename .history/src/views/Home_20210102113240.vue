<template>
  <div class="home">
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
        <button class="tiyan">免费体验</button>
      </div>
      <div class="headerMain">
        <div class="theme">
          <dl>
            <dt>游戏化管理平台</dt>
            <dd>销售团队弹性激励</dd>
          </dl>
          <p class="jianjie">
            NICETEAM: 一个促进全员销售的员工激励平台，让销售更轻松，让管理更高效，让工作更有趣
          </p>
          <button>立即了解</button>
        </div>
        <img class="mainImg" src="" alt />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 16px;
  .header {
    width: 88.88%;
    height: 450px;
    color: #fff;
    background-color: #06f;
    margin: 30px 6.06% 0 6.06%;
    .headerTop {
      width: 80%;
      margin-left: 10%;
      padding-top: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .logo {
        width: 70px;
        height: 55px;
      }
      .bar {
        width: 60%;
        font-weight: bold;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .tiyan {
        width: 100px;
        height: 30px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 5px;
        background-color: #7fb2ff;
      }
    }
    .headerMain {
      width: 80%;
      height: 270px;
      margin-top: 30px;
      margin-left: 16%;
      .theme {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        dl {
          dt {
            font-size: 20px;
            font-weight: bold;
            text-align: left;
          }
          dd {
            text-align: left;
          }
        }
        .jianjie {
          width: 200px;
        }
      }
    }
  }
}
</style>
