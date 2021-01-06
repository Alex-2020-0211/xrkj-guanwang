<template>
  <div class="productintroduction">
      <!-- 头部 -->
      <Header :headerData="headerData" />
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "ProductIntroduction",
  components: {
    Header,
  },
  data() {
    return {
        headerData: {
        free: "免费体验",
        title: "管理也能玩出味？",
        content: "销售团队弹性激励",
        detail: "NICETEAM : 一个促进全员销售的员工激励平台，让销售更轻松，让管理更高效，让工作更有趣",
        immediately:"立即咨询",
        url:"",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.productintroduction {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6.06%;
    border: 0.01rem solid #000;
  }
}</style>
