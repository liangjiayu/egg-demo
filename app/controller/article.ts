import { Controller } from 'egg';

export default class ArticleController extends Controller {
  public async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.create();
  }

  public async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.list();
  }

  public async del() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.del();
  }

  public async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.update();
  }

  public async detail() {
    const { ctx } = this;
    ctx.body = await ctx.service.article.detail();
  }
}
