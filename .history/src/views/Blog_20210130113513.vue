<template>
  <div class="blog">
    <!-- 头部 -->

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
    <!-- 具体内容 -->
    <component :is="currentView" />
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
          <a class="hot-item" :href="item.url">
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
        title: "限时免费！立刻定制企业管理解决方案",
      },
      search: "",
      currentView: "tab1",
      list: [
        {
          text: "游戏与营销你必须要知道的事情",
          url: "https://mp.weixin.qq.com/s/KpLLNLLS8bprZYxrbAmCGw",
        },
        {
          text: "实战:解析互联网拼团裂变模式，手把手教你拼团怎么做",
          url: "https://mp.weixin.qq.com/s/RzznErZD7SDFoxmBSY_aJg",
        },
        {
          text: "Niceteam游戏化管理工具：把管理“玩”起来,让员工爱上工作!",
          url: "https://mp.weixin.qq.com/s/HS3DN7fNHxr_LSIyMH6H3w",
        },
        {
          text:
            "疫情下多家门店关门，而这300家母婴店却在30天转亏为盈，只因做了这件事",
          url: "https://mp.weixin.qq.com/s/greIfO3BBeEADLFG0bWR6w",
        },
        {
          text: "如何让客户放弃再看看的想法？教你3招锁定客户，当场下单不犹豫",
          url: "https://mp.weixin.qq.com/s/60Lz195vZALS_dKmqNnePQ",
        },
        {
          text: "遇到比销售还健谈的老板怎么办？教你4招，引爆对方情绪快速下单",
          url: "https://mp.weixin.qq.com/s/CvF1fS1f9ohmNuo7lZ5fVg",
        },
        {
          text: "商家不会选品，囤得越多亏得越多！教你4招，选对产品比营销更重要",
          url: "https://mp.weixin.qq.com/s/EQZeOLQC7J9Ysq1n-Jh5Og",
        },
        {
          text: "具有“魔力”的游戏化营销，如何让消费者“深陷其中”？",
          url: "https://mp.weixin.qq.com/s/jJrMjEhR2ehIO1ZRuivIRQ",
        },

        {
          text: "客户无理取闹要退货，怎么办？用这3招，摆平90%难缠客户",
          url: "https://mp.weixin.qq.com/s/F4AWzR2F_3Qpti4bM04q5g",
        },
        {
          text: "客户已经相中产品，但一看价格就纠结！教你4招，重塑客户购买动机",
          url: "https://mp.weixin.qq.com/s/J2u3LRmkIGNWSRTpfBIwHg",
        },
        {
          text: "实战:解析互联网拼团裂变模式，手把手教你拼团怎么做",
          url: "https://mp.weixin.qq.com/s/RzznErZD7SDFoxmBSY_aJg",
        },
        {
          text: "同是拼团活动，为什么别人一次成交2000单，而你的效果却为0？",
          url: "https://mp.weixin.qq.com/s/yD4wytu7oncxfGbsl-IYiA",
        },
        {
          text: "一篇文章告诉你千万级裂变传播都是怎么玩的!",
          url: "https://mp.weixin.qq.com/s/9Q1o3psEU2y0lT3LU6a_pg",
        },
        {
          text: "遇到咄咄逼人的狮子型老板怎么办？学会这3招，用高效专业说服他",
          url: "https://mp.weixin.qq.com/s/Kym_58vOG-3TYtP04XtTGQ",
        },
        {
          text: "利用游戏化思维，Keep让运动变得更容易坚持",
          url: "https://mp.weixin.qq.com/s/Zg657q9UpUruFYR0kmntxQ",
        },
        {
          text: "从销售精英成长为管理精英，必须要扮演好这4种角色",
          url: "https://mp.weixin.qq.com/s/wiOdw_-vaa4NIvTJ-jqChg",
        },
        {
          text: "顾客一砍价，就要妥协？识别出这5种客户，不用让步原价也能成交",
          url: "https://mp.weixin.qq.com/s/7RBDSxF6bRv9lfRCxqiAXw",
        },
        {
          text: "拼多多“双11”营销裂变3个不传之秘",
          url: "https://mp.weixin.qq.com/s/pKAFbTKyK0AcCTjqKkz4WA",
        },
        {
          text:
            "还在苦苦研究SEO，砸钱投广告？她0成本2周做了130万+业绩，躺着粉丝找上门",
          url: "https://mp.weixin.qq.com/s/AT-uKQkl5EqnXPNZ98QvMA",
        },
        {
          text: "拜访客户注意这7个细节，帮你赢得对方好感并促进签单",
          url: "https://mp.weixin.qq.com/s/1dLFwfmRBUPqVw1RaQDxzw",
        },
        {
          text: "客户光看不买，怎么办？学会这3种产品推荐法，客户选择再也不迷茫",
          url: "https://mp.weixin.qq.com/s/3OR5vhbV2rFOlxru0i5nog",
        },
        {
          text: "客户想以之前的优惠价购买，销售该怎么回应才不会让客户寒心？",
          url: "https://mp.weixin.qq.com/s/Zs_er8SSwQEC79EBNzpAlg",
        },
        {
          text: "销售如何运用微笑、手势等肢体微语言，让客户对自己产生好感？",
          url: "https://mp.weixin.qq.com/s/Twro7-Tz-KCA9aLcE0Lfkw",
        },
        {
          text: "客户冲我们发火怎么办？教你4招，先平复对方情绪，再处理事情",
          url: "https://mp.weixin.qq.com/s/9N5i6Sx4hw5v6uhunvIcQA",
        },
        {
          text: "客户问不满意还能退货吗？教你3招，打消客户疑虑并爽快下单",
          url: "https://mp.weixin.qq.com/s/lMZrD7rLrV6WCuugCe0-nw",
        },
        {
          text: "竞争激烈，只能降价求生存？教你3招，学会逆向思维让销量倍增",
          url: "https://mp.weixin.qq.com/s/DkSdIfhVeCZd2B9_bEkvjg",
        },
        {
          text: "顾客说“我随便看看”怎么办？学会这4招，把顾客留下来并巧妙签单",
          url: "https://mp.weixin.qq.com/s/BZtxwfBXw7uhw1Li7j6qOQ",
        },
        {
          text:
            "开发一个新客户又贵又难！教你4招，把新客户培养成持续消费的老客户",
          url: "https://mp.weixin.qq.com/s/INK5pzSAM0fSxhcmfB6WdA",
        },
        {
          text: "客户很满意现在用的产品，如何让他对我们的产品产生兴趣？教你5招",
          url: "https://mp.weixin.qq.com/s/SL3GEWGMm0f257kNbNNt_w",
        },
      ],
      active: 0,
      tabs: [
        { title: "最新文章", view: "tab1" },
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
        return this.list
          .filter(function(e) {
            //匹配所有字段
            return Object.keys(e).some(function(key) {
              return e[key].match(reg);
            });
            //匹配某个字段
            // return e.name.match(reg);
          })
          .slice(0, 5);
      }
      return this.list.slice(0, 4);
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goProductIntroduction() {
      this.$router.push("/productintroduction");
    },
    goSolutions() {
      this.$router.push("/solutions");
    },
    goCustomercase() {
      this.$router.push("/customercase");
    },
    goBlog() {
      this.$router.push("/blog");
    },
    goAbout() {
      this.$router.push("/aboutus");
    },
    goTransform() {
      this.$router.push("/transform");
    },
    goManage() {
      this.$router.push("/manage");
    },
    tiyan() {
      this.$router.push("/connect");
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
  // 头部

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
        padding-bottom: 0.15rem;
        margin-bottom: 0.15rem;
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
</style>
