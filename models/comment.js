import mongoose from 'mongoose'
import {BIGINT, Sequelize, STRING} from "sequelize";
import db from '../configs/Database.js'

const comment = db.define('Comments', {
    CommentID: {
        type: BIGINT,
        autoIncrement: true,
        primaryKey: true,
        required: true
    },
    UserID: {
        type: BIGINT,
        required: true,
    },
    // QuestionID: {
    //     type: String,
    // },
    AnswerID: {
        type: BIGINT,
    },
    CContent: {
        type: STRING,
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
    collection: 'Comments',
    versionKey: false,
    timestamps: false
})

export default comment;