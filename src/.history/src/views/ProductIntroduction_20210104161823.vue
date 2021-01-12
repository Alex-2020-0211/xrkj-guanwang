<template>
  <div class="productintroduction">
    <div class="border">
      <!-- 头部 -->
      <Header :headerData="headerData" />
      <div class="system">
        <dl>
          <dt>星愿系统</dt>
          <dd>VALUE</dd>
        </dl>
        <div class="means">
          <span class="sort">01</span>
          <p>建立愿望池</p>
          <p class="star">
            为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
          </p>
        </div>
        <el-image class="img" :src="url" lazy></el-image>
        <div class="means">
          <span class="sort" style="margin-left: 5.75rem;">02</span>
          <p style="margin-left: 5.75rem; width:2rem;">激发游戏管理</p>
          <p style="margin-left: 5.75rem; width:2rem;">拒绝乏味无趣</p>
          <p class="star" style="margin-left: 5.75rem;">
            分享、裂变、砍价、拼单
            你以为的营销都是打怪升级，游戏化管理，趣味性工作，让工作生动有趣，不再乏味无趣
          </p>
        </div>
        <el-image
          class="img"
          :src="url"
          style="top: 16.41rem; right: 8.5rem;"
          lazy
        ></el-image>
        <div class="means">
          <span class="sort">03</span>
          <p>让工作有趣</p>
          <p>赋团队激情</p>
          <p class="star">
            为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
          </p>
        </div>
        <el-image class="img" :src="url" style="top: 19.44rem;" lazy></el-image>
      </div>
    </div>
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
        free: "免费试用",
        title: "管理也能玩出味 ?",
        content: "",
        detail:
          "NICETEAM : 让管理不再沉闷，工作玩味不停，全国上千家中小企业的销售福星",
        immediately: "立即咨询",
        url: "",
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
    .system {
      width: 100%;
      height: 14.12rem;
      dl {
        margin-top: 0.6rem;
        dt {
          font-size: 0.24rem;
          font-weight: bold;
          letter-spacing: 0.01rem;
          margin-bottom: 0.13rem;
        }
        dd {
          font-size: 0.18rem;
          font-weight: bold;
        }
      }
      .means {
        width: 60%;
        height: 2.4rem;
        margin-left: 20%;
        margin-top: 0.6rem;
        color: #06f;
        text-align: left;
        .sort {
          font-size: 0.24rem;
          font-weight: bold;
          display: block;
          margin-bottom: 0.3rem;
        }
        p {
          font-size: 0.22rem;
          font-weight: bold;
        }
        .star {
          width: 2.61rem;
          margin-top: 0.4rem;
          font-size: 0.16rem;
        }
      }
      .img {
        width: 3.6rem;
        height: 2.2rem;
        position: absolute;
        top: 13.38rem;
        right: 3.7rem;
      }
    }
  }
}
</style>
