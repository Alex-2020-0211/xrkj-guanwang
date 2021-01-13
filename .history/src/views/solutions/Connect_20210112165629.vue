<template>
  <div class="connect">
    <div class="over">
      <div class="left">
        <img src="../../assets/img/logo.png" alt="">
        <dl>
          <dt>NICETEAM</dt>
          <dd>游戏化销售管理</dd>
        </dl>
      </div>
      <div class="right">
        <p class="title">申请试用</p>
        
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
  .over
  {
    width: 100%;
    height: 100%;
    background-color: #4b91fd;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  .connectImg {
    width: 14rem;
    height: 7.7rem;
  }
}
</style>
