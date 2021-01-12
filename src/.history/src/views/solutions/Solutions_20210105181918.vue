<template>
  <div class="home">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <HeaderC :headerData="headerData" />
      <!-- why -->
      <div class="why">
        <div class="why-top">
          <div class="bgc">
            <h5 class="why-top-title">为什么选择NICETEAM?</h5>
            <div class="why-top-content">
              <img
                class="content1"
                src="../../assets/img/why-content.png"
                alt=""
              />
              <dl>
                <dt>多平台获客</dt>
                <dd>平台裂变引流，建立私人客户互客客户池，帮助商家矩阵建立</dd>
              </dl>
              <p class="next">
                <img src="../../assets/img/箭头.png" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <Footer :footerData="footerData" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderC from "../../components/Header copy";
import Footer from "../../components/Footer";

export default {
  name: "Home",
  components: {
    HeaderC,
    Footer,
  },
  data() {
    return {
      headerData: {
        free: "免费试用",
        title: "用户就是最好的广告",
        content: "获客-转化-裂变玩转你的私域流量",
        detail: "",
        immediately: "立即体验",
        kefu: "联系客服",
        path: "1",
      },
      footerData: {
        title: "限时免费！ 立刻定制企业管理解决方案",
      },
    };
  },
  methods: {},
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
    // why
    .why {
      height: 11.56rem;
      .why-top {
        height: 6.2rem;
        .bgc {
          height: 4.225rem;
          background-color: #06f;
          .why-top-title {
            font-size: 0.24rem;
            color: #fff;
          }
          .why-top-content {
            width: 60%;
            margin-left: 20%;
            margin-top: 0.3rem;
            height: 5.41rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #fff;
            border: 0.01rem solid #ececec;
            border-radius: 0.1rem;
            position: relative;
            .content1 {
              margin-bottom: 0.5rem;
            }
            dl {
              width: 2rem;
              color: #06f;
              margin-right: 0.3rem;
              margin-bottom: 1rem;
              dt {
                font-size: 0.22rem;
                text-align: left;
                margin-bottom: 0.3rem;
              }
              dd {
                text-align: left;
                line-height: 0.3rem;
                letter-spacing: 0.01rem;
              }
            }
            .next {
              width: 0.7rem;
              height: 0.7rem;
              background-color: #ccc;
              opacity: 0.5;
              border-radius: 50%;
              position: absolute;
              top: 2rem;
              right: 0.3rem;
              img{
                  width: 0.4rem;
                  height: 0.4rem;
                  margin-top: 0.2rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
