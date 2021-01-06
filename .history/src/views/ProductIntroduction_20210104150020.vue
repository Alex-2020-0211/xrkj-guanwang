<template>
  <div class="productintroduction">
      <!-- 头部 -->
      <Header></Header>
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
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6.06%;
    border: 0.01rem solid #000;
  }
}</style>
