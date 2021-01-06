<template>
  <div class="NotFound">
    <img class="notfound" src="../assets/NotFound.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.NotFound {
    width: 100%;
    height: 100%;
    background-color: #fff;
  .notfound {
    width: 4rem;
    height: 4rem;
  }
}
</style>
