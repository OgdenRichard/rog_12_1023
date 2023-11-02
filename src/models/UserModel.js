import calories from '../assets/images/calories.svg';
import proteins from '../assets/images/proteins.svg';
import carbo from '../assets/images/carbo.svg';
import lipids from '../assets/images/lipids.svg';

export default class UserModel {
  constructor(data) {
    this.firstName = data.userInfos.firstName;
    this.dailyScore = [
      {
        score: data.score || data.todayScore,
        fill: 'red',
      },
      {
        score: 0.88,
        fill: 'blue',
      },
    ];
    this.setKeyData(data);
  }

  setKeyData = (data) => {
    this.keyData = null;
    if (data.keyData) {
      this.keyData = [
        {
          name: 'Calories',
          value: data.keyData.calorieCount,
          unit: 'kCal',
          image: calories,
          background: 'FBEAEA',
        },
        {
          name: 'Protéines',
          value: data.keyData.proteinCount,
          unit: 'g',
          image: proteins,
          background: 'E9F4FB',
        },
        {
          name: 'Glucides',
          value: data.keyData.carbohydrateCount,
          unit: 'g',
          image: carbo,
          background: 'FBF6E5',
        },
        {
          name: 'Lipides',
          value: data.keyData.lipidCount,
          unit: 'g',
          image: lipids,
          background: 'FBEAEF',
        },
      ];
    }
  };
}
