module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        },
        avtar: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        indexes: [{ unique: true, fields: ['email'] }]
    });

    return User;
};