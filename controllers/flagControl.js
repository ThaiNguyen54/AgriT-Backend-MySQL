import flag from "../models/flag.js";
import MongodbConfig from "../configs/MongodbConfig.js";
import * as FlagManagement from '../Management/FlagManagement.js'
import * as Rest from '../utils/Rest.js';

export async function AddFlag(req, res) {
    try {
        let accessUerId = req.query.accessUserId || '';
        const NewFlag = new flag(req.body);
        NewFlag.UserID = accessUerId;
        const FlagInsertData = await flag.create(NewFlag);
        if(!FlagInsertData) {
            throw new Error("Something wrong with this action");
        }
        else {
            return res.json({
                success: true,
                message: "Flag successfully",
                flag: FlagInsertData,
            })
        }
    }
    catch (error) {
        return res.status(404).send(error);
    }
}

export function GetAllFlag (req, res) {
    try{
        flag.findAll()
            .then(allFlags => {
                return res.status(200).json({
                    success: true,
                    message: "List of all flags",
                    flags: allFlags
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    success: false,
                    message: "Can not get flags. Please try again.",
                    error: err.message
                })
            })
    }
    catch (error) {
        return res.status(404).send(error)
    }
}

export function GetFlagByUserID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.UserID;

        flag.findAll({
            where: {
                UserID: id
            }
        }).then((flags) => {
            return res.status(200).json({
                success: true,
                message: `Flags of user ${id}`,
                flags: flags
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any flags of user ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}

export function GetFlagByQuestionID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.QuestionID;

        flag.findAll({
            where: {
                QuestionID: id
            }
        }).then((flags) => {
            return res.status(200).json({
                success: true,
                message: `Flags on question ${id}`,
                flags: flags
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any flags on question ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}

export function GetFlagByAnswerID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.AnswerID;

        flag.findAll({
            where: {
                AnswerID: id
            }
        }).then((flags) => {
            return res.status(200).json({
                success: true,
                message: `Flags on answer ${id}`,
                flags: flags
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any flags on answer ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}

export function GetFlagByCommentID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.CommentID;

        flag.findAll({
            where: {
                CommentID: id
            }
        }).then((flags) => {
            return res.status(200).json({
                success: true,
                message: `Flags on comment ${id}`,
                flags: flags
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any flags on comment ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}



export function DeleteFlag (req, res) {
    let accessUserRight = req.query.accessUserRight || '';
    let accessUserId = req.query.accessUserId || '';
    let FlagID = req.params.FlagID || '';

    FlagManagement.Delete(FlagID, accessUserRight, accessUserId, function (errorCode, errorMessage, httpCode, errorDescription) {
        if(errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription)
        }
        let ResultData = {};
        ResultData.id = FlagID;
        return Rest.SendSuccess(res, ResultData, httpCode, "Deleted a flag");
    })
}