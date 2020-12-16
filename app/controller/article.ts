import { Controller } from 'egg';

export default class ArticleController extends Controller {
  /**
   * 新增文章
   */
  public async create() {
    const { ctx } = this;
    const formData = ctx.request.body;

    // 参数验证
    await this.ctx.helper.validate(formData, {
      title: { type: 'string', required: true },
      author: { type: 'string', required: true },
      description: { type: 'string', required: true },
      keyword: { type: 'string', required: true },
      content: { type: 'string', required: true },
      cover: { type: 'string', required: true },
    });

    const result = await this.service.article.addArticle(formData);
    if (result) {
      return this.ctx.helper.msgSuccess();
    }
  }

  public async list() {
    const { ctx } = this;
    const result = await this.service.article.list();
    ctx.body = result;
  }

  public async del() {
    const { ctx } = this;
    const formData = ctx.request.body;

    const result = await this.service.article.del(formData);
    ctx.body = result;
  }

  public async update() {
    const { ctx } = this;
    const formData = ctx.request.body;
    const result = await this.service.article.update(formData);
    ctx.body = result;
  }

  public async detail() {
    const { ctx } = this;
    const formData = ctx.request.body;
    const result = await this.service.article.detail(formData);
    ctx.body = result;
  }
}
