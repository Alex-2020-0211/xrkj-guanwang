<template>
  <div class="footer">
    <div class="footerTop">
      <div class="back">
        <h5>限时免费！ 立刻定制企业管理解决方案</h5>
        <el-button @click="tiyan()">免费体验</el-button>
      </div>
    </div>
    <div class="footerBottom">
      <div class="detail">
        <div class="left">
          <dl class="title">
            <dt>Niceteam</dt>
            <dd>让工作像游戏一样充满乐趣</dd>
          </dl>
          <span @click="goHome()">首页</span>|
          <span@click="goProductIntroduction()">产品介绍</span>|
          <span@click="goSolutions()">解决方案</span>|
          <span @click="goCustomercase()">客户案例</span>|
          <span @click="goBlog()">Nice博客</span>|
          <span @click="goAbout()">关于我们</span>
          <dl class="phone">
            <dt style="font-size: 0.18rem;">咨询电话：</dt>
            <dd style="font-size: 0.2rem;">400-963-3938</dd>
          </dl>
        </div>
        <div class="right">
          <div>
            <el-popover
              placement="top-end"
              title="721学堂"
              width="200"
              trigger="hover"
            >
              <el-button slot="reference">
                <div>
                  <img src="../assets/img/721.png"></img>
                </div>
              </el-button>
              <!-- <el-image src="../assets/img/721.png"></el-image> -->
              <img src="../assets/img/721.png" alt="" />
            </el-popover>
            <p>721学堂</p>
          </div>
          <div>
            <el-popover
              placement="top-start"
              title="游戏化管理"
              width="200"
              trigger="hover"
            >
              <el-button slot="reference">
                <div>
                  <img src="../assets/img/gzhCode.png"></img>
                </div>
              </el-button>
              <!-- <el-image src="../assets/img/721.png"></el-image> -->
              <img style="width:200px;" src="../assets/img/gzhCode.png" />
            </el-popover>
            <p>游戏化管理</p>
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
    goHome() {
      this.$router.push("/");
    },
    goProductIntroduction() {
      this.$router.push("/productintroduction");
    },
    goSolutions() {
      this.$router.push("/solutions");
    },
    goCustomercase() {
      this.$router.push("/customercase");
    },
    goBlog() {
      this.$router.push("/blog");
    },
    goAbout() {
      this.$router.push("/aboutus");
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
          margin-top: 0.2rem;
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
          margin-top: 0.2rem;
          dt {
            text-align: left;
            font-size: 0.18rem;
            font-weight: bold;
            margin-bottom: 0.05rem;
          }
          dd {
            font-size: 0.2rem;
            font-weight: bold;
          }
        }
      }
      .right {
        width: 19%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 0.2rem;
        .el-button{
          background: none;
          border: 0;
          img{
            width: 0.82rem;
            height: 0.82rem;
          }
        }
        p {
          font-weight: bold;
          // margin-top: 0.05rem;
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
