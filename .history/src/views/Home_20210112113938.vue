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
            <div class="item" @mouseenter="mouseenter2()">
              <p class="circle"></p>
              <title>智能获客</title>
              <p class="describe2">最好的广告是口口相传</p>
            </div>
            <div
              class="item2"
              style="left: 7rem"
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
              style="left: 10.84rem"
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
        <el-image class="img" style="right: 3rem;" :src="url1" lazy></el-image>
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
            class="img"
            :src="url2_1"
            style="z-index: 1; top: 16.3rem; right: 9.76rem;width:2.43rem; height:2.4rem;box-shadow: 10px 10px 10px rgba(0,0,0,.5);-moz-box-shadow: 10px 10px 10px rgba(0,0,0,.5);-webkit-box-shadow: 10px 10px 10px rgba(0,0,0,.5);"
            lazy
          ></el-image>
          <el-image
            class="img"
            :src="url2_2"
            style="top: 16.05rem; right: 8.9rem;width:1.43rem; height:3.4rem;"
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
          style="top: 19.5rem; width: 3.2rem; height:3.4rem;"
          lazy
        ></el-image>
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
      <!-- 微信客服 -->
      <div class="weixinkefu">
        <!-- <div class="backTop">
          <a href="#">
            <img class="arrowTop" src="../assets/img/上箭头.png" alt />
          </a>
        </div> -->
        <el-popover
          placement="left-start"
          title="禧人科技客户经理"
          width="200"
          trigger="hover"
          content="
          <img src='../assets/img/logo.png'/>
          扫码免费领取体验资格
          "
        >
          <el-button slot="reference" class="lianxi">
            <div class="borderImg">
              <el-image class="touxiang" :src="QRcode"></el-image>
            </div>
            <p class="zixun">立即咨询</p>
          </el-button>
          <el-image :src="KFcode"></el-image>
        </el-popover>
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
      isDetail2: false,
      isDetail3: false,
      url1: require("../assets/img/home-1.png"),
      url2_1: require("../assets/img/home-2_1.png"),
      url2_2: require("../assets/img/home-2_2.png"),
      url3: require("../assets/img/home-3.png"),
      headerData: {
        free: "免费体验",
        title: "游戏化管理平台",
        content: "销售团队弹性激励",
        detail:
          "NICETEAM : 一个促进全员销售的员工激励平台，让销售更轻松，让管理更高效，让工作更有趣",
        immediately: "立即了解",
        path: require("../assets/img/toutu.png"),
      },
      footerData: {
        title: "限时免费！ 立刻定制企业管理解决方案",
      },
      QRcode: require("../assets/img/客服.png"),
      KFcode: require("../assets/img/kefu.png"),
    };
  },
  methods: {
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
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6%;
    border: 0.01rem solid #000;
    // 介绍
    .introduce {
      width: 100%;
      height: 5.3rem;
      dl {
        margin-top: 0.6rem;
        dt {
          font-size: 0.24rem;
          font-weight: bold;
          letter-spacing: 0.03rem;
          margin-bottom: 0.13rem;
        }
        dd {
          font-size: 0.18rem;
          font-weight: bold;
        }
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
            width: 2.3rem;
            height: 2.82rem;
            border: 0.01rem solid #ccc;
            border-radius: 0.15rem;
            color: #fff;
            background-color: #06f;
            position: absolute;
            left: 3.16rem;
            top: 6.85rem;
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
      height: 12rem;
      // overflow: scroll;
      .wayHeader {
        height: 1.65rem;
        color: #fff;
        background-color: #06f;
        margin-bottom: 0.8rem;
        h3 {
          font-size: 0.24rem;
          padding-top: 0.4rem;
          padding-bottom: 0.27rem;
        }
        p {
          color: rgb(233, 229, 229);
          font-size: 0.2rem;
        }
      }
      .f9 {
        width: 100%;
        height: 3.2rem;
        padding-top: 0.2rem;
        background-color: #f9f9f9;
      }
      .means {
        width: 60%;
        height: 2.4rem;
        margin-left: 20%;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
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
        height: 2.3rem;
        position: absolute;
        top: 13.35rem;
        right: 3.7rem;
      }
    }
    // 优点
    .advantage {
      width: 100%;
      height: 4.8rem;
      background: linear-gradient(to right, #59c0f6, #887af5);
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
    // 微信客服
    .weixinkefu {
      position: fixed;
      bottom: 20%;
      right: 5.6%;
      // .backTop {
      //   // .arrowTop {
      //   //   width: 0.4rem;
      //   //   height: 0.3rem;
      //   // }
      // }
      .lianxi {
        width: 1.3rem;
        height: 1.5rem;
        color: #06f;
        font-size: 0.16rem;
        border: 0;
        .borderImg {
          width: 0.6rem;
          height: 0.6rem;
          border: 0.05rem solid #06f;
          border-radius: 50%;
          position: absolute;
          top: 5%;
          left: 17%;
          z-index: 0;
          .touxiang {
            width: 0.52rem;
            height: 0.52rem;
            border: 0.05rem solid #0c0;
            border-radius: 50%;
            margin-top: -0.01rem;
            margin-left: -0.01rem;
          }
        }
        .zixun {
          width: 0.8rem;
          height: 0.3rem;
          text-align: center;
          background-color: #06f;
          border-radius: 0.1rem;
          color: #fff;
          font-size: 0.16rem;
          line-height: 0.4rem;
          margin-top: 50%;
          position: absolute;
          top: 5%;
          z-index: 1;
        }
        .el-image {
          display: block;
        }
      }
    }
  }
}
</style>
