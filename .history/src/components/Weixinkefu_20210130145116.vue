<template>
  <div class="weixinkefu">
    <el-popover
      placement="left"
      title="禧人科技客户经理"
      width="200"
      trigger="hover"
      content="
          <img src='../assets/img/logo.png'/>
          "
    >
      <el-button slot="reference" class="lianxi">
        <div class="borderImg">
          <el-image class="touxiang" :src="QRcode"></el-image>
        </div>
        <p class="zixun">立即咨询</p>
      </el-button>
      <el-image :src="KFcode"></el-image>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "Weixinkefu",
  props: {},
  data() {
    return {
      QRcode: require("../assets/img/客服.png"),
      KFcode: require("../assets/img/kefu.png"),
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 微信客服
.weixinkefu {
  position: fixed;
  bottom: 20%;
  right: 1%;
  .lianxi {
    width: 1rem;
    height: 0.95rem;
    color: #06f;
    font-size: 0.16rem;
    border: 0;
    .borderImg {
      width: 0.6rem;
      height: 0.6rem;
      border: 0.05rem solid #06f;
      border-radius: 50%;
      position: absolute;
      top: 5%;
      left: 15%;
      z-index: 0;
      .touxiang {
        width: 0.52rem;
        height: 0.52rem;
        border: 0.05rem solid #0c0;
        border-radius: 50%;
        margin-top: -0.01rem;
        margin-left: -0.01rem;
        // box-shadow: 0.05rem 0.05rem 0.05rem rgba(0,0,0,.5);
      }
    }
    .zixun {
      width: 0.9rem;
      height: 0.3rem;
      text-align: center;
      background-color: #06f;
      border-radius: 0.1rem;
      color: #fff;
      font-size: 0.16rem;
      line-height: 0.3rem;
      margin-top: 50%;
      position: absolute;
      top: 10%;
      left: 6%;
      z-index: 1;
    }
    .el-image {
      display: block;
    }
  }
}
</style>
