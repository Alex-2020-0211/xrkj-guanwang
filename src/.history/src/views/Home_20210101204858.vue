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
      .logo{
        width: 50px;
        height: 70px;
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
    }
  }
}
</style>
