// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//https://sequelize.org/docs/v6/advanced-association-concepts/polymorphic-associations/
//https://sequelize.org/docs/v6/core-concepts/assocs/#ondelete-and-onupdate

// Products belongsTo Category
Products.belongsTo(Category);
// Categories have many Products
Category.hasMany(Products);

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {through: ProductTag});

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {through: ProductTag});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
