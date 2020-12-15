import { Service } from 'egg';

export default class Admin extends Service {
  public async create(params) {
    const result = await this.app.mysql.insert('blog', params);
    return result;
  }
}
