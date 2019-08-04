<template>
  <Chart />
</template>

<script>
//import axios from "axios";
import Chart from "../../components/Charts";
export default {
  components: {
    Chart
  },
  //mounted: {},
  methods: {
    getChartData() {
      /*
      axios
        .get("/api/dashboard/chart", { params: { ID: 123456 } })
        .then(response => {
          this.charOpton = {
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
        });
        */
    }
  }
};
</script>

<style scoped></style>
