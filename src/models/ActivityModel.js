export default class ActivityModel {
  constructor(data) {
    this.userId = data.userId;
    this.chartData = [];
  }

  setChartData = (data) => {
    if (data.data) {
      this.chartData = data.data.map((item, index) => {
        return {
          key: index + 1,
          kg: item.kilogram,
          cal: item.calories,
        };
      });
    }
  };
}
