import { Controller } from 'egg';

export default class ListController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async getList() {
    const { ctx } = this;
    ctx.body = await ctx.service.list.sayHi('666');
  }
}
