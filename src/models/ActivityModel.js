export default class ActivityModel {
  constructor(data) {
    this.userId = data.userId;
    this.setChartData(data);
  }

  setChartData = (data) => {
    this.chartData = [];
    if (data.sessions) {
      this.chartData = data.sessions.map((item, index) => {
        return {
          key: index + 1,
          kg: item.kilogram,
          cal: item.calories,
        };
      });
    }
  };
}
