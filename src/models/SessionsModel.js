export default class SessionsModel {
  constructor(data) {
    this.userId = data.userId;
    this.weekdays_fr = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    };
    this.setChartData(data);
  }

  setChartData = (data) => {
    this.chartData = [];
    if (data.sessions) {
      this.chartData = data.sessions.map((item) => {
        return {
          length: item.sessionLength,
          weekday: this.weekdays_fr[item.day],
        };
      });
    }
  };
}
