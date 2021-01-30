<template>
  <div class="footer">
    <div class="footerTop">
      <h5>限时免费！ 立刻定制企业管理解决方案</h5>
      <el-button @click="tiyan()">免费体验</el-button>
    </div>
    <div class="footerBottom">
      <div class="detail">
        <div class="left">
          <dl class="title">
            <dt>Niceteam</dt>
            <dd>让工作像游戏一样充满乐趣</dd>
          </dl>
          <span>产品介绍</span
          >|<span>产品介绍</span>|<span>产品介绍</span>|<span>产品介绍</span>|<span>产品介绍</span>|<span
            >产品介绍</span
          >
          <dl class="phone">
            <dt style="font-size: 0.18rem;">咨询电话</dt>
            <dd style="font-size: 0.2rem;">400-963-3938</dd>
          </dl>
        </div>
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
  .footerTop {
    height: 1.8rem;
    background-color: #4a4bda;
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
      width: 80%;
      height: 100%;
      margin-left: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .title {
          dt {
            text-align: left;
            font-family: PingFang SC;
            font-size: 0.44rem;
            font-weight: bold;
          }
          dd {
            font-size: 0.12rem;
          }
        }
        .phone {
          dt {
            text-align: left;
            font-size: 0.18rem;
            font-weight: bold;
          }
          dd {
            font-size: 0.2rem;
          }
        }
      }
      .right {
        width: 19%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 0.2rem;
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
      color: #7e7e7e;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #47474b;
    }
  }
}
</style>
