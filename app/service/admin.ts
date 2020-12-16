import { Service } from 'egg';

export default class Admin extends Service {
  public async create(params) {
    const result = await this.app.mysql.insert('blog', params);
    return result;
  }

  /**
   * 添加用户
   * @param params 入参
   */
  public async addUser(params) {
    const { nickname, email, password } = params;

    const result = await this.app.mysql.insert('user', {
      nickname,
      email,
      password,
    });

    return this.ctx.helper.checkMysqlInsert(result);
  }
}
