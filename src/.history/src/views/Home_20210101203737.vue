<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        <img src="" alt="" />
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
    .logo{
      .bar{
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        a{
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
