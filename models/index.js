// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//https://sequelize.org/docs/v6/advanced-association-concepts/polymorphic-associations/
//https://sequelize.org/docs/v6/core-concepts/assocs/#ondelete-and-onupdate

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

//option 1
// Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {through: ProductTag});

// Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {through: ProductTag});

//option 2
// Products belongsToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id',
  constraints: false
});

// Tags belongsToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id',
  constraints: false
});
  

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
