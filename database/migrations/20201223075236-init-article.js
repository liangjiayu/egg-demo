module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('article', {

      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: STRING(255), allowNull: false }, // 文章标题
      content: { type: STRING(255), allowNull: false }, // 文章内容
      author: { type: STRING(255), allowNull: true }, // 文章作者
      description: { type: STRING(255), allowNull: true }, // 文章简介
      keyword: { type: STRING(255), allowNull: true }, // 文章关键字
      cover: { type: STRING(255), allowNull: true }, // 文章封面
      browse: { type: STRING(255), allowNull: true }, // 文章浏览数
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('article');
  },
};
