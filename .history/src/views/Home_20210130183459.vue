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
    <!-- 价值 -->
    <div class="value">
      <dl>
        <dt><img src="../assets/img/value.png" /></dt>
      </dl>
      <div class="content">
        <div class="container">
          <div class="item" @mouseenter="mouseenter()">
            <p class="circle"><img src="../assets/img/value-1.png" /></p>
            <title>游戏化营销</title>
          </div>
          <div class="item2" v-show="isDetail" @mouseleave="mouseleave()">
            <title>游戏化营销</title>
            <p class="line"></p>
            <p class="detail">
              根据员工工作日常表现发放福利，员工选择心仪礼物，降低激励成本，提高激励效果
            </p>
          </div>
          <div class="item" @mouseenter="mouseenter2()">
            <p class="circle"><img src="../assets/img/value-2.png" /></p>
            <title>游戏化管理</title>
          </div>
          <div
            class="item2"
            style="left: 3.54rem"
            v-show="isDetail2"
            @mouseleave="mouseleave2()"
          >
            <title>游戏化管理</title>
            <p class="line"></p>
            <p class="detail">
              基于H5,小程序的功能，通过砍价，秒杀等活动方式提高用户量和转化率、复购率的等。
            </p>
          </div>
          <div class="item" @mouseenter="mouseenter3()">
            <p class="circle"><img src="../assets/img/value-3.png" /></p>
            <title>游戏化学习</title>
          </div>
          <div
            class="item2"
            style="left: 7.1rem"
            v-show="isDetail3"
            @mouseleave="mouseleave3()"
          >
            <title>游戏化学习</title>
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
        <img src="../assets/img/home-1.png" lazy></img>
      </div>
      <div class="f9">
        <div class="means">
          <img src="../assets/img/home-2.png" lazy></img>
          <div>
            <span class="sort">02</span>
            <p>激发游戏管理</p>
            <p>拒绝乏味无趣</p>
            <p class="star">
              分享、裂变、砍价、拼单
              你以为的营销都是打怪升级，游戏化管理，趣味性工作，让工作生动有趣，不再乏味无趣
            </p>
          </div>
        </div>
      </div>
      <div class="means">
        <div>
          <span class="sort">03</span>
          <p>让工作有趣</p>
          <p>赋团队激情</p>
          <p class="star">
            为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
          </p>
        </div>
        <img src="../assets/img/home-3.png" lazy></img>
      </div>
    </div>
    <!-- 优势 -->
    <div class="advantage">
      <img class="top" src="../assets/img/advantage.png" />
      <div class="advan">
        <div class="box">
          <img src="../assets/img/adv-1.png" alt="" />
          <dl>
            <dt>自定义多维度玩法</dt>
            <dd>
              个人PK公司，战队PK战队，个人PK个人，二线人员押宝，多种玩法随心选择，自定义PK周期，员工自主选择标的物。
            </dd>
          </dl>
        </div>
        <div class="box">
          <img src="../assets/img/adv-2.png" alt="" />
          <dl>
            <dt>销售行为实时采集</dt>
            <dd>
              SCRM销售场景的数据采集为你研判员工和客户提供精准数据支撑，有效提高员工成交率、客单量、销售业绩。
            </dd>
          </dl>
        </div>
        <div class="box">
          <img src="../assets/img/adv-3.png" alt="" />
          <dl>
            <dt>全场景营销工具支撑</dt>
            <dd>
              分享朋友圈的砍价H5、发送微信群的拼团小程序，适合不同销售能级的员工提供工具支持、知识赋能让销售技能不断提升。
            </dd>
          </dl>
        </div>
        <div class="box">
          <img src="../assets/img/adv-4.png" alt="" />
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
  // 价值
  .value {
    width: 100%;
    height: 5.8rem;
    dl {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.6rem;
      margin-bottom: 0.8rem;
    }
    .content {
      width: 60%;
      margin-left: 20%;
      .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: relative;
        .item {
          width: 2.5rem;
          height: 3.2rem;
          border-radius: 0.15rem;
          box-shadow: 0px 6px 40px rgba(74, 75, 218, 0.16);
          .circle {
            width: 0.66rem;
            height: 0.66rem;
            margin-left: 0.79rem;
            margin-top: 0.46rem;
            margin-bottom: 0.9rem;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              margin-top: 0.5rem;
              margin-left: 0.2rem;
              width: 1.4rem;
              height: 1.4rem;
            }
          }
          title {
            display: block;
            font-size: 0.26rem;
            letter-spacing: 0.01rem;
            margin-bottom: 0.5rem;
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
          width: 2.54rem;
          height: 3.22rem;
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
      height: 4.8rem;
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
      img {
        width: 4.5rem;
        height: 4.5rem;
      }
    }
  }
  // 优点
  .advantage {
    width: 100%;
    height: 6.04rem;
    background: linear-gradient(to bottom, #7374EF, #4A4BDA);
    .top{
      margin-top: 0.67rem;
    }
    .advan {
      display: flex;
      width: 60%;
      margin-left: 20%;
      margin-top: 0.8rem;
      justify-content: space-between;
      .box {
        width: 2.1rem;
        height: 2.84rem;
        background-color: #fff;
        border-radius: 0.05rem;
        border: 0.02rem solid #cfdffd;
        // box-shadow: 5px 5px 3px #ccc;
        img {
          width: 0.8rem;
          height: 0.8rem;
          margin-top: 0.25rem;
          margin-bottom: 0.15rem;
        }
        dl {
          dt {
            font-size: 0.14rem;
            margin-bottom: 0.2rem;
            font-weight: bold;
          }
          dd {
            width: 80%;
            margin-left: 10%;
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
