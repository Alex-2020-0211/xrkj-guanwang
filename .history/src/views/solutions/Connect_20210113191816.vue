<template>
  <div class="connect">
    <div class="over"></div>
    <div class="content" v-show="isCode">
      <div class="left">
        <img src="../../assets/img/LOGO@2x.png" alt="" />
        <dl class="left-item">
          <dt>NICETEAM</dt>
          <dd>游戏化销售管理</dd>
        </dl>
      </div>
      <div class="right">
        <p class="title">申请试用</p>
        <img :src="tou" class="tou" alt />
        <input
          class="phone"
          placeholder="请输入手机号码"
          v-model="input1"
        >
        <a class="yanzheng" href="javascript:;" @click="getCode()">获取验证码</a>
        </input>
        <img :src="suo" class="suo" alt />
        <input
          class="code"
          placeholder="请输入四位数验证码"
          v-model="input2"
        >
        </input>
        <el-button class="liji" type="primary">立即了解</el-button>
      </div>
    </div>
    <div class="content2" v-show="!isCode">
      <div class="right2">
        <dl class="right-item"> 
          <dt>NICETEAM</dt>
          <dd>游戏化销售管理</dd>
        </dl>
        <img class="footerKefu" src="../../assets/img/客服图.png" alt="">
        <button class="fanhui">即将返回首页</button>
        <p>稍候片刻，客服正火速赶往~</p>
      </div>
    </div>
    <img class="connectImg" src="../../assets/img/guanli-1.png" alt />
  </div>
</template>

<script>
import { Loading } from 'element-ui';
import http from "../../utils/http";

export default {
  name: "Connect",
  components: {},
  data() {
    return {
      isCode:true,
      you: true,
      tou: require("../../assets/img/个人头像_o.png"),
      suo: require("../../assets/img/suo.png"),
    };
  },
  methods: {
    // 获取验证码
    async getCode(customerPhone){
      const loading = loading.service({
        fullscreen: true,
				lock: true,
				text: '获取验证码中...',
				background: 'rgba(0, 0, 0, 0.7)'
      })
      http.get()
      
    }
  },
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
      .left-item {
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
        width: 0.24rem;
        height: 0.24rem;
        position: absolute;
        top: 1.19rem;
        left: 0.3rem;
        z-index: 999999;
      }
      .suo {
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top: 1.64rem;
        left: 0.33rem;
        z-index: 999999;
      }
      .phone {
        width: 1.7rem;
        height: 0.3rem;
        margin-bottom: 0.1rem;
        padding-left: 0.3rem;
      }
      .yanzheng{
        position: absolute;
        font-size: 0.12rem;
        top: 1.22rem;
        right: 0.3rem;
      }
      .code {
        width: 1.7rem;
        height: 0.3rem;
        margin-bottom: 0.15rem;
        padding-left: 0.3rem;
      }
      .liji {
        width: 2rem;
        background-color: #06f;
        font-size: 0.14rem;
      }
    }
  }
  .content2{
    width: 60%;
    margin-left: 20%;
    position: absolute;
    top: 30%;
    left: 0%;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .right2{
      width: 3rem;
      height: 4.2rem;
      background-color: #fff;
      color: #06f;
      border-radius: 0.1rem;
      .right-item{
        margin-top: 0.5rem;
        dt{
          font-size: 0.24rem;
          font-weight: bold;
          margin-bottom: 0.05rem;
        }
        dd{
          font-size: 0.2rem;
          margin-bottom: 0.1rem;
        }
      }
      .footerKefu{
      }
      .fanhui{
        display:block;
        width: 2.2rem;
        height: 0.4rem;
        margin-left: 0.4rem;
        margin-top: 0.1rem;
        margin-bottom: 0.2rem;
        background-color: #06f;
        color: #fff;
        border: 0;
        border-radius: 0.1rem;
      }
      }
    }
  .connectImg {
    width: 14rem;
    height: 7.7rem;
  }
}
</style>
