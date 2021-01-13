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
body{
    width: 100%;
    height: 100%;
}
.NotFound {
    width: 100%;
    height: 100%;
    background-color: #3b3267;
    display: flex;
    justify-content: center;
    align-items: center;
  .notfound {
    width: 4rem;
    height: 4rem;
    border: 0;
  }
}
</style>
