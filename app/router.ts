import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  // admin
  router.post('/api/admin/register', controller.admin.register);
  router.post('/api/admin/login', controller.admin.login);

  // article
  router.post('/api/article/create', controller.article.create);
  router.post('/api/article/detail', controller.article.detail);
  router.post('/api/article/del', controller.article.del);
  router.post('/api/article/list', controller.article.list);
  router.post('/api/article/update', controller.article.update);

};
