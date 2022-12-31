import tag from "../models/tag.js";
import MongodbConfig from "../configs/MongodbConfig.js";
import * as TagManagement from '../Management/TagManagement.js'
import * as Rest from '../utils/Rest.js';

export async function AddTag(req, res) {
    try {
        let accessUerId = req.query.accessUserId || '';
        let accessUserRight = req.query.accessUserRight || '';
        if(accessUserRight !== 'ADMIN') {
            return res.status(403).json({
                success: false,
                message: "Permission Error",
                description: "You don't have permission to perform this action",
            })
        }

        const NewTag = req.body;
        NewTag.map((tag) => (
            tag.UserID = accessUerId
        ))
        const options = {ordered: true};
        const TagInsertData = await tag.create(NewTag, options);
        if(!TagInsertData) {
            throw new Error("Something wrong with this action");
        }
        else {
            return res.status(200).json({
                success: true,
                message: "Add tags successfully",
                tags: TagInsertData,
            })
        }
    }
    catch (error) {
        return res.status(404).send(error);
    }
}

export function GetAllTag (req, res) {
    try{
        tag.findAll()
            .then(allTags => {
                return res.status(200).json({
                    success: true,
                    message: "List of all tags",
                    tags: allTags
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    success: false,
                    message: "Can not get tags. Please try again.",
                    error: err.message
                })
            })
    }
    catch (error) {
        return res.status(404).send(error)
    }
}

export function GetTagByUserID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.UserID;

        tag.findAll({
            where: {
                UserID: id
            }
        }).then((tags) => {
            return res.status(200).json({
                success: true,
                message: `Tags of user ${id}`,
                tags: tags
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any tags of user ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(err)
    }
}

export function GetTagByQuestionID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.QuestionID;

        tag.findAll({
            where: {
                QuestionID: id
            }
        }).then((tags) => {
            return res.status(200).json({
                success: true,
                message: `Tags on question ${id}`,
                tags: tags
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any tags on question ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}

export function GetTagByAnswerID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.AnswerID;

        tag.findAll({
            where: {
                AnswerID: id
            }
        }).then((tags) => {
            return res.status(200).json({
                success: true,
                message: `Flags on answer ${id}`,
                tags: tags
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any tags on answer ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}

export function GetTagByCommentID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.CommentID;

        tag.findAll({
            where: {
                CommentID: id
            }
        }).then((tags) => {
            return res.status(200).json({
                success: true,
                message: `Tags on comment ${id}`,
                tags: tags
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any tags on comment ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}



export function DeleteTag (req, res) {
    let accessUserRight = req.query.accessUserRight || '';
    let accessUserId = req.query.accessUserId || '';
    let TagID = req.params.TagID || '';

    TagManagement.Delete(TagID, accessUserRight, accessUserId, function (errorCode, errorMessage, httpCode, errorDescription) {
        if(errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription)
        }
        let ResultData = {};
        ResultData.id = TagID;
        return Rest.SendSuccess(res, ResultData, httpCode, "Deleted a tag");
    })
}