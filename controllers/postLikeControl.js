import PostLike from "../models/postLike.js";
import MongodbConfig from "../configs/MongodbConfig.js";
import * as PostLikeManagement from '../Management/PostLikeManagement.js'
import * as Rest from '../utils/Rest.js';

export async function AddPostLike(req, res) {
    try {
        let accessUerId = req.query.accessUserId || '';
        const NewLike = new PostLike(req.body);
        NewLike.UserID = accessUerId;
        // const LikeInsertData = await PostLike.insertMany(NewLike);
        const SearchLike = await PostLike.findOne({
            where: {
                UserID: req.body.UserID,
                QuestionID: req.body.QuestionID
            }
        })
        if (!SearchLike) {
            const LikeInsertData = await PostLike.create(NewLike);
            if (!LikeInsertData) {
                throw new Error("Something wrong with this action");
            } else {
                return res.json({
                    success: true,
                    message: "Like successfully",
                    like: LikeInsertData,
                })
            }
        } else {
            const UnLike = await PostLike.destroy({
                where: {
                    UserID: req.body.UserID,
                    QuestionID: req.body.QuestionID
                }
            })
            return res.json({
                success: false,
                message: "Already Like successfully",
            })
        }
    }
    catch (error) {
        return res.status(404).send(error);
    }
}

export function GetAllPostLike (req, res) {
    try{
        PostLike.findAll()
            .then(allPostLike => {
                return res.status(200).json({
                    success: true,
                    message: "List of all likes",
                    likes: allPostLike
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    success: false,
                    message: "Can not get likes. Please try again.",
                    error: err.message
                })
            })
    }
    catch (error) {
        return res.status(404).send(error)
    }
}

export function GetPostLikeByUserID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.UserID;

        PostLike.findAll({
            UserID: id
        }).then((postLikes) => {
            return res.status(200).json({
                success: true,
                message: `Likes of user ${id}`,
                likes: postLikes
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any likes of user ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}

export function GetPostLikeByQuestionID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.QuestionID;

        PostLike.findAll({
            where: {
                QuestionID: id
            }
        }).then((postLikes) => {
            return res.status(200).json({
                success: true,
                message: `Likes on question ${id}`,
                likes: postLikes
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any likes on question ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}

export function GetPostLikeByAnswerID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.AnswerID;

        PostLike.findAll({
            where: {
                AnswerID: id
            }
        }).then((postLikes) => {
            return res.status(200).json({
                success: true,
                message: `Likes on answer ${id}`,
                likes: postLikes
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any likes on answer ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}

export function GetPostLikeByCommentID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.CommentID;

        PostLike.findAll({
            where: {
                CommentID: id
            }
        }).then((postLikes) => {
            return res.status(200).json({
                success: true,
                message: `Flags on comment ${id}`,
                likes: postLikes
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any likes on comment ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }
}

export function DeletePostLike (req, res) {
    let accessUserRight = req.query.accessUserRight || '';
    let accessUserId = req.query.accessUserId || '';
    let PostLikeID = req.params.PostLikeId || '';


    PostLikeManagement.Delete(PostLikeID, accessUserRight, accessUserId, function (errorCode, errorMessage, httpCode, errorDescription) {
        if(errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription)
        }
        let ResultData = {};
        ResultData.id = PostLikeID;
        return Rest.SendSuccess(res, ResultData, httpCode, "Deleted a like");
    })
}