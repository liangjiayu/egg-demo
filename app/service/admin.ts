import { Service } from 'egg';

export default class Admin extends Service {
  public async create(params) {
    const result = await this.app.mysql.insert('blog', params);
    return result;
  }

  /**
   * 添加用户
   * @param params 前端入参
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

  /**
   * 登录用户
   * @param params 前端入参
   */
  public async signIn(params) {
    const { email, password } = params;
    const user = await this.app.mysql.get('user', { email });
    if (!user) {
      throw new Error('用户不存在');
    }
    if (user.password !== password) {
      throw new Error('密码不正确');
    }

    return user;
  }
}
