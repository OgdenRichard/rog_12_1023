export default class UserModel {
  constructor(data) {
    this.firstName = data.userInfos.firstName;
    this.dailyScore = 0;
    this.setDailyScore(data);
    this.setKeyData(data);
  }

  setDailyScore = (data) => {
    if (data.score || data.todayScore) {
      this.dailyScore = (data.score || data.todayScore) * 100;
    }
  };

  setKeyData = (data) => {
    if (data.keyData) {
      this.keyData = {
        calories: {
          name: 'Calories',
          value: data.keyData.calorieCount,
          unit: 'kCal',
        },
        proteins: {
          name: 'Protéines',
          value: data.keyData.proteinCount,
          unit: 'g',
        },
        carbohydrates: {
          name: 'Glucides',
          value: data.keyData.carbohydrateCount,
          unit: 'g',
        },
        lipids: {
          name: 'Lipides',
          value: data.keyData.lipidCount,
          unit: 'g',
        },
      };
    }
  };
}
