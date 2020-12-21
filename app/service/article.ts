import { Service } from 'egg';

export default class Article extends Service {
  /**
   * 添加一篇文章
   * @param params 前端参数
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

  /**
   * 查询单条文章
   * @param id 文章id
   */
  public async getArticleById(id) {
    const result = await this.app.mysql.get('article', { id });
    return result;
  }

  /**
   * 删除单条文章
   * @param id 文章id
   */
  public async delArticleById(id) {
    const result = await this.app.mysql.delete('article', { id });
    return this.ctx.helper.checkMysqlDelate(result);
  }

  /**
   * 查询文章列表
   */
  public async getArticleList() {
    const result = await this.app.mysql.select('article');
    return result;
  }

  /**
   * 更新文章
   * @param params 前端参数
   */
  public async updateArticle(params) {
    const record = {
      id: params.id,
      title: params.title,
      author: params.author,
      description: params.description,
      keyword: params.keyword,
      content: params.content,
      cover: params.cover,
    };

    const result = await this.app.mysql.update('article', record);

    return this.ctx.helper.checkMysqlUpdate(result);
  }
}
