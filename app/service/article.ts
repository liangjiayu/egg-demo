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

  /**
   * 添加一篇文章
   * @param params 前端入参
   */
  public async addArticle(params) {
    const record = {
      title: params.title,
      author: params.author,
      description: params.description,
      keyword: params.keyword,
      content: params.content,
      cover: params.cover,
    };

    const result = await this.app.mysql.insert('article', record);

    return this.ctx.helper.checkMysqlInsert(result);
  }
}
