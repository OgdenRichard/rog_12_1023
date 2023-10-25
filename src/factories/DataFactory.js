import UserModel from '../models/UserModel';
import ActivityModel from '../models/ActivityModel';
import PerformanceModel from '../models/PerformanceModel';
import SessionsModel from '../models/SessionsModel';

export default class DataFactory {
  constructor(param, data) {
    if (param === '') {
      this.dataModel = new UserModel(data);
    } else if (param === 'activity') {
      this.dataModel = new ActivityModel(data);
    } else if (param === 'performance') {
      this.dataModel = new PerformanceModel(data);
    } else if (param === 'average-sessions') {
      this.dataModel = new SessionsModel(data);
    } else {
      this.dataModel = null;
      throw new Error('unknown data model');
    }
  }

  get model() {
    return this.dataModel;
  }
}
