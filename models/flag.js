import mongoose from 'mongoose'
import {BIGINT, Sequelize, STRING} from "sequelize";
import db from '../configs/Database.js'


const flag = db.define('Flags',{
    FlagID: {
        type: BIGINT,
        autoIncrement: true,
        primaryKey: true,
        required: true
    },
    UserID: {
        type: BIGINT,
        required: true,
    },
    QuestionID: {
        type: BIGINT,
    },
    AnswerID: {
        type: BIGINT,
    },
    CommentID: {
        type: BIGINT,
    },
    FlagName: {
        type: STRING,
        required: true,
    },
    FlagDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    isDeleted: {
        type: Boolean
    },
    DeletedDate: {
        type: Date
    }
}, {
    collection: 'Flags',
    versionKey: false,
    timestamp: false
})
export default flag;