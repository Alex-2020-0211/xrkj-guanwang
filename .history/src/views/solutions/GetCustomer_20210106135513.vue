<template>
  <div class="getcustomer">
    <!-- 边框 -->
    <div class="border">
      <!-- 头部 -->
      <HeaderC :headerData="headerData" />
      <!-- OneStop -->
      <div class="oneStop">
        <div class="top">
          <h5>引流裂变营销一步到位</h5>
          <p class="question">
            获客裂变不是问题
          </p>
          <div class="photo">
            <div class="photo-item">
              <img src="../../assets/img/yinliu.png" alt />
              <p>引流获客</p>
            </div>
            <div class="photo-item">
              <img src="../../assets/img/yingxiao.png" alt />
              <p>营销活动</p>
            </div>
            <div class="photo-item">
              <img src="../../assets/img/fenxiao.png" alt />
              <p>分销裂变</p>
            </div>
          </div>
          <div class="case">
            <dl>
              <dt>全频道助力用户增长</dt>
              <dd>小程序、公众号、朋友圈、微信群助力激活用户市场</dd>
            </dl>
            <img src="../../assets/img/logo.png" />
          </div>
          <div class="case">
            <dl>
              <dt>多种玩法助力用户增长</dt>
              <dd>拆红包，敲金蛋，拼团，裂变玩不停，助力用户粉丝有效增长</dd>
            </dl>
            <img src="../../assets/img/logo.png" />
          </div>
        </div>
        <div class="bottom">
          <div class="comer">
            <dl>
              <dt>10000+中小企业的信赖选择</dt>
              <dd>
                已覆盖教育、企业服务、互联网、地产家装、招商加盟、医美健康、汽车等行业
              </dd>
            </dl>
            <img src="../../assets/img/comer.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 两边盒子 -->
      <div class="box"></div>
      <div class="box" style="right:0;"></div>
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
  name: "GetCustomer",
  components: {
    HeaderC,
    Footer,
  },
  data() {
    return {
      headerData: {
        free: "免费试用",
        title: "多平台获客",
        content: "精确引流就那么简单",
        detail: "为销售赋能，为团队添力",
        immediately: "立即体验",
        kefu: "",
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
.getcustomer {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6.06%;
    border: 0.01rem solid #000;
    position: relative;
    // OneStop
    .oneStop {
      .top {
        h5 {
          font-size: 0.3rem;
          display: block;
          padding-top: 0.5rem;
          padding-bottom: 0.15rem;
        }
        .question {
          width: 40%;
          margin-left: 30%;
          color: #000;
          font-size: 0.2rem;
          margin-bottom: 0.6rem;
          letter-spacing: 0.01rem;
        }
        .photo {
          width: 40%;
          margin-left: 30%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.3rem;
          .photo-item {
            img {
              width: 0.8rem;
              height: 0.8rem;
            }
          }
        }
        .case {
          width: 56%;
          margin-left: 22%;
          height: 3.4rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          img {
            width: 3.5rem;
            height: 2.3rem;
            border: 1px solid #ccc;
          }
        }
      }
      .bottom {
        margin-top: 2.5rem;
        margin-bottom: 0.5rem;
        .comer {
          margin-top: 0.15rem;
          dl {
            margin-bottom: 0.2rem;
            dt {
              font-size: 0.2rem;
              font-weight: bold;
              margin-bottom: 0.1rem;
            }
          }
          img {
            width: 8.6rem;
          }
        }
      }
    }
    // 两边盒子
    .box {
      width: 1.35rem;
      height: 2.245rem;
      background-color: #f00;
      position: absolute;
      top: 8.2rem;
    }
  }
}
</style>
