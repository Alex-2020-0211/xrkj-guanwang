<template>
  <div class="blog">
    <div class="border">
      <!-- 头部 -->
      <div class="header">
        <div class="headerTop">
          <p class="bar">
            <img class="logo" src="../assets/img/logo.png" alt />
            <a class="header-item" href="http://localhost:8080/#/">首页</a>
            <a
              class="header-item"
              href="http://localhost:8080/#/productintroduction"
              >产品介绍</a
            >
            <a class="header-item" href="http://localhost:8080/#/solutions"
              >解决方案</a
            >
            <a class="header-item" href="http://localhost:8080/#/customercase"
              >客户案例</a
            >
            <a class="header-item" href="http://localhost:8080/#/blog"
              >Nice博客</a
            >
            <a class="header-item" href="http://localhost:8080/#/aboutus"
              >关于</a
            >
          </p>
          <button class="mianfei" @click="tiyan()">免费试用</button>
        </div>
        <div class="headerMain">
          <div class="theme">
            <dl>
              <dt>Nice博客</dt>
            </dl>
          </div>
        </div>
      </div>
      <!-- 导航条 -->
      <div class="nav">
        <a class="nav-item" style="margin-left:4.5%" href="">最新文章</a>
        <a class="nav-item" href="">客户案例</a>
        <a class="nav-item" href="">智能用户运营</a>
        <a class="nav-item" href="">数据分析</a>
        <a class="nav-item" href="">产品动态</a>
        <a class="nav-item" href="">市场活动</a>
        <a class="nav-item" style="margin-right:0;" href="">资料下载</a>
      </div>
      <!-- 具体内容 -->
      <div class="detail">
        <p class="current">
          <span>当前位置</span>:<span>Niceteam</span> >
          <span>Niceteam博客</span>
        </p>
        <div class="detailContent">
          <a
            class="more"
            href="https://mp.weixin.qq.com/s/KpLLNLLS8bprZYxrbAmCGw"
          >
            <div class="detailContent-item">
              <img class="itemImg" src="../assets/img/case-1.png" alt="" />
              <div class="right">
                <dl>
                  <dt>
                    赋能家居售后服务 数据驱动平台优化及用户运营 | 行业案例
                  </dt>
                  <dd>
                    通过深入数据分析，针对性的运营策略及策略攻略，帮助家居售后服务平台提升需要的数量，并通过策略改进逐渐接近平衡的最佳状态。
                  </dd>
                </dl>
                <div class="bottom">
                  <p class="bottom-left">
                    <img
                      style="width:0.3rem;height:0.3rem;margin-right:0.1rem;"
                      src="../assets/img/人.png"
                      alt
                    />
                    <span>Niceteam 2020-06-18 13: 12</span>
                  </p>
                  <p class="bottom-right">
                    <img
                      style="width:0.2rem;height:0.2rem;margin-right:0.1rem;"
                      src="../assets/img/标签.png"
                      alt
                    />
                    <span>产品运营，用户运营</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
          
        </div>
      </div>
      <!-- 右边搜索栏 -->
      <div class="search">
        <input class="care" type="text" placeholder="请输入您关心的增长词" />
        <img class="careImg" src="../assets/img/搜索.png" alt />
        <div class="hot">
          <p class="hot-title">热门文章</p>
          <p class="hot-item">
            运营技能加Buff，最全实战资料包阿骨打国与国的昂贵的
          </p>
          <p class="hot-item">
            运营技能加Buff，最全实战资料包阿骨打国与国的昂贵的
          </p>
          <p class="hot-item">
            运营技能加Buff，最全实战资料包阿骨打国与国的昂贵的
          </p>
          <p class="hot-item">
            运营技能加Buff，最全实战资料包阿骨打国与国的昂贵的
          </p>
          <p class="hot-item" style="border:0;">
            运营技能加Buff，最全实战资料包阿骨打国与国的昂贵的
          </p>
        </div>
        <div class="guanzhu">
          <img class="guanzhuImg" src="../assets/img/gzhCode.png" alt />
          <dl class="guanzhudl">
            <dt>扫一扫关注</dt>
            <dd>Niceteam公众号</dd>
            <p style="font-size:0.14rem;">最新运营咨询，了解科技前沿</p>
          </dl>
        </div>
      </div>
      <!-- 微信客服 -->
      <Weixinkefu />
      <!-- 底部 -->
      <Footer :footerData="footerData" />
    </div>
  </div>
</template>

<script>
import Weixinkefu from "../components/Weixinkefu";
import Footer from "../components/Footer";

export default {
  name: "Blog",
  components: {
    Weixinkefu,
    Footer,
  },
  data() {
    return {
      url: require("../assets/img/fuli.png"),
      footerData: {
        title: "限时免费！ 距离销冠团队只差一步",
      },
    };
  },
  methods: {
    goAbout() {
      this.$router.replace("/aboutus");
    },
    goProductIntroduction() {
      this.$router.replace("/productintroduction");
    },
    goTransform() {
      this.$router.replace("/transform");
    },
    goManage() {
      this.$router.replace("/manage");
    },
    On1() {
      this.isOn1 = "on";
      this.isOn2 = "";
      this.isOn3 = "";
    },
    On2() {
      this.isOn1 = "";
      this.isOn2 = "on";
      this.isOn3 = "";
    },
    On3() {
      this.isOn1 = "";
      this.isOn2 = "";
      this.isOn3 = "on";
    },
    tiyan() {
      this.$router.replace("/connect");
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6%;
    border: 0.01rem solid #aaa;
    // 头部
    .header {
      width: 100%;
      height: 4.1rem;
      color: #fff;
      background-color: #06f;
      .headerTop {
        width: 60%;
        margin-left: 21%;
        padding-top: 0.3rem;
        display: flex;
        justify-content: space-between;
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
          .header-item {
            text-decoration: none;
          }
          .header-item:link {
            color: #fff;
          }
          .header-item:visited {
            color: #fff;
          }
        }
        .mianfei {
          width: 0.9rem;
          height: 0.3rem;
          font-size: 0.14rem;
          color: #fff;
          border: 0.01rem solid #fff;
          border-radius: 0.05rem;
          background-color: #7fb2ff;
          margin-right: 0.4rem;
          outline: none;
        }
        .mianfei:active {
          border: 0.01rem solid #ccc;
        }
      }
      .headerMain {
        width: 60%;
        height: 2.7rem;
        margin-left: 20%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        dl {
          dt {
            font-size: 0.3rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 0.15rem;
            letter-spacing: 0.03rem;
          }
        }
      }
    }
    // 导航条
    .nav {
      width: 50%;
      height: 0.8rem;
      margin-left: 10%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 0.01rem solid #000;
      .nav-item {
        text-decoration: none;
        margin-right: 0.2rem;
        font-size: 0.18;
      }
      .nav-item:link {
        color: #aaa;
      }
      .nav-item:visited {
        color: #aaa;
      }
    }
    // 具体内容
    .detail {
      width: 60%;
      margin-left: 12%;
      text-align: left;
      .current {
        margin-top: 0.1rem;
        margin-bottom: 0.2rem;
        color: #bbb;
      }
      .detailContent {
        width: 80%;
        .more {
          text-decoration: none;
          .detailContent-item {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 0.2rem;
            margin-bottom: 0.2rem;
            border-bottom: 0.01rem solid #000;
            .itemImg {
              width: 2rem;
              height: 1.4rem;
              border-radius: 0.1rem;
              margin-right: 0.1rem;
            }
            .right {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              dl {
                dt {
                  font-size: 0.18rem;
                  margin-bottom: 0.2rem;
                }
                dd {
                  font-size: 0.15rem;
                  color: #ccc;
                }
              }
              .bottom {
                height: 0.3rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .bottom-left {
                  height: 100%;
                  display: flex;
                  align-items: center;
                }
                .bottom-right {
                  height: 100%;
                  display: flex;
                  align-items: center;
                }
              }
            }
          }
        }
      }
    }
    // 右边搜索栏
    .search {
      width: 3.2rem;
      height: 5rem;
      position: absolute;
      top: 5rem;
      right: 2.2rem;
      .care {
        width: 3.2rem;
        height: 0.3rem;
        margin-left: -0.05rem;
        padding-left: 0.08rem;
      }
      .careImg {
        position: absolute;
        top: 0.1rem;
        right: 0.08rem;
      }
      .hot {
        margin-top: 0.1rem;
        background-color: #f9f9f9;
        .hot-title {
          text-align: left;
          font-size: 0.18rem;
          padding-top: 0.2rem;
          margin-left: 0.2rem;
          margin-bottom: 0.3rem;
        }
        .hot-item {
          width: 2.85rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-left: 0.2rem;
          border-bottom: 0.01rem solid #ccc;
          padding-bottom: 0.15rem;
          margin-bottom: 0.15rem;
        }
      }
      .guanzhu {
        height: 1.4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 0.01rem solid #ccc;
        margin-top: 0.2rem;
        .guanzhuImg {
          width: 1rem;
          height: 1rem;
        }
        .guanzhudl {
          dt {
            text-align: left;
          }
          dd {
            text-align: left;
            margin-bottom: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
