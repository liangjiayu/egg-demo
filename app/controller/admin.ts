/* eslint-disable */
// @ts-nocheck

import { Controller } from 'egg';

export default class AdminController extends Controller {
  /**
   * 注册用户
   */
  public async register() {
    const { ctx } = this;
    const formData = ctx.request.body;
    this.ctx.helper.validate(formData, {
      nickname: { type: 'string', required: true, message: '用户名不能为空' },
      email: { type: 'email', required: true, message: '邮箱不能为空' },
      password: {
        type: 'string',
        required: true,
        validator: (rule, value, callback) => {
          if (!formData.password) {
            return callback(new Error('密码不能空'));
          }
          if (!formData.cpassword) {
            return callback(new Error('确认密码不能空'));
          }
          if (formData.password !== formData.cpassword) {
            return callback(new Error('密码不一致'));
          }
          return callback();
        },
      },
    });

    // console.log('register');
  }

  /**
   * 登录用户
   */
  public async login() {
    console.log('login');
  }
}
