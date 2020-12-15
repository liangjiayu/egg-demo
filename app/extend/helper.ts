import { IHelper } from 'egg';
import Schema from 'async-validator';

export default {
  msgSuccess(this: IHelper, data:any = null, option = {}) {
    const _option = {
      code: 200,
      msg: 'success',
      ...option,
    };
    this.ctx.status = _option.code;

    this.ctx.body = {
      code: _option.code,
      msg: _option.msg,
      data,
    };
  },

  msgError(this: IHelper, msg = '系统错误', option = {}) {
    const _option = {
      code: 402,
      data: null,
      ...option,
    };
    this.ctx.status = _option.code;
    this.ctx.body = {
      code: _option.code,
      data: _option.data,
      msg,
    };
  },

  validate(this:IHelper, data = {}, rules = {}, options = {}) {
    const validate = new Schema(rules);
    validate.validate(data, options, (errors, fields) => {
      if (errors) {
        this.ctx.status = 422;
        this.ctx.body = {
          code: 422,
          msg: errors[0].message,
          data: {
            errors,
            fields,
          },
        };
      }
    });
  },
};
