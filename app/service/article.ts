import { Service } from 'egg';

export default class Article extends Service {
  public async create() {
    return 'create';
  }

  public async list() {
    return 'list';
  }

  public async del() {
    return 'del';
  }

  public async update() {
    return 'update';
  }

  public async detail() {
    return 'detail';
  }
}
