<template>
  <div class="connect">
    <div class="over"></div>
    <div class="content">
      <div class="left">
        <img src="../../assets/img/LOGO@2x.png" alt="" />
        <dl>
          <dt>NICETEAM</dt>
          <dd>游戏化销售管理</dd>
        </dl>
      </div>
      <div class="right">
        <p class="title">申请试用</p>
        <img :src="tou" class="tou" alt />
        <el-input
          class="phone"
          placeholder="请输入手机号码"
          :prefix-icon="you"
          v-model="input1"
        >
        </el-input>
        <img :src="suo" class="suo" alt />
        <el-input
          class="code"
          placeholder="请输入四位数验证码"
          :prefix-icon="you"
          v-model="input2"
        >
        </el-input>
        <el-button class="liji" type="primary">立即了解</el-button>
      </div>
    </div>
    <img class="connectImg" src="../../assets/img/guanli-1.png" alt />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Connect",
  components: {},
  data() {
    return {
      you: true,
      tou: require("../../assets/img/个人头像_o.png"),
      suo: require("../../assets/img/suo.png"),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.connect {
  width: 100%;
  height: 100%;
  font-size: 0.16rem;
  .over {
    width: 100%;
    height: 100%;
    background-color: #4b91fd;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.5;
  }
  .content {
    width: 60%;
    margin-left: 20%;
    position: absolute;
    top: 30%;
    left: 0%;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      display: flex;
      dl {
        font-size: 0.24rem;
        margin-top: 0.05rem;
        margin-left: 0.2rem;
        color: #fff;
        dt {
          text-align: left;
          font-weight: bold;
        }
        dd {
          text-align: left;
          letter-spacing: 0.02rem;
        }
      }
    }
    .right {
      width: 2.6rem;
      height: 3.2rem;
      background-color: #fff;
      border-radius: 0.1rem;
      position: relative;
      .title {
        margin-top: 0.5rem;
        margin-bottom: 0.4rem;
        font-size: 0.18rem;
        letter-spacing: 0.02rem;
      }
      .tou {
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 35.5%;
        left: 9.5%;
        z-index: 999999;
      }
      .suo {
        width: 0.24rem;
        height: 0.24rem;
        position: absolute;
        top: 1.8rem;
        left: 9.5%;
        z-index: 999999;
      }
      .phone {
        width: 80%;
        margin-bottom: 0.1rem;
      }
      .code {
        width: 80%;
        margin-bottom: 0.15rem;
      }
      .liji {
        width: 80%;
        background-color: #06f;
        font-size: 0.14rem;
      }
    }
  }
  .connectImg {
    width: 14rem;
    height: 7.7rem;
  }
}
</style>
