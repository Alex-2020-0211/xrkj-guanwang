<template>
  <div class="connect">
    <div class="over"></div>
    <div class="content">
      <div class="left">
        <img src="../../assets/img/logo.png" alt="" />
        <dl>
          <dt>NICETEAM</dt>
          <dd>游戏化销售管理</dd>
        </dl>
      </div>
      <div class="right">
        <p class="title">申请试用</p>
        <el-input
          placeholder="请选择日期"
          suffix-icon="el-icon-date"
          v-model="input1"
        >
        </el-input>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input>
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
    return {};
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
    opacity: 0.5;
  }
  .content{
    width: 60%;
    margin-left: 20%;
    position: absolute;
    top: 40%;
    left: 0%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      display: flex;
      opacity: 1;
    }
    .right {
      background-color: #fff;
      opacity: 1;
    }
  }
  .connectImg {
    width: 14rem;
    height: 7.7rem;
  }
}
</style>
