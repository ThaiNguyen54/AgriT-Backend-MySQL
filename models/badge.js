import mongoose from 'mongoose'
import {BIGINT, Sequelize, STRING} from "sequelize";
import db from '../configs/Database.js'


const badges = db.define('Badges', {
    BadgeID: {
        type: BIGINT,
        autoIncrement: true,
        primaryKey: true,
        required: true
    },
    BadgeName: {
        type: STRING,
        required: true,
    },
    Description: {
        type: Date,
    }
}, {
    collection: 'Badges',
    versionKey: false
})

export default badges;