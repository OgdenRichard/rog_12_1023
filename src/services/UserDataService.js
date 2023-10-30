import axios from 'axios';
import mockedData from '../mocks/mockdata.json';
import { API_BASE_URL, API_ENDPOINTS } from '../settings/apiSettings';
import DataFactory from '../factories/DataFactory';

export default class UserDataService {
  constructor(userId, params, isMocked) {
    this.userId = userId;
    this.params = params ? params : '';
    this.isMocked = isMocked;
    this.endpoints = [];
    this.data = {};
    this.baseUrl = `${API_BASE_URL}/user/${this.userId}`;
  }

  loadSingleRequestData = async () => {
    this.buildRequestUrl();
    await this.getSingleRequestData();
    return new DataFactory(this.params, this.data).model;
  };

  setEndpoints = () => {
    const endpoints = API_ENDPOINTS.map(
      (endpoint) => `${this.baseUrl}/${endpoint}`,
    );
    this.endpoints = [this.baseUrl, ...endpoints];
  };

  buildRequestUrl = () => {
    this.requestUrl = this.baseUrl;
    if (!this.isMocked) {
      this.requestUrl += this.params ? `/${this.params}` : '';
    }
  };

  getSingleRequestData = async () => {
    if (this.isMocked) {
      this.getSingleRequestMockedData();
    } else {
      this.data = await this.getSingleRequestApiData();
    }
  };

  getSingleRequestApiData = async () => {
    try {
      const resp = await axios.get(this.requestUrl);
      return resp.data.data;
    } catch (err) {
      console.log(err);
    }
  };

  getSingleRequestMockedData = () => {
    const param = this.params.length ? this.params : 'users';
    const key = this.params.length ? 'userId' : 'id';
    const mock = mockedData[param].filter(
      (param) => param[key] === this.userId,
    );
    Object.assign(this.data, ...mock);
  };
}
