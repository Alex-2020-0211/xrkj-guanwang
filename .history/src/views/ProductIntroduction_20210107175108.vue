<template>
  <div class="productintroduction">
    <div class="border">
      <!-- 头部 -->
      <div class="header">
        <div class="headerTop">
          <p class="bar">
            <img class="logo" src="../assets/img/logo.png" alt />
            <a href="http://localhost:8080/#/">首页</a>
            <a href="http://localhost:8080/#/productintroduction">产品介绍</a>
            <a href="http://localhost:8080/#/solutions">解决方案</a>
            <a href="http://localhost:8080/#/customercase">客户案例</a>
            <a href="http://localhost:8080/#/aboutus">关于</a>
          </p>
          <button class="mianfei">免费试用</button>
        </div>
        <div class="headerMain">
          <div class="theme">
            <dl>
              <dt>“ 对工作上瘾? ”</dt>
              <dd>让销售上瘾，让团队带劲</dd>
            </dl>
            <button class="knowMore" @click="goAbout()">了解一下</button>
          </div>
        </div>
      </div>
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
            胧离传统固化的KPI工作指标量化的模式，我们建立了全新的星愿系统。员工通过定制个人的专属星愿，并通过个人的工作情况及表现激活星愿池。而用户可通过平台去发珈并记录员工的工作情况，对其工作进行相应的评判以进行激励。
          </p>
        </div>
        <el-image class="img" :src="url" lazy></el-image>
        <div class="means">
          <span class="sort">02</span>
          <p style="width:2rem; text-align: left;">让努力看得见</p>
          <p class="star" style="margin-left: 0rem;">
            不间于传统的管理方式，NICETEAM建立的游戏化管理的形式，将销普工作游戏化，工作绩薇可视化，让员工努力行得厄”让用户要时进行友，好的调动工的积极性。
          </p>
        </div>
        <el-image
          class="img"
          :src="url"
          style="top: 12.2rem; left: 9.7rem;"
          lazy
        ></el-image>
        <div class="means">
          <span class="sort">03</span>
          <p>能力看得见</p>
          <p>福利不用愁</p>
          <p class="star">
            满足了用户基本需求的基础上，我们根据自身的供应链为用户提供了相对应的礼物对员工进行激励。
          </p>
        </div>
        <el-image class="img" :src="url" style="top: 16.5rem;" lazy></el-image>
      </div>
      <!-- 底部 -->
      <Footer :footerData="footerData" />
    </div>
  </div>
</template>

<script>
// import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "ProductIntroduction",
  components: {
    Header,
    Footer,
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
        path: "1",
      },
      footerData: {
          title: "限时免费！ 距离销冠团队只差一步",
      }
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
    margin-left: 6%;
    border: 0.01rem solid #000;
    // 星愿系统
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
        margin-bottom: 1.8rem;
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
          margin-right: 1.5rem;
        }
        .star {
          width: 2.61rem;
          margin-top: 0.4rem;
          margin-left: 5.84rem;
          font-size: 0.16rem;
          text-align: left;
        }
      }
      .img {
        width: 2.64rem;
        height: 2.64rem;
        position: absolute;
        top: 8rem;
        left: 3.7rem;
        border: 1px solid #000;
      }
    }
  }
}
</style>
