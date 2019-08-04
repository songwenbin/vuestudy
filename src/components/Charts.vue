<template>
  <!--
  <div ref="chartDom" class="height: 100px;">123423423</div>
  -->
  <div
    id="test"
    ref="chartDom"
    style="display: inline-block; width: 600px;height:400px;"
  ></div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    var myChart = echarts.init(this.$refs.chartDom);

    // 指定图表的配置项和数据
    var option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>

<style scoped></style>
