<template>
  <div class="productintroduction">
    <div class="border">
      <!-- 头部 -->
      <Header :headerData="headerData" />
      <!-- 星愿系统 -->
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
          <span class="sort">02</span>
          <p style="width:2rem;">让努力看得见</p>
          <p class="star" style="margin-left: 0rem;">
            分享、裂变、砍价、拼单
            你以为的营销都是打怪升级，游戏化管理，趣味性工作，让工作生动有趣，不再乏味无趣
          </p>
        </div>
        <el-image
          class="img"
          :src="url"
          style="top: 11.41rem; left: 9.7rem;"
          lazy
        ></el-image>
        <div class="means">
          <span class="sort">03</span>
          <p>能力看得见</p>
          <p>福利不用愁</p>
          <p class="star">
            为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
          </p>
        </div>
        <el-image class="img" :src="url" style="top: 15rem;" lazy></el-image>
      </div>
      <!-- 底部 -->
      <div class="foot">
          <h5>限时免费！ 距离销冠团队只差一步</h5>
          <button>免费试用</button>
          <p>满足了用户基本需求的基础上，我们根据自身的供应链为用户提供了相对应的礼</p>
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
      url: require("../assets/img/fuli.png"),
      headerData: {
        free: "免费试用",
        title: "管理也能玩出味 ?",
        content: "",
        detail:
          "NICETEAM : 让管理不再沉闷，工作玩味不停，全国上千家中小企业的销售福星",
        immediately: "立即咨询",
        path: "",
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
        margin-top: 1rem;
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
        margin-top: 1rem;
        margin-bottom: 1rem;
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
          text-align: right;
          margin-right: 1.45rem;
        }
        .star {
          width: 2.61rem;
          margin-top: 0.4rem;
          margin-left: 5.84rem;
          font-size: 0.16rem;
        }
      }
      .img {
        width: 2.64rem;
        height: 2.64rem;
        position: absolute;
        top: 8rem;
        left: 3.7rem;
      }
    }
    .foot{
        height: ;
        background-color: #06f;
    }
  }
}
</style>
