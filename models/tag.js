import mongoose from 'mongoose'
import {BIGINT, Sequelize, STRING} from "sequelize";
import db from '../configs/Database.js'


const tag = db.define('Tags', {
    TagID: {
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
    TagName: {
        type: STRING,
    },
    CreatedDate: {
        type: Date,
        default: Date.now,
    }
}, {
    collection: 'Tags',
    versionKey: false,
    timestamps: false
})

export default tag;