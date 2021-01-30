<template>
  <div class="home">
    <!-- 头部 -->
    <Header :headerData="headerData" />
    <!-- 主要 -->
    <div class="main">
      <div class="main-left">
        <dl>
          <dt>企/业/游/戏/化/管/理/工/具</dt>
          <dd>让工作像游戏一样充满乐趣</dd>
        </dl>
        <p>
          Niceteam : 一个促进全员销售的员工激励平台，让销售更轻松，
          让管理更高效，让工作更有趣
        </p>
        <button class="mianfei" @click="goAbout()">立即了解</button>
      </div>
      <div class="main-right">
        <img src="../assets/img/main.png" />
      </div>
    </div>
    <!-- 介绍 -->
    <div class="introduce">
      <dl>
        <dt><img src="../assets/img/value.png" /></dt>
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
          <div class="item" @mouseenter="mouseenter2()">
            <p class="circle"></p>
            <title>智能获客</title>
            <p class="describe2">最好的广告是口口相传</p>
          </div>
          <div
            class="item2"
            style="left: 4.44rem"
            v-show="isDetail2"
            @mouseleave="mouseleave2()"
          >
            <title>智能获客</title>
            <p class="line"></p>
            <p class="detail">
              基于H5,小程序的功能，通过砍价，秒杀等活动方式提高用户量和转化率、复购率的等。
            </p>
          </div>
          <div class="item" @mouseenter="mouseenter3()">
            <p class="circle"></p>
            <title>销售激励</title>
            <p class="describe3">让工作如此有趣真是不好意思</p>
          </div>
          <div
            class="item2"
            style="left: 8.9rem"
            v-show="isDetail3"
            @mouseleave="mouseleave3()"
          >
            <title>销售激励</title>
            <p class="line"></p>
            <p class="detail">
              多维度的销售PK玩法。全员参与营销，类似游戏升级打怪。从过升级等方式提升业务能力及销售量。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 方法原理 -->
    <div class="way">
      <div class="wayHeader">
        <div class="wayHeader-left">
          <h3>销售管理就选NICETEAM</h3>
          <p>
            <span>高效协作</span> | <span>有效裂变</span> |
            <span>免费注册下载</span>
          </p>
        </div>
        <div class="wayHeader-right">
          <img src="../assets/img/cup.png" />
        </div>
      </div>
      <div class="means">
        <div>
          <span class="sort">01</span>
          <p>我们如何</p>
          <p>帮您实现激励</p>
          <p class="star">
            为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
          </p>
        </div>
        <el-image class="img" :src="url1" lazy></el-image>
      </div>
      <div class="f9">
        <div class="means">
          <div>
            <span class="sort">02</span>
            <p>激发游戏管理</p>
            <p>拒绝乏味无趣</p>
            <p class="star">
              为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
            </p>
          </div>
          <el-image class="img" :src="url1" lazy></el-image>
        </div>
      </div>
      <div class="means">
        <div>
          <span class="sort">01</span>
          <p>我们如何</p>
          <p>帮您实现激励</p>
          <p class="star">
            为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
          </p>
        </div>
        <el-image class="img" :src="url1" lazy></el-image>
      </div>
      <div class="f9">
        <div class="means" style="background-color: #">
          <span class="sort" style="margin-left: 5.75rem;">02</span>
          <p style="margin-left: 5.75rem; width:2rem;">激发游戏管理</p>
          <p style="margin-left: 5.75rem; width:2rem;">拒绝乏味无趣</p>
          <p class="star" style="margin-left: 5.75rem;">
            分享、裂变、砍价、拼单
            你以为的营销都是打怪升级，游戏化管理，趣味性工作，让工作生动有趣，不再乏味无趣
          </p>
        </div>
        <el-image
          :src="url2_1"
          style="z-index: 1; top: 20.3rem; right: 9.76rem;width:2.43rem; height:2.4rem;box-shadow: 10px 10px 10px rgba(0,0,0,.5);-moz-box-shadow: 10px 10px 10px rgba(0,0,0,.5);-webkit-box-shadow: 10px 10px 10px rgba(0,0,0,.5);"
          lazy
        ></el-image>
        <el-image
          class="img"
          :src="url2_2"
          style="top: 20.05rem; right: 8.9rem;width:1.43rem; height:3.4rem;"
          lazy
        ></el-image>
      </div>
      <div class="means">
        <span class="sort">03</span>
        <p>让工作有趣</p>
        <p>赋团队激情</p>
        <p class="star">
          为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
        </p>
      </div>
      <el-image
        class="img"
        :src="url3"
        style="top: 27.5rem; width: 3.2rem; height:3.4rem;"
        lazy
      ></el-image>
    </div>
    <!-- 优势 -->
    <div class="advantage">
      <h5>销售管理就选Niceteam</h5>
      <div class="advan">
        <div class="box">
          <!-- <img src="../assets/img/duowei.png" alt="" /> -->
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
    <!-- 微信客服 -->
    <Weixinkefu />
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Weixinkefu from "../components/Weixinkefu";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Weixinkefu,
    Footer,
  },
  data() {
    return {
      isDetail: false,
      isDetail2: false,
      isDetail3: false,
      url1: require("../assets/img/home-1.png"),
      url2_1: require("../assets/img/home-2_1.png"),
      url2_2: require("../assets/img/home-2_2.png"),
      url3: require("../assets/img/home-3.png"),
      headerData: {
        isOn1: "on",
        isOn2: "",
        isOn3: "",
        isOn4: "",
        isOn5: "",
        isOn6: "",
      },
    };
  },
  methods: {
    goAbout() {
      this.$router.push("/aboutus");
    },
    mouseenter() {
      this.isDetail = true;
    },
    mouseleave() {
      this.isDetail = false;
    },
    mouseenter2() {
      this.isDetail2 = true;
    },
    mouseleave2() {
      this.isDetail2 = false;
    },
    mouseenter3() {
      this.isDetail3 = true;
    },
    mouseleave3() {
      this.isDetail3 = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  font-size: 0.16rem;
  // 主要
  .main {
    height: 5.4rem;
    background-color: #ededfb;
    display: flex;
    .main-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 18%;
      padding-top: 0.66rem;
      padding-bottom: 0.63rem;
      dl {
        dt {
          text-align: left;
          font-size: 0.28rem;
          color: #4a4bda;
          margin-bottom: 0.1rem;
          letter-spacing: 0.01rem;
        }
        dd {
          text-align: left;
          width: 3.84rem;
          font-size: 0.48rem;
        }
      }
      p {
        width: 3.94rem;
        text-align: left;
        font-size: 0.14rem;
        color: #909090;
        margin-bottom: 0.6rem;
      }
      .mianfei {
        width: 1.4rem;
        height: 0.4rem;
        font-size: 0.14rem;
        color: #fff;
        border: 0;
        border-radius: 0.2rem;
        background-color: #f8892b;
        margin-right: 0.4rem;
        outline: none;
      }
      .mianfei:active {
        border: 0.02rem solid #aaa;
      }
    }
    .main-right {
      img {
        height: 4.55rem;
        margin-top: 0.66rem;
        margin-left: 0.5rem;
      }
    }
  }
  // 介绍
  .introduce {
    width: 100%;
    height: 5.3rem;
    dl {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.6rem;
      margin-bottom: 1rem;
    }
    .content {
      width: 70%;
      margin-left: 15%;
      margin-top: 0.6rem;
      .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        background-color: #fff;
        z-index: 999;
        position: relative;
        .item {
          width: 2.25rem;
          height: 2.8rem;
          border: 0.01rem solid #ccc;
          border-radius: 0.15rem;
          .circle {
            width: 0.66rem;
            height: 0.66rem;
            margin-left: 0.79rem;
            margin-top: 0.46rem;
            margin-bottom: 0.15rem;
            border: 0.03rem solid #d7d7d7;
            border-radius: 50%;
          }
          title {
            display: block;
            letter-spacing: 0.01rem;
            margin-bottom: 0.5rem;
          }
          .describe1 {
            width: 0.8rem;
            margin-left: 0.725rem;
          }
          .describe2 {
            width: 0.8rem;
            margin-left: 0.725rem;
          }
          .describe3 {
            width: 1.2rem;
            margin-left: 0.525rem;
          }
        }
        @keyframes myfirst {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @-moz-keyframes myfirst {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @-webkit-keyframes myfirst {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @-o-keyframes myfirst {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .item2 {
          width: 2.28rem;
          height: 2.82rem;
          border: 0.01rem solid #ccc;
          border-radius: 0.15rem;
          color: #fff;
          background-color: #06f;
          position: absolute;
          left: 0rem;
          top: 0rem;
          animation: myfirst 1s;
          // opacity: 0;
          z-index: 1;
          title {
            display: block;
            letter-spacing: 0.01rem;
            margin-top: 0.7rem;
            margin-bottom: 0.2rem;
            margin-left: 0.4rem;
            text-align: left;
          }
          .line {
            width: 0.5rem;
            border-bottom: 0.02rem solid #fff;
            margin-left: 0.4rem;
            margin-bottom: 0.2rem;
          }
          .detail {
            width: 1.4rem;
            text-align: left;
            margin-left: 0.4rem;
          }
        }
      }
    }
  }
  // 方法原理
  .way {
    width: 100%;
    height: 12rem;
    .wayHeader {
      width: 100%;
      height: 2.99rem;
      color: #fff;
      background: linear-gradient(to right, #4a4bda, #fa9c85);
      display: flex;
      justify-content: space-around;
      align-items: center;
      .wayHeader-left {
        margin-left: 2rem;
        margin-bottom: 1rem;
        h3 {
          text-align: left;
          font-size: 0.4rem;
          padding-top: 0.4rem;
          padding-bottom: 0.27rem;
        }
        p {
          text-align: left;
          color: rgb(233, 229, 229);
          font-size: 0.16rem;
        }
      }
      .wayHeader-right {
        margin-right: 2rem;
        img {
          margin-top: 0.05rem;
          height: 2.99rem;
        }
      }
    }
    .f9 {
      background-color: #ededfb;
    }
    .means {
      width: 60%;
      height: 4rem;
      margin-left: 20%;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .sort {
        font-size: 0.4rem;
        font-weight: bold;
        display: block;
        color: #4a4bda;
        margin-top: -0.5rem;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.24rem;
        font-weight: bold;
      }
      .star {
        width: 3.36rem;
        font-size: 0.14rem;
        margin-top: 0.4rem;
      }
    }
  }
  // 优点
  .advantage {
    width: 100%;
    height: 4.8rem;

    h5 {
      color: #fff;
      font-size: 0.24rem;
      font-weight: normal;
      padding-top: 0.66rem;
      padding-bottom: 0.5rem;
    }
    .advan {
      display: flex;
      width: 60%;
      margin-left: 20%;
      justify-content: space-between;
      .box {
        width: 1.9rem;
        height: 2.54rem;
        background-color: #fff;
        border-radius: 0.05rem;
        border: 0.02rem solid #cfdffd;
        // box-shadow: 5px 5px 3px #ccc;
        img {
          width: 0.4rem;
          height: 0.4rem;
          margin-top: 0.45rem;
          margin-bottom: 0.1rem;
        }
        dl {
          dt {
            font-size: 0.14rem;
            margin-bottom: 0.2rem;
          }
          dd {
            width: 85%;
            margin-left: 7.5%;
            font-size: 0.12rem;
            text-align: left;
            color: rgb(90, 85, 85);
          }
        }
      }
    }
  }
  // 合作伙伴
  .partners {
    height: 4.8rem;
    .friend {
      width: 95%;
      margin-left: 2.5%;
      margin-top: 2.5%;
      border-top: 0.02rem solid #90cffa;
      border-left: 0.01rem solid #ccc;
      border-right: 0.01rem solid #ccc;
      h5 {
        color: #8387a1;
        font-size: 0.24rem;
        font-weight: normal;
        padding-top: 0.66rem;
        padding-bottom: 0.5rem;
      }
      p {
        img {
          width: 8.2rem;
        }
      }
    }
  }
}
</style>
