<template>
  <div class="home">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <Header></Header>
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
        <el-image class="img" :src="url" style="top: 16.41rem; right: 8.5rem;" lazy></el-image>
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
            <img src="" alt="" />
            <dl>
              <dt>全场景营销工具支撑</dt>
              <dd>
                分享朋友圈的砍价H5、发送微信群的拼团小程序，适合不同销售能级的员工提供工具支持、知识赋能让销售技能不断提升。
              </dd>
            </dl>
          </div>
          <div class="box">
            <img src="" alt="" />
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
            <img src="../assets/img/partner.png" alt="">
          </p>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer">
        <div class="footerTop">
          <h5>限时免费！ 立即定制企业管理解决方案</h5>
          <button>免费体验</button>
        </div>
        <div class="footerBottom">
          <div class="detail">
            <div class="left">
              <dl>
                <dt>产品及服务</dt>
                <dd>关于NICETEAM</dd>
                <dd>公司历程</dd>
                <dd>禧多多</dd>
              </dl>
              <dl>
                <dt>关于NICETEAM</dt>
                <dd>相关业务</dd>
                <dd>公司历程</dd>
                <dd>禧多多</dd>
              </dl>
              <dl class="jishu">
                <dt>技术支持</dt>
                <dd>注册登陆问题</dd>
                <dd style="margin-bottom: 0.09rem;">备案</dd>
                <dd style="color: #515151">1</dd>
              </dl>
            </div>
            <div class="right">
              <img src="" alt="" />
              <p>扫码关注公众号</p>
            </div>
          </div>
          <p class="line"></p>
          <div class="bottom">
            <dl>
              <dt>
                <span>用户反馈</span><span>隐私政策</span><span>详情了解</span>
              </dt>
              <dd>sdasdsad@qq.com</dd>
            </dl>
            <p><img src="" alt="" /><span>NICETEAM</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      isDetail: false,
      url:require("../assets/img/partner.png"),
    };
  },
  methods: {
    mouseenter() {
      console.log("111");
      this.isDetail = true;
    },
    mouseleave() {
      console.log("222");
      this.isDetail = false;
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
    margin-left: 6.06%;
    border: 0.01rem solid #000;

    // 介绍
    .introduce {
      width: 100%;
      height: 5.5rem;
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
        width: 60%;
        margin-left: 20%;
        margin-top: 0.6rem;
        .container {
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
              border: 0.01rem solid rgb(78, 56, 56);
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
              top: 9.67rem;
            }
            to {
              top: 6.87rem;
            }
          }

          @-moz-keyframes myfirst {
            from {
              top: 9.67rem;
            }
            to {
              top: 6.87rem;
            }
          }

          @-webkit-keyframes myfirst {
            from {
              top: 9.67rem;
            }
            to {
              top: 6.87rem;
            }
          }

          @-o-keyframes myfirst {
            from {
              top: 9.67rem;
            }
            to {
              top: 6.87rem;
            }
          }
          .item2 {
            width: 2.25rem;
            height: 2.8rem;
            border: 0.01rem solid #ccc;
            border-radius: 0.15rem;
            color: #fff;
            background-color: #06f;
            position: absolute;
            left: 3.87rem;
            animation: myfirst 1s;
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
      overflow: scroll;
      .wayHeader {
        height: 1.65rem;
        color: #fff;
        background-color: #06f;
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
        p{
          img{
            width: 8.2rem;
          }
        }
      }
    }
    // 底部
    .footer {
      height: 4.78rem;
      .footerTop {
        height: 1.78rem;
        background-color: #06f;
        h5 {
          font-size: 0.26rem;
          font-weight: normal;
          color: #fff;
          padding-top: 0.4rem;
          padding-bottom: 0.3rem;
        }
        button {
          // display: flex;
          width: 1.5rem;
          height: 0.4rem;
          line-height: 0.4rem;
          font-size: 0.18rem;
          border: 0;
          border-radius: 0.05rem;
        }
      }
      .footerBottom {
        height: 3rem;
        background-color: #515151;
        color: #fff;
        .detail {
          width: 60%;
          margin-left: 20%;
          padding-top: 0.6rem;
          display: flex;
          justify-content: space-between;
          .left {
            dl {
              display: inline-block;
              margin-right: 0.5rem;
              dt {
                font-weight: bold;
                font-size: 0.18rem;
                text-align: left;
                margin-bottom: 0.2rem;
              }
              dd {
                text-align: left;
                font-size: 0.14rem;
                margin-bottom: 0.05rem;
                color: #d7d7d7;
              }
            }
            .jishu {
              margin-left: 0.4rem;
            }
          }
          .right {
            img {
              width: 0.55rem;
              height: 0.55rem;
            }
            p {
              font-weight: bold;
              margin-top: 0.05rem;
            }
          }
        }
        .line {
          width: 60%;
          margin-left: 20%;
          border-bottom: 0.02rem solid #727272;
          margin-top: 0.25rem;
          margin-bottom: 0.2rem;
        }
        .bottom{
          width: 60%;
          margin-left: 20%;
          display: flex;
          justify-content: space-between;
          dl{
            dt{
              margin-bottom: 0.08rem;
            }
            dd{
              text-align: left;
              color: #d7d7d7;
            }
          }
          p{
            margin-right: 0.5rem;
            display: flex;
            align-items: center;
            img{
              width: 0.3rem;
              height: 0.4rem;
              margin-right: 0.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
