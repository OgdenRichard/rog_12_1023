import axios from 'axios';
import mockedData from '../data/mocks/mockdata.json';
import { API_BASE_URL } from '../settings/apiSettings';
import DataFactory from '../factories/DataFactory';

export default class UserDataService {
  /**
   * @constructor
   * @param {number} userId
   * @param {string} params
   * @param {boolean} isMocked
   */
  constructor(userId, params, isMocked) {
    this.userId = userId;
    this.params = params ? params : '';
    this.isMocked = isMocked;
    this.data = {};
    this.baseUrl = `${API_BASE_URL}/user/${this.userId}`;
  }

  /**
   * returns proper model for each endpoint
   * @returns {Object}
   */
  loadSingleRequestData = async () => {
    this.buildRequestUrl();
    await this.getSingleRequestData();
    return new DataFactory(this.params, this.data).model;
  };

  /**
   * @returns {void}
   */
  buildRequestUrl = () => {
    this.requestUrl = this.baseUrl;
    if (!this.isMocked) {
      this.requestUrl += this.params ? `/${this.params}` : '';
    }
  };

  /**
   * fetch data from API or mock depending on settings/apiSettings
   * @returns {void}
   */
  getSingleRequestData = async () => {
    if (this.isMocked) {
      // console.log(`fetching ${this.params ? this.params : 'user'}`);
      this.getSingleRequestMockedData();
    } else {
      this.data = await this.getSingleRequestApiData();
    }
  };

  /**
   * fetch data from API
   * @throws {Axios.Error}
   * @returns {Object}
   */
  getSingleRequestApiData = async () => {
    try {
      const resp = await axios.get(this.requestUrl);
      return resp.data.data;
    } catch (err) {
      throw new Error(err);
    }
  };

  /**
   * fetch data from mock
   * @returns {void}
   */
  getSingleRequestMockedData = () => {
    const param = this.params.length ? this.params : 'users';
    const key = this.params.length ? 'userId' : 'id';
    const mock = mockedData[param].filter(
      (param) => param[key] === this.userId,
    );
    Object.assign(this.data, ...mock);
  };
}
