<template>
  <div class="footer">
    <div class="footerTop">
      <h5>限时免费！ 立刻定制企业管理解决方案</h5>
      <el-button @click="tiyan()">免费体验</el-button>
    </div>
    <div class="footerBottom">
      <div class="detail">
        <div class="left"></div>
        <div class="right">
          <div>
            <img src="../assets/img/gzhCode.png" alt="" />
            <p>扫码关注公众号</p>
          </div>
          <div>
            <img src="../assets/img/gzhCode.png" alt="" />
            <p>扫码关注公众号</p>
          </div>
        </div>
      </div>
      <!-- <p class="line"></p> -->
      <div class="bottom">
        Copyright © 禧人络科技有限公司，All Rights Reserved. tel：400-963-3938
        phone：18026911296
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    footerData: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    tiyan() {
      this.$router.push("/connect");
    },
  },
};
</script>

<style scoped lang="scss">
// 底部
.footer {
  height: 4.78rem;
  .footerTop {
    height: 1.78rem;
    background-color: #06f;
    h5 {
      font-size: 0.26rem;
      font-weight: normal;
      color: #fff;
      padding-top: 0.4rem;
      padding-bottom: 0.3rem;
    }
    .el-button {
      // display: flex;
      width: 1.5rem;
      height: 0.42rem;
      font-size: 0.14rem;
      border: 0;
      color: #fff;
      background-color: #f8892b;
      border-radius: 0.2rem;
    }
    button:active {
      border: 0.02rem solid #ccc;
    }
  }
  .footerBottom {
    height: 1.77rem;
    background-color: #333336;
    color: #fff;
    .detail {
      width: 60%;
      margin-left: 20%;
      padding-top: 0.6rem;
      display: flex;
      justify-content: space-between;
      .right {
        width: 30%;
        display: flex;
        justify-content: space-between;
        img {
          width: 0.82rem;
          height: 0.82rem;
        }
        p {
          font-weight: bold;
          margin-top: 0.05rem;
        }
      }
    }
    .line {
      width: 60%;
      margin-left: 20%;
      border-bottom: 0.02rem solid #727272;
      margin-top: 0.25rem;
      margin-bottom: 0.2rem;
    }
    .bottom {
      width: 100%;
      height: 0.4rem;
      display: flex;
      justify-content: center;
      background-color: #47474b;
    }
  }
}
</style>
