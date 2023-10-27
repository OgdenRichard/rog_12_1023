import axios from 'axios';
import mockedData from '../mocks/mockdata.json';
import { API_BASE_URL } from '../settings/apiSettings';
import DataFactory from '../factories/DataFactory';

export default class UserDataService {
  constructor(userId, params, isMocked) {
    this.userId = userId;
    this.params = params ? params : '';
    this.isMocked = isMocked;
    this.data = {};
    this.baseUrl = API_BASE_URL;
  }

  loadData = async () => {
    this.buildRequestUrl();
    await this.getData();
    return new DataFactory(this.params, this.data).model;
  };

  buildRequestUrl = () => {
    if (!this.isMocked) {
      this.requestUrl = `${this.baseUrl}/user/${this.userId}`;
      this.requestUrl += this.params ? `/${this.params}` : '';
    }
  };

  getData = async () => {
    if (this.isMocked) {
      this.getMockedData();
    } else {
      this.data = await this.getApiData();
    }
  };

  getApiData = async () => {
    try {
      const resp = await axios.get(this.requestUrl);
      return resp.data.data;
    } catch (err) {
      console.log(err);
    }
  };

  getMockedData = () => {
    const param = this.params.length ? this.params : 'users';
    const key = this.params.length ? 'userId' : 'id';
    const mock = mockedData[param].filter(
      (param) => param[key] === this.userId,
    );
    Object.assign(this.data, ...mock);
  };
}
