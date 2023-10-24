import axios from 'axios';
import mockedData from '../mocks/mockdata.json';

export default class Tryout {
  constructor(userId, params, isMocked) {
    this.userId = userId;
    this.params = params;
    this.isMocked = isMocked;
    this.url = isMocked
      ? params
      : `http://localhost:3000/user/${userId}/${params}`;
  }

  getData = () => {
    console.log(this.url);
    if (this.isMocked) {
      this.data = mockedData.this.params.filter(
        (param) => param.id === this.userId,
      );
    } else {
      axios
        .get(this.url)
        .then((res) => {
          this.data = res.data;
          console.log(this.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}
