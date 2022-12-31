import {Sequelize} from 'sequelize'
const db = new Sequelize('AgriT', 'Thai', 'thai123', {
    host: '34.27.172.202',
    dialect: 'mysql'
})

export default db;