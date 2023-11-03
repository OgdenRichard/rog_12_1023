import calories from '../assets/images/calories.svg';
import proteins from '../assets/images/proteins.svg';
import carbo from '../assets/images/carbo.svg';
import lipids from '../assets/images/lipids.svg';

export default class UserModel {
  constructor(data) {
    this.firstName = data.userInfos.firstName;
    this.userScore = data.score || data.todayScore;
    this.scoreData = [];
    this.setScoreData();
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

  setScoreData = () => {
    const completionGap = 1 - this.userScore;
    this.scoreData.push({
      score: completionGap,
      fill: 'transparent',
    });
    this.scoreData.push({
      score: this.userScore,
      fill: '#E60000',
    });
  };
}
