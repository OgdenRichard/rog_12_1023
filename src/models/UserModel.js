export default class UserModel {
  constructor(data) {
    this.firstName = data.userInfos.firstName;
  }

  setDailyScore = (data) => {
    this.dailyScore = data.score || data.todayScore;
  };

  setKeyData = (data) => {
    if (data.keyData) {
      this.keyData = data.keyData;
    }
  };
}
