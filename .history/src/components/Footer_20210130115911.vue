<template>
  <div class="footer">
    <div class="footerTop">
      <h5>限时免费！ 立刻定制企业管理解决方案</h5>
      <el-button @click="tiyan()">免费体验</el-button>
    </div>
    <div class="footerBottom">
      <div class="detail">
        <div class="left">
          <dl>
            <dt>产品及服务</dt>
            <dd>关于NICETEAM</dd>
            <dd>公司历程</dd>
            <dd>禧多多</dd>
          </dl>
          <dl>
            <dt>关于NICETEAM</dt>
            <dd>相关业务</dd>
            <dd>公司历程</dd>
            <dd>禧多多</dd>
          </dl>
          <dl class="jishu">
            <dt>技术支持</dt>
            <dd>注册登陆问题</dd>
            <dd style="margin-bottom: 0.09rem;">备案</dd>
            <dd style="color: #515151">1</dd>
          </dl>
        </div>
        <div class="right">
          <img src="../assets/img/gzhCode.png" alt="" />
          <p>扫码关注公众号</p>
        </div>
      </div>
      <p class="line"></p>
      <div class="bottom">
        <dl>
          <dt>
            <span>用户反馈</span><span>隐私政策</span><span>详情了解</span>
          </dt>
          <dd>sdasdsad@qq.com</dd>
        </dl>
        <p>
          <img src="../assets/img/LOGO@2x.png" alt="" /><span>NICETEAM</span>
        </p>
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
    button {
      // display: flex;
      width: 1.5rem;
      height: 0.4rem;
      font-size: 0.16rem;
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
    height: 3rem;
    background-color: #515151;
    color: #fff;
    .detail {
      width: 60%;
      margin-left: 20%;
      padding-top: 0.6rem;
      display: flex;
      justify-content: space-between;
      .left {
        dl {
          display: inline-block;
          margin-right: 0.5rem;
          dt {
            font-weight: bold;
            font-size: 0.18rem;
            text-align: left;
            margin-bottom: 0.2rem;
          }
          dd {
            text-align: left;
            font-size: 0.14rem;
            margin-bottom: 0.05rem;
            color: #d7d7d7;
          }
        }
        .jishu {
          margin-left: 0.4rem;
        }
      }
      .right {
        img {
          width: 0.75rem;
          height: 0.75rem;
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
      width: 60%;
      margin-left: 20%;
      display: flex;
      justify-content: space-between;
      dl {
        dt {
          margin-bottom: 0.08rem;
        }
        dd {
          text-align: left;
          color: #d7d7d7;
        }
      }
      p {
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
        img {
          width: 0.4rem;
          height: 0.4rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
}
</style>
