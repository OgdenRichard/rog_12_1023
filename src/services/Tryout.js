import axios from 'axios';
import mockedData from '../mocks/mockdata.json';

export default class Tryout {
  constructor(userId, params, isMocked) {
    this.userId = userId;
    this.params = params;
    this.isMocked = isMocked;
    this.data = {};
    this.url = isMocked ? params : `http://localhost:3000/user/${this.userId}`;
    this.buildUrl();
  }

  buildUrl = () => {
    if (this.isMocked) {
      this.url = this.params;
    } else {
      this.url += this.params && this.params.length ? `/${this.params}` : '';
    }
  };

  getData = () => {
    if (this.isMocked) {
      const param = this.params.length ? this.params : 'users';
      const key = this.params.length ? 'userId' : 'id';
      const mock = mockedData[param].filter(
        (param) => param[key] === this.userId,
      );
      Object.assign(this.data, ...mock);
      console.log(this.data);
    } else {
      axios
        .get(this.url)
        .then((res) => {
          this.data = res.data.data;
          console.log(this.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}
