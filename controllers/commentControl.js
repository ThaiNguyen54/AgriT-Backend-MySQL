import comment from "../models/comment.js";
import MongodbConfig from "../configs/MongodbConfig.js";
import * as CommentManagement from '../Management/CommentManagement.js'
import * as Rest from '../utils/Rest.js';

export async function AddComment(req, res) {
    try {
        let accessUerId = req.query.accessUserId || '';
        let NewComment = {}
        NewComment = req.body;
        NewComment.UserID = accessUerId;
        const CommentInsertData = await comment.create(NewComment);
        if(!CommentInsertData) {
            throw new Error("Can not upload your comment!");
        }
        else {
            return res.json({
                success: true,
                message: "Your comment has been posted",
                question: CommentInsertData,
            })
        }
    }
    catch (error) {
        return res.status(404).send(error);
    }
}

export function GetAllComment (req, res) {
    try{
        comment.findAll()
            .then(allComments => {
                return res.status(200).json({
                    success: true,
                    message: "List of all comment",
                    comments: allComments
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    success: false,
                    message: "Can not get comments. Please try again.",
                    error: err.message
                })
            })
    }
    catch (error) {
        return res.status(404).send(error)
    }

}

export function GetCommentByUserID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.UserID;

        comment.findAll({
            where: {
                UserID: id
            }
        }).then((comments) => {
            return res.status(200).json({
                success: true,
                message: `Comments of user ${id}`,
                comments: comments
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any comments of user ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }


}

export function DeleteComment (req, res) {
    let accessUserRight = req.query.accessUserRight || '';
    let accessUserId = req.query.accessUserId || '';
    let CommentId = req.params.CommentId || '';

    CommentManagement.Delete(CommentId, accessUserRight, accessUserId, function (errorCode, errorMessage, httpCode, errorDescription) {
        if(errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription)
        }
        let ResultData = {};
        ResultData.id = CommentId;
        return Rest.SendSuccess(res, ResultData, httpCode, "Deleted a comment");
    })
}

export function UpdateComment (req, res) {
    let AccessUserId = req.body.accessUserId || '';
    let id = req.params.CommentId || '';
    let data = req.body || '';

    CommentManagement.Update(AccessUserId, id, data, function (errorCode, errorMessage, httpCode, errorDescription, result) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let outResultData = {};
        outResultData.id = result._id;
        return Rest.SendSuccess(res, outResultData, httpCode, 'Updated a comment');
    })
}