<template>
  <div class="home">
    <div class="border">
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
      <div class="introduce">
        <dl>
          <dt>应用价值</dt>
          <dd>VALUE</dd>
        </dl>
        <div class="content">
          <div class="item">
            <p class="circle"></p>
            <title>弹性福利</title>
            <p class="">好的员工是夸出来的</p>
          </div>
          <div class="item">
            <p class="circle"></p>
            <title>智能获客</title>
            <p>最好的广告是口口相传</p>
          </div>
          <div class="item">
            <p class="circle"></p>
            <title>销售激励</title>
            <p>让工作如此有趣真是不好意思</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 16px;
  .border {
    width: 88.88%;
    margin-top: 30px;
    margin-left: 10%;
    border: 1px solid #000;
    .header {
      width: 100%;
      height: 450px;
      color: #fff;
      background-color: #06f;
      .headerTop {
        width: 80%;
        margin-left: 10%;
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
        width: 80%;
        height: 270px;
        margin-top: 35px;
        margin-left: 16%;
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
          top: 150px;
          right: 235px;
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
          margin-bottom: 8px;
        }
        dd {
          letter-spacing: 1px;
          font-weight: bold;
        }
      }
      .content {
        width: 80%;
        margin-left: 10%;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        .item {
          width: 260px;
          height: 340px;
          border: 1px solid #ccc;
          border-radius: 15px;
          .circle {
            width: 60px;
            height: 60px;
            margin-left: 105px;
            margin-top: 40px;
            margin-bottom: 15px;
            border: 1px solid rgb(78, 56, 56);
            border-radius: 50%;
          }
          title{
            display: block;
            letter-spacing: 1px;
            margin-bottom: 50px;
          }
        }
      }
    }
  }
}
</style>
