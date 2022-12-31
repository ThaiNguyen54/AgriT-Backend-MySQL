import mongoose from 'mongoose'
import {BIGINT, Sequelize} from "sequelize";
import db from '../configs/Database.js'

const postLike = db.define('PostLikes',{
    postLikeID: {
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
    PostLikeDate: {
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
    collection: 'PostLikes',
    versionKey: false,
    timestamps: false
})

export default postLike;