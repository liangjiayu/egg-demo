import { Controller } from 'egg';

export default class AdminController extends Controller {
  /**
   * 注册用户
   */
  public async register() {
    const { ctx } = this;
    const formData = ctx.request.body;

    // 参数验证
    await this.ctx.helper.validate(formData, {
      nickname: { type: 'string', required: true, message: '用户名不能为空' },
      email: { type: 'email', required: true, message: '邮箱不能为空' },
      password: {
        validator: (rule, value, callback) => {
          if (!formData.password) {
            return new Error('密码不能空');
          }
          if (!formData.cpassword) {
            return new Error('确认密码不能空');
          }
          if (formData.password !== formData.cpassword) {
            return new Error('密码不一致');
          }
          return callback();
        },
      },
    });

    // 插入记录
    const result = await this.service.admin.addUser(formData);

    if (result) {
      this.ctx.helper.msgSuccess();
    }
  }

  /**
   * 登录用户
   */
  public async login() {
    const { ctx } = this;
    const formData = ctx.request.body;

    // 参数验证
    await this.ctx.helper.validate(formData, {
      email: { type: 'string', required: true },
      password: { type: 'string', required: true },
    });

    const user = await this.service.admin.signIn(formData);

    this.ctx.helper.msgSuccess(user);

  }
}
