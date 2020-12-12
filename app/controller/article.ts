import { Controller } from 'egg';

export default class ArticleController extends Controller {
  public async create() {
    const { ctx } = this;
    const formData = ctx.request.body;

    const result = await this.service.article.create(formData);
    ctx.body = result;
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
