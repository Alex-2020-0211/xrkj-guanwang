<template>
  <div class="home">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <div class="header">
        <div class="headerTop">
          <p class="bar">
            <img class="logo" src="../assets/img/logo.png" alt />
            <a>首页</a>
            <a>产品介绍</a>
            <a>解决方案</a>
            <a>客户案例</a>
            <a>关于</a>
          </p>
          <button class="tiyan">免费体验</button>
        </div>
        <div class="headerMain">
          <div class="theme">
            <dl>
              <dt>游戏化管理平台</dt>
              <dd>销售团队弹性激励</dd>
            </dl>
            <p class="jianjie">
              NICETEAM:
              一个促进全员销售的员工激励平台，让销售更轻松，让管理更高效，让工作更有趣
            </p>
            <button class="knowMore">立即了解</button>
          </div>
          <img class="mainImg" src="" alt />
        </div>
      </div>
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
        <img class="img" src="" alt="" />
        <div class="means">
          <span class="sort" style="margin-left: 5.5rem;">02</span>
          <p style="margin-left: 5.5rem;">激发游戏管理</p>
          <p style="margin-left: 5.5rem;">拒绝乏味无趣</p>
          <p class="star" style="margin-left: 5.5rem;">
            分享、裂变、砍价、拼单
            你以为的营销都是打怪升级，游戏化管理，趣味性工作，让工作生动有趣，不再乏味无趣
          </p>
        </div>
        <img class="img" src="" alt="" style="top: 16.41rem; right: 7.35rem;" />
        <div class="means">
          <span class="sort">03</span>
          <p>让工作有趣</p>
          <p>赋团队激情</p>
          <p class="star">
            为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
          </p>
        </div>
        <img class="img" src="" alt="" style="top: 19.44rem;" />
      </div>
      <!-- 优势 -->
      <div class="advantage"></div>
      <!-- 合作伙伴 -->
      <div class="partners"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      isDetail: false,
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
    // 头部
    .header {
      width: 100%;
      height: 4.5rem;
      color: #fff;
      background-color: #06f;
      .headerTop {
        width: 60%;
        margin-left: 20%;
        padding-top: 0.3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .logo {
          width: 0.7rem;
          height: 0.55rem;
        }
        .bar {
          width: 60%;
          font-weight: bold;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .tiyan {
          width: 1rem;
          height: 0.3rem;
          color: #fff;
          border: 0.01rem solid #fff;
          border-radius: 0.05rem;
          background-color: #7fb2ff;
        }
      }
      .headerMain {
        width: 60%;
        height: 2.7rem;
        margin-top: 0.35rem;
        margin-left: 25%;
        display: flex;
        justify-content: space-between;
        .theme {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          dl {
            dt {
              font-size: 0.2rem;
              font-weight: bold;
              text-align: left;
              margin-bottom: 0.03rem;
            }
            dd {
              text-align: left;
            }
          }
          .jianjie {
            width: 3rem;
            text-align: left;
          }
          .knowMore {
            width: 1.5rem;
            height: 0.5rem;
            color: #fff;
            font-size: 0.18rem;
            letter-spacing: 0.02rem;
            background-color: #f63;
            border: 0;
            border-radius: 0.05rem;
          }
        }
        .mainImg {
          width: 3.8rem;
          height: 2.7rem;
        }
      }
    }
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
        width: 52%;
        margin-left: 25%;
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
            left: 6.36rem;
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
        width: 46%;
        height: 2.4rem;
        margin-left: 27%;
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
        height: 2rem;
        position: absolute;
        top: 13.38rem;
        right: 3.2rem;
      }
    }
    // 优点
    .advantage {
      width: 100%;
      height: 4.8rem;
      background: linear-gradient(to right, #59c0f6, #887af5);
    }
    // 合作伙伴
    .partners {
      height: 4.8rem;
    }
  }
}
</style>
