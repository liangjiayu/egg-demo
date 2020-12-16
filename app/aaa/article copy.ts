import { Service } from 'egg';

export default class Article extends Service {
  public async create(params) {
    const result = await this.app.mysql.insert('blog', params);
    return result;
  }

  public async list() {
    const result = await this.app.mysql.select('blog');
    return result;
  }

  public async del(params) {
    const result = await this.app.mysql.delete('blog', params);
    return result;
  }

  public async update(params) {
    const result = await this.app.mysql.update('blog', params);
    return result;
  }

  public async detail(params) {
    const result = await this.app.mysql.get('blog', { id: params.id });
    return result;
  }
}
