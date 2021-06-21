const db = require('../dbinit');
const Campus = require('./Campus');
const Student = require('./Student')

db.sequelize.sync({force: false});

Campus.hasMany(Student);
Student.belongsTo(Campus)

module.exports = {

    Campus,
    Student,
    
}