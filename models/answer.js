import mongoose from 'mongoose'
import {BIGINT, Sequelize, STRING} from 'sequelize'
import db from '../configs/Database.js'


const answer = db.define('Answers', {
    AnswerID: {
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
        required: true,
    },
    AContent: {
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
    collection: 'Answers',
    versionKey: false
})

export default answer;