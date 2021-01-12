<template>
  <div class="home">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <Header :headerData="headerData" />
      <!-- 介绍 -->
      <div class="introduce">
        <dl>
          <dt>应用价值</dt>
          <dd>VALUE</dd>
        </dl>
        <div class="content">
          <div class="container">
            <div class="item" @mouseenter="mouseenter()">
              <p class="circle"></p>
              <title>弹性福利</title>
              <p class="describe1">好的员工</p>
              <p class="describe1">是夸出来的</p>
            </div>
            <div class="item2" v-show="isDetail" @mouseleave="mouseleave()">
              <title>弹性福利</title>
              <p class="line"></p>
              <p class="detail">
                根据员工工作日常表现发放福利，员工选择心仪礼物，降低激励成本，提高激励效果
              </p>
            </div>
            <div class="item">
              <p class="circle"></p>
              <title>智能获客</title>
              <p class="describe2">最好的广告是口口相传</p>
            </div>
            <div class="item">
              <p class="circle"></p>
              <title>销售激励</title>
              <p class="describe3">让工作如此有趣真是不好意思</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 方法原理 -->
      <div class="way">
        <div class="wayHeader">
          <h3>销售管理就选 NICETEAM</h3>
          <p>
            <span>高效协作</span> | <span>有效裂变</span> |
            <span>免费注册下载</span>
          </p>
        </div>
        <div class="means">
          <span class="sort">01</span>
          <p>我们如何</p>
          <p>帮您实现激励</p>
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
      <!-- 优势 -->
      <div class="advantage">
        <h5>NICETEAM 的部分优势</h5>
        <div class="advan">
          <div class="box">
            <img src="../assets/img/duowei.png" alt="" />
            <dl>
              <dt>自定义多维度玩法</dt>
              <dd>
                个人PK公司，战队PK战队，个人PK个人，二线人员押宝，多种玩法随心选择，自定义PK周期，员工自主选择标的物。
              </dd>
            </dl>
          </div>
          <div class="box">
            <img src="../assets/img/shishi.png" alt="" />
            <dl>
              <dt>销售行为实时采集</dt>
              <dd>
                SCRM销售场景的数据采集为你研判员工和客户提供精准数据支撑，有效提高员工成交率、客单量、销售业绩。
              </dd>
            </dl>
          </div>
          <div class="box">
            <img src="../assets/img/gongju.png" alt="" />
            <dl>
              <dt>全场景营销工具支撑</dt>
              <dd>
                分享朋友圈的砍价H5、发送微信群的拼团小程序，适合不同销售能级的员工提供工具支持、知识赋能让销售技能不断提升。
              </dd>
            </dl>
          </div>
          <div class="box">
            <img src="../assets/img/fuli.png" alt="" />
            <dl>
              <dt>高性价比福利物品</dt>
              <dd>
                严选品牌供应商，放大福利价值。提升员工对福利的感知度，沉浸到福利场景中，更有效的激活员工的主观能动性。
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="partners">
        <div class="friend">
          <h5>NICETEAM 的合作伙伴</h5>
          <p>
            <img src="../assets/img/partner.png" alt="" />
          </p>
        </div>
      </div>
      <!-- 底部 -->
      <Footer :footerData="footerData" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isDetail: false,
      url: require("../assets/img/partner.png"),
      headerData: {
        free: "免费体验",
        title: "游戏化管理平台",
        content: "销售团队弹性激励",
        detail: "NICETEAM : 一个促进全员销售的员工激励平台，让销售更轻松，让管理更高效，让工作更有趣",
        immediately:"立即了解",
        path:"1",
      },
      footerData:{
        title: "限时免费！ 立刻定制企业管理解决方案",
      },
    };
  },
  methods: {
    
  },
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
}
</style>
