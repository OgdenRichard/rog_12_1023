export default class UserModel {
  constructor(data) {
    this.firstName = data.userInfos.firstName;
    this.dailyScore = data.score || data.todayScore;
    this.setKeyData(data);
  }

  setKeyData = (data) => {
    this.keyData = null;
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
