export default class PerformanceModel {
  constructor(data) {
    this.userId = data.userId;
    this.types_fr = {
      1: 'Cardio',
      2: 'Énergie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    };
    this.chartData = [];
  }

  setChartData = (data) => {
    if (data.data) {
      this.chartData = data.data.map((item) => {
        return {
          key: this.userId,
          value: item.value,
          type: this.types_fr[item.kind],
        };
      });
    }
  };
}
