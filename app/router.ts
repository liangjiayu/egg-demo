import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);


  // user
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);

  // article
  router.post('/api/article/create', controller.article.create);
  router.post('/api/article/detail', controller.article.detail);
  router.post('/api/article/del', controller.article.del);
  router.post('/api/article/list', controller.article.list);
  router.post('/api/article/update', controller.article.update);

};
