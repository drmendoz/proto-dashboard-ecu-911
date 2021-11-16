FusionCharts.ready(function () {
  var chartObj = new FusionCharts({
    type: "maps/ecuador",
    renderAt: "chart-container",
    width: "600",
    height: "600",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Incendios forestales por provincia",
        theme: "fusion",
        formatNumberScale: "0",
      },
      colorrange: {
        color: [
          {
            minvalue: "0",
            maxvalue: "100",
            code: "#DAEB48",
            displayValue: "<100",
          },
          {
            minvalue: "100",
            maxvalue: "500",
            code: "#DFC325",
            displayValue: "100-500",
          },
          {
            minvalue: "500",
            maxvalue: "1000",
            code: "#E26F2C",
            displayValue: "500-1000",
          },
          {
            minvalue: "1000",
            maxvalue: "5000",
            code: "#FC4545",
            displayValue: "1000>",
          },
        ],
      },
      data: [
        {
          id: "01",
          value: "515",
        },
        {
          id: "02",
          value: "373",
        },
        {
          id: "03",
          value: "3875",
        },
        {
          id: "04",
          value: "727",
        },
        {
          id: "05",
          value: "885",
        },
        {
          id: "06",
          value: "450",
        },
        {
          id: "07",
          value: "568",
        },
        {
          id: "08",
          value: "1000",
        },
        {
          id: "09",
          value: "1700",
        },
        {
          id: "10",
          value: "800",
        },
        {
          id: "11",
          value: "700",
        },
        {
          id: "12",
          value: "500",
        },
        {
          id: "13",
          value: "200",
        },
        {
          id: "14",
          value: "5000",
        },
        {
          id: "15",
          value: "500",
        },
        {
          id: "16",
          value: "200",
        },
        {
          id: "17",
          value: "700",
        },
      ],
    },
  });
  chartObj.render();
});
