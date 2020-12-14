import { IHelper } from 'egg';

export default {
  success(this: IHelper, data: any = null, msg = 'success') {
    this.ctx.status = 200;
    this.ctx.body = {
      code: 200,
      msg,
      data,
    };
  },

  error(this: IHelper, msg = '系统错误', data = null) {
    this.ctx.status = 400;
    this.ctx.body = {
      code: 400,
      msg,
      data,
    };
  },
};
