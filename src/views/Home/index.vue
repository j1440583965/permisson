<template>
  <div id="home">
    <header>
       <p style="color:green">{{StartScore(1)}}</p>
       <p style="color:green">{{StartScore(2)}}</p>
       <p style="color:green">{{StartScore(3)}}</p>
      <el-row :gutter="10">
        <el-col
          v-for="item in 4"
          :key="item"
          :xs="24"
          :sm="12"
          :md="6"
          :lg="6"
          :xl="6"
        >
          <div class="grid-content bg-purple">
            <p>贷款人数</p>
            <countTo :startVal="startVal" :endVal="endVal" :duration="duration">
            </countTo>
          </div>
        </el-col>
      </el-row>
    </header>
    <div id="main" ref="main"></div>
  </div>
</template>

<script>
import countTo from "vue-count-to";

export default {
  components: { countTo },
  data() {
    return {
      msg: "789",
      t: "",
      // 需要滚动的时间
      duration: 1000,
      // 初始值
      startVal: 0,
      // 最终值
      endVal: 2018,
    };
  },
  mounted() {
    console.log(this.$router);
    this.init();
  },
  methods: {
    StartScore(rate) {
      return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
    },
    debounce(fn, delay) {
      let timer = null; //借助闭包
      return function() {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(fn, delay); // 简化写法
      };
    },
    init() {
      var myChart = this.$echarts.init(this.$refs.main);
      const options = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      myChart.setOption(options);
      //假设实例的名字是myChart,在echats配置完实例以后,配置下面几行代码即可
      window.onresize = () => {
        this.debounce(myChart.resize(), 500);
      };
    },
  },
};
</script>

<style lang="scss">
#main {
  height: 50vh;
  width: 100%;
}
#home {
  header {
    color: #fff;
    .grid-content {
      border-radius: 10px;
    }
    .el-col {
      margin-bottom: 10px;
      line-height: 50px;
    }
    .el-col:first-of-type {
      .grid-content {
        background: red;
      }
    }
    .el-col:nth-of-type(2) {
      .grid-content {
        background: yellow;
        color: #000;
      }
    }
    .el-col:nth-of-type(3) {
      .grid-content {
        background: blue;
      }
    }
    .el-col:nth-of-type(4) {
      .grid-content {
        background: green;
      }
    }
  }
}
</style>
