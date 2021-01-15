<template>
  <div class="connect">
    <div class="over"></div>
    <div class="content" v-show="!rightCode">
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
          type="number"
          class="phone"
          placeholder="请输入手机号码"
          v-model="phone"
          maxlength="11"
          required="required"
        >
        <span class="yanzheng" href="javascript:;" @click="getCode()">获取验证码</span>
        </input>
        <img :src="suo" class="suo" alt />
        <input
          type="number"
          class="code"
          placeholder="请输入四位数验证码"
          v-model="code"
          maxlength="4"
          required="required"
          @input="isCodeOk()"
        >
        </input>
        <el-button v-show="!isCode" class="liji" type="info" @click="joinUs()" disabled>立即了解</el-button>
        <el-button v-show="isCode" class="liji-after" type="primary" @click="joinUs()">立即了解</el-button>
      </div>
    </div>
    <div class="content2" v-show="rightCode">
      <div class="right2">
        <dl class="right-item">
          <dt>NICETEAM</dt>
          <dd>游戏化销售管理</dd>
        </dl>
        <img class="footerKefu" src="../../assets/img/客服图.png" alt="">
        <button class="fanhui" @click="toHome()">返回首页</button>
        <p>稍候片刻，客服正火速赶往~</p>
      </div>
    </div>
    <img class="connectImg" src="../../assets/img/guanli-1.png" alt />
  </div>
</template>

<script>
import { Form, Loading } from 'element-ui';
import { checkPhone, checkCode } from "../../utils/auth";
export default {
  name: "Connect",
  components: {},
  data() {
    return {
      isCode:false,
      rightCode:false,
      you: true,
      tou: require("../../assets/img/个人头像_o.png"),
      suo: require("../../assets/img/suo.png"),
      phone:"",
      code:"",
      loading: null,
    };
  },
  methods: {
    toHome(){
      this.$router.replace("/")
    },
    isCodeOk(){
      if(this.code){
        this.isCode = true;
      }else{
        this.isCode = false;
      }
      
    },
    // 获取验证码
    async getCode(){
      if (!checkPhone(this.phone)) {
				this.$message({
					message: '电话号码格式错误',
					position: 'bottom',
					type: 'error'
        })
        return;
      }
      console.log(this.phone);
      this.$ajaxPost('/api/v1/sys/official/website/customer/joinsendcode',{
        customerPhone: this.phone,
      }).then(res=>{
        this.$message({
          title: "温馨提示",
          message: "发送成功",
          type: "success"
        })
      })
    },
    // 校验验证码 + 加入公司
    joinUs() {
      if (!checkPhone(this.phone)) {
				this.$message({
					message: '电话号码格式错误',
					position: 'bottom',
					type: 'error'
        })
        return;
			}
      if (!checkCode(this.code)) {
				this.$message({
					message: '验证码错误',
					position: 'bottom',
					type: 'error'
        })
        return;
			}
      this.$ajaxPost('/api/v1/sys/official/website/customer/joinvailcode', {
        customerPhone: this.phone,
        code:this.code,
        }).then(res=>{
          this.rightCode = true;
          this.$ajaxPost('/api/v1/sys/official/website/customer/joincompany', {
            customerPhone: this.phone,
          }).then(res=>{
            this.$message({
              title: "温馨提示",
              message: "客服火速赶往中",
              type: "success"
            })
            // let timer = setTimeout(this.$router.push("/"),5000);
          })
        })
    }
  },
};
</script>

<style lang="scss" scoped>
.connect {
  width: 100%;
  height: 100%;
  font-size: 0.16rem;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
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
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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
      width: 3rem;
      height: 3.4rem;
      background-color: #fff;
      border-radius: 0.1rem;
      margin-right: 1rem;
      position: relative;
      .title {
        margin-top: 0.5rem;
        margin-bottom: 0.4rem;
        font-size: 0.2rem;
        letter-spacing: 0.03rem;
        font-weight: bold;
      }
      .tou {
        width: 0.24rem;
        height: 0.24rem;
        position: absolute;
        top: 1.21rem;
        left: 0.3rem;
        z-index: 999999;
      }
      .suo {
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top: 1.75rem;
        left: 0.34rem;
        z-index: 999999;
      }
      .phone {
        width: 2.1rem;
        height: 0.3rem;
        margin-bottom: 0.2rem;
        padding-left: 0.3rem;
        border-radius: 0.05rem;
      }
      .yanzheng{
        position: absolute;
        font-size: 0.12rem;
        top: 1.24rem;
        right: 0.34rem;
        cursor: pointer;
        color: #06f;
      }
      .code {
        width: 2.1rem;
        height: 0.3rem;
        margin-bottom: 0.3rem;
        padding-left: 0.3rem;
        border-radius: 0.05rem;
      }
      .liji {
        width: 2.42rem;
        // height: 0.35rem;
        // line-height: 0.35rem;
        background-color: #ccc;
        border: 0;
        font-size: 0.16rem;
        letter-spacing: 0.02rem;
      }
      .liji-after {
        width: 2.42rem;
        // height: 0.35rem;
        line-height: 0.35rem;
        background-color: #06f;
        font-size: 0.16rem;
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
