module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        
        type: Sequelize.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
        
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        
        type: Sequelize.STRING
      },
      shippingCosts: {
        allowNull: false,
        defaultValue: 0.0,
        type: Sequelize.DOUBLE
      },
      averageServiceMinutes: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: [
          'online',
          'offline',
          'closed',
          'temporarily closed'
        ],
        defaultValue: 'offline'
      },
      heroImage: {
        type: Sequelize.STRING
      },
      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        },
        onDelete: 'cascade'
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        },
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }

    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
