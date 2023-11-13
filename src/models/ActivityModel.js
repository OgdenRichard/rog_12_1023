export default class ActivityModel {
  /**
   * @constructor
   * @param {Object} data
   */
  constructor(data) {
    this.userId = data.userId;
    this.setChartData(data);
  }

  /**
   * @param {Object} data
   *  @returns {void}
   */
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
