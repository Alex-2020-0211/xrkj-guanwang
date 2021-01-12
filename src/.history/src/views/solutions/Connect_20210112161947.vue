<template>
  <div class="connect">
    
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderC from "../../components/Header copy";
import Footer from "../../components/Footer";

export default {
  name: "Connect",
  components: {
    HeaderC,
    Footer,
  },
  data() {
    return {
      headerData: {
        free: "免费试用",
        title: "全渠道沟通",
        content: "获客-转化-裂变玩转你的私域流量",
        detail: "",
        immediately: "立即体验",
        kefu: "联系客服",
        path: "1",
      },
      footerData: {
        title: "限时免费！ 立刻定制企业管理解决方案",
      },
      isOn1: "on",
      isOn2: "",
      isOn3: "",
      isOn4: "",
    };
  },
  methods: {
    on1() {
      this.isOn1 = "on";
      this.isOn2 = "";
      this.isOn3 = "";
      this.isOn4 = "";
    },
    on2() {
      this.isOn1 = "";
      this.isOn2 = "on";
      this.isOn3 = "";
      this.isOn4 = "";
    },
    on3() {
      this.isOn1 = "";
      this.isOn2 = "";
      this.isOn3 = "on";
      this.isOn4 = "";
    },
    on4() {
      this.isOn1 = "";
      this.isOn2 = "";
      this.isOn3 = "";
      this.isOn4 = "on";
    },
  },
};
</script>

<style lang="scss" scoped>
.connect {
  font-size: 0.16rem;
  .border {
    width: 88.88%;
    margin-top: 0.5rem;
    margin-left: 6%;
    border: 0.01rem solid #000;
    // why
    .why {
      height: 15.1rem;
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
              width: 2.4rem;
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
                letter-spacing: 0.02rem;
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
              img {
                width: 0.45rem;
                height: 0.45rem;
                margin-top: 0.12rem;
              }
            }
            .bar {
              position: absolute;
              left: 3.5rem;
              bottom: 0.3rem;
              display: flex;
              p {
                width: 0.2rem;
                height: 0.2rem;
                border-radius: 0.2rem;
                background-color: #80b3ff;
                margin-right: 0.15rem;
              }
              .on {
                width: 0.8rem;
                background-color: #06f;
              }
            }
          }
        }
      }
      .why-middle {
        h5 {
          display: block;
          font-size: 0.24rem;
          font-weight: 450;
          margin-top: 0.2rem;
          margin-bottom: 0.1rem;
        }
        .content {
          width: 70%;
          margin-left: 15%;
          display: flex;
          justify-content: space-around;
          margin-top: 0.6rem;
          margin-bottom: 0.6rem;
          .content-item {
            width: 2rem;
            height: 2.46rem;
            background-color: #dcf1ff;
            border-radius: 0.1rem;
            z-index: 999;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            dl {
              width: 1.45rem;
              dt {
                font-size: 0.18rem;
                font-weight: 500;
              }
              dd {
                text-align: left;
                margin-top: 0.2rem;
              }
            }
            .circle-item {
              width: 0.5rem;
              height: 0.5rem;
              border: 0.02rem solid #878787;
              border-radius: 50%;
              background-color: #fff;
              margin-bottom: -0.2rem;
            }
          }
        }
      }
      .why-bottom {
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
  }
}
</style>
