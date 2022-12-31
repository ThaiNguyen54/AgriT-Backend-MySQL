import {BIGINT, Sequelize, STRING} from "sequelize";
import db from '../configs/Database.js'

const questions = db.define('Questions', {
    QuestionID: {
        type: BIGINT,
        autoIncrement: true,
        primaryKey: true,
        required: true
    },
    UserID: {
        type: BIGINT,
        required: true,
    },
    Title: {
        type: STRING,
    },
    TagName: {
        type: STRING
    },
    Image: {
        type: STRING
    },
    QContent: {
        type: STRING,
        required: true,
    },
    PostedDate: {
        type: Date,
        default: Date.now,
    },
    EditedDate: {
        type: Date
    },
    isDeleted: {
        type: Boolean
    },
    DeletedDate: {
        type: Date
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default questions;