import axios from 'axios';
import mockedData from '../mocks/mockdata.json';
import { API_BASE_URL } from '../settings/apiSettings';

export default class UserData {
  constructor(userId, params, isMocked) {
    this.userId = userId;
    this.params = params;
    this.isMocked = isMocked;
    this.data = {};
    this.baseUrl = API_BASE_URL;
    this.buildRequestUrl();
  }

  buildRequestUrl = () => {
    if (!this.isMocked) {
      this.requestUrl = `${this.baseUrl}/user/${this.userId}`;
      this.requestUrl +=
        this.params && this.params.length ? `/${this.params}` : '';
    }
  };

  getData = () => {
    if (this.isMocked) {
      this.getMockedData();
    } else {
      this.getApiData();
    }
  };

  getApiData = () => {
    axios
      .get(this.requestUrl)
      .then((res) => {
        this.data = res.data.data;
        console.log(this.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getMockedData = () => {
    const param = this.params.length ? this.params : 'users';
    const key = this.params.length ? 'userId' : 'id';
    const mock = mockedData[param].filter(
      (param) => param[key] === this.userId,
    );
    Object.assign(this.data, ...mock);
    console.log(this.data);
  };
}
