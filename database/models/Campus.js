const Sequelize = require('sequelize');
const db = require('../dbinit');

const Campus = db.sequelize.define('campus', {

    name: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },

    imgUrl: {

        type: Sequelize.STRING,
        defaultValue: "https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png"

    },


    address: {

        type: Sequelize.STRING,
        allowNull: false,
        validate: {

            notEmpty: true,

        }

    },

    description: {

        type: Sequelize.TEXT,
        allowNull: false

    }

})

module.exports = Campus;