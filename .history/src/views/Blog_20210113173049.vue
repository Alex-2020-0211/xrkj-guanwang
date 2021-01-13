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
      <ul class="nav">
        <li
          v-for="(tab, index) in tabs"
          @click="toggle(index, tab.view)"
          :class="{ active: active == index }"
          class="nav-item"
        >
          {{ tab.title }}
        </li>
      </ul>
      <!-- <a class="nav-item" style="margin-left:4.5%" href="javascript:;"
          >最新文章</a
        >
        <a class="nav-item" href="javascript:;">客户案例</a>
        <a class="nav-item" href="javascript:;">智能用户运营</a>
        <a class="nav-item" href="javascript:;">数据分析</a>
        <a class="nav-item" href="javascript:;">产品动态</a>
        <a class="nav-item" href="javascript:;">市场活动</a>
        <a class="nav-item" style="margin-right:0;" href="javascript:;"
          >资料下载</a
        > -->
      <!-- 具体内容 -->
      <component :is="currentView" />
      <!-- <div class="detail">
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
              <img class="itemImg" src="../assets/img/电商运营.png" alt="" />
              <div class="right">
                <dl>
                  <dt>
                    <p class="t">游戏与营销你必须要知道的事情</p>
                    <p>| 行业案例</p>
                  </dt>
                  <dd>
                    游戏化并非只是单纯设计一些游戏来娱乐消费者，真正的目的是要让消费者被有趣的内容吸引，在游戏化的营销活动中对产品产生兴趣，从而进行消费。
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
          <a
            class="more"
            href="https://mp.weixin.qq.com/s/RzznErZD7SDFoxmBSY_aJg"
          >
            <div class="detailContent-item">
              <img class="itemImg" src="../assets/img/拼团.png" alt="" />
              <div class="right">
                <dl>
                  <dt>
                    <p class="t">
                      实战:解析互联网拼团裂变模式，手把手教你拼团怎么做
                    </p>
                    <p>| 行业案例</p>
                  </dt>
                  <dd>
                    拼团购买是现在许多人的购物方式，他们共同用极低的价格购买下同一款商品，所以才叫拼团。
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
          <a
            class="more"
            href="https://mp.weixin.qq.com/s/HS3DN7fNHxr_LSIyMH6H3w"
          >
            <div class="detailContent-item">
              <img class="itemImg" src="../assets/img/游戏化管理.png" alt="" />
              <div class="right">
                <dl>
                  <dt>
                    <p class="t">
                      Niceteam游戏化管理工具：把管理“玩”起来,让员工爱上工作!
                    </p>
                    <p>| 行业案例</p>
                  </dt>
                  <dd>
                    员工更喜欢有趣的工作，希望参与管理，希望得到认可，希望有透明简化的环境以及情感表达等。于是越来越多的管理者选择运用“游戏化”的管理方式来应对这样的环境。
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
          <a
            class="more"
            href="https://mp.weixin.qq.com/s/greIfO3BBeEADLFG0bWR6w"
          >
            <div class="detailContent-item">
              <img class="itemImg" src="../assets/img/case-1.png" alt="" />
              <div class="right">
                <dl>
                  <dt>
                    <p class="t">
                      疫情下多家门店关门，而这300家母婴店却在30天转亏为盈，只因做了这件事
                    </p>
                    <p>| 行业案例</p>
                  </dt>
                  <dd>
                    疫情还未“春暖花开”，企业的生存已经陷入了“凛冽寒冬”！特别是对中小型企业打击特别大，一两个月不开工，员工难，企业也难！当员工的假期一次又一次的延长的时候，企业已经开始面临生存危机！
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
      </div> -->
      <!-- 右边搜索栏 -->
      <div class="search">
        <input
          class="care"
          type="text"
          placeholder="请输入您关心的增长词"
          v-model="search"
        />
        <img class="careImg" src="../assets/img/搜索.png" alt />
        <div class="hot">
          <p class="hot-title">热门文章</p>
          <div v-for="(item, index) in items">
            <a class="hot-item">
              {{ item.text }}
            </a>
          </div>
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
import tab1 from "../views/blog-tabs/Tab1";
import tab2 from "../views/blog-tabs/Tab2";
import tab3 from "../views/blog-tabs/Tab3";
import tab4 from "../views/blog-tabs/Tab4";
import tab5 from "../views/blog-tabs/Tab5";
import tab6 from "../views/blog-tabs/Tab6";
import tab7 from "../views/blog-tabs/Tab7";

export default {
  name: "Blog",
  components: {
    Weixinkefu,
    Footer,
    tab1,
    tab2,
    tab3,
    tab4,
    tab5,
    tab6,
    tab7,
  },
  data() {
    return {
      url: require("../assets/img/fuli.png"),
      footerData: {
        title: "限时免费！ 距离销冠团队只差一步",
      },
      search: "",
      currentView:"tab1",
      list: [
        { text: "游戏与营销你必须要知道的事情" },
        { text: "实战:解析互联网拼团裂变模式，手把手教你拼团怎么做" },
        { text: "Niceteam游戏化管理工具：把管理“玩”起来,让员工爱上工作!" },
        { text: "疫情下多家门店关门，而这300家母婴店却在30天转亏为盈，只因做了这件事" },
        { text: "技能加Buff，最全实战资料包阿骨打国与国的昂贵的" },
      ],
      active: 0,
      tabs: [
        { title: "最新文章", view: "tab1"},
        { title: "客户案例", view: "tab2" },
        { title: "智能用户运营", view: "tab3" },
        { title: "数据分析", view: "tab4" },
        { title: "产品动态", view: "tab5" },
        { title: "市场活动", view: "tab6" },
        { title: "资料下载", view: "tab7" },
      ],
    };
  },
  computed: {
    //过滤方法
    items: function() {
      var _search = this.search;
      if (_search) {
        //不区分大小写处理
        var reg = new RegExp(_search, "ig");
        //es6 filter过滤匹配，有则返回当前，无则返回所有
        return this.list.filter(function(e) {
          //匹配所有字段
          return Object.keys(e).some(function(key) {
            return e[key].match(reg);
          });
          //匹配某个字段
          // return e.name.match(reg);
        });
      }
      return this.list;
    },
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
    tiyan() {
      this.$router.replace("/connect");
    },
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  font-size: 0.16rem;
  a {
    text-decoration: none;
  }
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
      padding-left: 2.3%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 0.01rem solid #000;
      li.active {
        color: #06f;
        font-size: 0.17rem;
        font-weight: bold;
        border-bottom: 0.01rem solid #06f;
      }
      .nav-item {
        text-decoration: none;
        margin-right: 0.2rem;
        font-size: 0.18;
        cursor: pointer;
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
                  display: flex;
                  justify-content: space-between;
                  color: rgb(92, 89, 89);
                  font-size: 0.18rem;
                  margin-bottom: 0.2rem;
                  .t {
                    width: 3.8rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }
                }
                dd {
                  font-size: 0.15rem;
                  color: #ccc;
                }
              }
              .bottom {
                color: #aaa;
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
          display: block;
          color: rgb(83, 72, 72);
          width: 2.85rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          text-align: left;
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
