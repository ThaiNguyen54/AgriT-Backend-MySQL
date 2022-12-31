import {BIGINT, DATE, Sequelize, STRING} from 'sequelize'
import db from '../configs/Database.js'

const { DataTypes } = Sequelize;

const users = db.define('Users', {
    UserID: {
      field: 'UserID',
      type: BIGINT,
      autoIncrement: true,
      primaryKey: true,
      required: true
    },
    UserName: {
        field: 'UserName',
        type: STRING,
        minlength: 1,
        maxlength: 64,
        required: true
    },
    LoginName: {
        field: 'LoginName',
        type: STRING,
        minlength: 1,
        maxlength: 64,
        required:  true
    },
    Password: {
        field: 'Password',
        type: STRING,
        required:  true
    },
    UserRight: {
        field: 'UserRight',
        type: STRING,
        required:  true
    },
    Email: {
        field: 'Email',
        type: STRING,
        required: true,
    },
    Avatar: {
        field: 'Avatar',
        type: STRING,
    },
    BackgroundImg: {
        field: 'BackgroundImg',
        type: STRING
    },
    RegisterDate: {
        field: 'RegisterDate',
        type: DATE,
        default: Date.now()
    },
    CreatedBy: {
        field: 'CreatedBy',
        type: STRING
    },
    UpdatedBy: {
        field: 'UpdatedBy',
        type: STRING
    },
    UpdatedDate: {
        field: 'UpdatedDate',
        type: DATE
    }
}, {
    freezeTableName: true,
    timestamps: false
})



export default users;