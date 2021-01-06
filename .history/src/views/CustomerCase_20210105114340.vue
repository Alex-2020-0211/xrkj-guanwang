<template>
  <div class="aboutus">
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
          <button class="mianfei">免费试用</button>
        </div>
        <div class="headerMain">
          <div class="theme">
            <dl>
              <dt>“ 对工作上瘾? ”</dt>
              <dd>让销售上瘾，让团队带劲</dd>
            </dl>
            <button class="knowMore">了解一下</button>
          </div>
        </div>
      </div>
      <!-- 选择NICETEAM的理由 -->
      <div class="reason">
        <!-- top -->
        <div class="reasonT">
          <h5>他们选择NICETEAM的理由</h5>
          <p>
            随着90后、00后进入职场，中小企业在员工管理方面遇到了新的难题和痛点，并阻碍了企业的发展。
          </p>
          <div class="case">
              <img src="../assets/img/logo.png" />
              <div class="told">

              </div>
          </div>
        </div>
        <!-- middle -->
        <div class="reasonM">

        </div>
        <!-- bottom -->
        <div class="reasonB">
          <h5>联系我们</h5>
          <div class="address">
            <img src="../assets/img/address.png" alt="" />
            <div class="describe">
              <div>
                <span>电话 :</span>
                <h3>01234567890</h3>
              </div>
              <div>
                <span>邮箱 :</span>
                <h3>xrkj.@qq.com</h3>
              </div>
              <div>
                <span>地址 :</span>
                <h3>广东省深圳市南山区科智东路讯美科技广场</h3>
              </div>
            </div>
          </div>
          <div class="comer">
            <dl>
              <dt>10000+中小企业的信赖选择</dt>
              <dd>
                已覆盖教育、企业服务、互联网、地产家装、招商加盟、医美健康、汽车等行业
              </dd>
            </dl>
            <img src="../assets/img/comer.png" alt="" />
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
import Footer from "../components/Footer";

export default {
  name: "CustomerCase",
  components: {
    Footer,
  },
  data() {
    return {
      footerData: {
        title: "限时免费！ 立刻定制企业管理解决方案",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.aboutus {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6.06%;
    border: 0.01rem solid #000;
    position: relative;
    // 头部
    .header {
      width: 100%;
      height: 3.5rem;
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
        }
        .mianfei {
          width: 1rem;
          height: 0.3rem;
          color: #fff;
          border: 0.01rem solid #fff;
          border-radius: 0.05rem;
          background-color: #7fb2ff;
          margin-right: 0.4rem;
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
            font-size: 0.2rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 0.15rem;
            letter-spacing: 0.02rem;
          }
          dd {
            font-size: 0.18rem;
            letter-spacing: 0.01rem;
            text-align: left;
            margin-bottom: 0.4rem;
          }
        }
        .knowMore {
          width: 1.5rem;
          height: 0.4rem;
          color: #06f;
          font-size: 0.18rem;
          letter-spacing: 0.02rem;
          background-color: #fff;
          border: 0;
          border-radius: 0.05rem;
        }
      }
    }
    // 选择NICETEAM的理由
    .reason {
      height: 15.8rem;
      .reasonT {
        h5 {
          font-size: 0.24rem;
          display: block;
          padding-top: 0.5rem;
          padding-bottom: 0.15rem;
        }
        p {
          width: 40%;
          margin-left: 30%;
          color: #66667f;
          margin-bottom: 0.2rem;
        }
        img {
          width: 4rem;
          height: 2.7rem;
          border: 1px solid #ccc;
          margin-top: 0.6rem;
          margin-bottom: 0.9rem;
        }
      }
      .reasonB {
        h5 {
          font-size: 0.24rem;
          display: block;
          letter-spacing: 0.02rem;
          padding-bottom: 0.05rem;
        }
        .address {
          width: 60%;
          margin-left: 20%;
          margin-top: 0.3rem;
          height: 3.64rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          img {
            width: 4.4rem;
          }
          .describe {
            font-weight: bold;
            margin-right: 1rem;
            div {
              width: 2.7rem;
              display: flex;
              // flex-wrap: wrap;
              justify-content: space-between;
              span {
                font-size: 0.18rem;
              }
              h3 {
                width: 2rem;
                text-align: left;
                margin-bottom: 0.2rem;
              }
            }
          }
        }
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
            width: 10rem;
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
      top: 9rem;
    }
  }
}
</style>
