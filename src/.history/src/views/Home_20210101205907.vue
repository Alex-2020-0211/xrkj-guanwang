<template>
  <div class="home">
    <div class="header">
      <div class="headerTop">
        <img class="logo" src="../assets/img/logo.png" alt />
        <p class="bar">
          <a>首页</a>
          <a>产品介绍</a>
          <a>解决方案</a>
          <a>客户案例</a>
          <a>关于</a>
        </p>
        <button class="tiyan">免费体验</button>
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
  .header {
    width: 88.88%;
    height: 450px;
    background-color: #06f;
    margin: 0 auto;
    .headerTop {
      width: 100%;
      display: flex;
      .logo {
        width: 70px;
        height: 55px;
        margin-top: 20px;
        margin-left: 100px;
      }
      .bar {
        width: 40%;
        margin-left: 30%;
        margin-top: 30px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: space-around;
      }
      .tiyan {
        width: 120px;
        height: 25px;
        color: #fff;
        border: 1px solid #fff;
        background-color: #7fb2ff;
      }
    }
  }
}
</style>
