import axios from 'axios';
import mockedData from '../mocks/mockdata.json';
import { API_BASE_URL } from '../settings/apiSettings';
import DataFactory from '../factories/DataFactory';

export default class UserDataService {
  constructor(userId, params, isMocked) {
    this.userId = userId;
    this.params = params;
    this.isMocked = isMocked;
    this.data = {};
    this.baseUrl = API_BASE_URL;
  }

  init = () => {
    this.buildRequestUrl();
    this.getData();
    if (Object.keys(this.data)) {
      const tryout = new DataFactory(this.params, this.data).model;
      console.log(tryout);
    }
  };

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
