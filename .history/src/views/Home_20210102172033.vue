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
          <span class="sort" style="margin-left: 400px;">02</span>
          <p>激发游戏管理</p>
          <p>拒绝乏味无趣</p>
          <p class="star" style="margin-left: 600px;">
            分享、裂变、砍价、拼单
            你以为的营销都是打怪升级，游戏化管理，趣味性工作，让工作生动有趣，不再乏味无趣
          </p>
        </div>
        <img class="img" src="" alt="" style="top: 1641px; right: 1185px;" />
        <div class="means">
          <span class="sort">03</span>
          <p>让工作有趣</p>
          <p>赋团队激情</p>
          <p class="star">
            为员工建立星愿梦工厂，员工通过平台选择专属星愿，通过销售任务及日常表现累计业绩，从而提升员工积极性
          </p>
        </div>
        <img class="img" src="" alt="" style="top: 1944px;" />
      </div>
      <!-- 优势 -->
      <div class="advantage">

      </div>
      <!-- 合作伙伴 -->
      <div class="partners">

      </div>
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
  font-size: 16px;
  .border {
    width: 88.88%;
    margin-top: 50px;
    margin-left: 6.06%;
    border: 1px solid #000;
    .header {
      width: 100%;
      height: 450px;
      color: #fff;
      background-color: #06f;
      .headerTop {
        width: 60%;
        margin-left: 20%;
        padding-top: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .logo {
          width: 70px;
          height: 55px;
        }
        .bar {
          width: 60%;
          font-weight: bold;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .tiyan {
          width: 100px;
          height: 30px;
          color: #fff;
          border: 1px solid #fff;
          border-radius: 5px;
          background-color: #7fb2ff;
        }
      }
      .headerMain {
        width: 60%;
        height: 270px;
        margin-top: 35px;
        margin-left: 25%;
        .theme {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          dl {
            dt {
              font-size: 20px;
              font-weight: bold;
              text-align: left;
              margin-bottom: 3px;
            }
            dd {
              text-align: left;
            }
          }
          .jianjie {
            width: 300px;
            text-align: left;
          }
          .knowMore {
            width: 150px;
            height: 50px;
            color: #fff;
            font-size: 18px;
            letter-spacing: 2px;
            background-color: #f63;
            border: 0;
            border-radius: 5px;
          }
        }
        .mainImg {
          width: 380px;
          height: 270px;
          position: absolute;
          top: 170px;
          right: 580px;
        }
      }
    }
    .introduce {
      width: 100%;
      height: 550px;
      dl {
        margin-top: 60px;
        dt {
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 3px;
          margin-bottom: 13px;
        }
        dd {
          font-size: 18px;
          // letter-spacing: 1px;
          font-weight: bold;
        }
      }
      .content {
        width: 52%;
        margin-left: 25%;
        margin-top: 60px;
        .container {
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          .item {
            width: 225px;
            height: 280px;
            border: 1px solid #ccc;
            border-radius: 15px;
            .circle {
              width: 66px;
              height: 66px;
              margin-left: 79px;
              margin-top: 46px;
              margin-bottom: 15px;
              border: 1px solid rgb(78, 56, 56);
              border-radius: 50%;
            }
            title {
              display: block;
              letter-spacing: 1px;
              margin-bottom: 50px;
            }
            .describe1 {
              width: 80px;
              margin-left: 72.5px;
            }
            .describe2 {
              width: 80px;
              margin-left: 72.5px;
            }
            .describe3 {
              width: 120px;
              margin-left: 52.5px;
            }
          }
          @keyframes myfirst {
            from {
              top: 967px;
            }
            to {
              top: 687px;
            }
          }

          @-moz-keyframes myfirst {
            from {
              top: 967px;
            }
            to {
              top: 687px;
            }
          }

          @-webkit-keyframes myfirst {
            from {
              top: 967px;
            }
            to {
              top: 687px;
            }
          }

          @-o-keyframes myfirst {
            from {
              top: 967px;
            }
            to {
              top: 687px;
            }
          }
          .item2 {
            width: 225px;
            height: 280px;
            border: 1px solid #ccc;
            border-radius: 15px;
            color: #fff;
            background-color: #06f;
            position: absolute;
            // top: 687px;
            left: 636px;
            animation: myfirst 1s;
            title {
              display: block;
              letter-spacing: 1px;
              margin-top: 70px;
              margin-bottom: 20px;
              margin-left: 40px;
              text-align: left;
            }
            .line {
              width: 50px;
              border-bottom: 2px solid #fff;
              margin-left: 40px;
              margin-bottom: 20px;
            }
            .detail {
              width: 140px;
              text-align: left;
              margin-left: 40px;
            }
          }
        }
      }
    }
    .way {
      height: 1200px;
      .wayHeader {
        height: 165px;
        color: #fff;
        background-color: #06f;
        h3 {
          font-size: 24px;
          padding-top: 40px;
          padding-bottom: 27px;
        }
        p {
          color: rgb(233, 229, 229);
          font-size: 20px;
        }
      }
      .means {
        width: 46%;
        height: 240px;
        margin-left: 27%;
        border: 1px solid #000;
        margin-top: 60px;
        color: #06f;
        text-align: left;
        .sort{
          font-size: 24px;
          font-weight: bold;
          display: block;
          margin-bottom: 30px;
        }
        p{
          font-size: 22px;
          font-weight: bold;
        }
        .star{
          width: 261px;
          margin-top: 40px;
          font-size: 16px;
        }
      }
      .img{
        width: 360px;
        height: 200px;
        position: absolute;
        top: 1338px;
        right: 730px;
      }
    }
    .advantage{
      width: 100%;
      height: 480px;
      background: linear-gradient(to right, #59c0f6 , #887af5);
    }
    .partners{
      height: 480px;
    }
  }
}
</style>
