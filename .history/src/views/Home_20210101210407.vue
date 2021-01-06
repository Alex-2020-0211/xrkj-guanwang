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
  font-size: 16px;
  .header {
    width: 88.88%;
    height: 450px;
    background-color: #06f;
    margin: 0 auto;
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
        width: 40%;
        color: #fff;
        font-weight: bold;
        display: flex;
        justify-content: space-around;
      }
      .tiyan {
        width: 120px;
        height: 25px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 5px;
        background-color: #7fb2ff;
      }
    }
  }
}
</style>
