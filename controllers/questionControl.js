import questions from "../models/question.js";
import MongodbConfig from "../configs/MongodbConfig.js";
import * as QuestionManagement from '../Management/QuestionManagement.js'
import * as Rest from '../utils/Rest.js';
import cloudinaries from '../utils/Cloudinary.js';

export async function AddQuestion(req, res) {
    try {
        let accessUerId = req.query.accessUserId || '';
        // const result = await cloudinaries.uploader.upload(req.body.Image, {})
        let NewQuestion ={}
        NewQuestion = req.body;

        // if(result){
        //     NewQuestion.Image = result.secure_url;
        // }

        NewQuestion.UserID = accessUerId;
        const QuestionInsertData = await questions.create(NewQuestion);
        if(!QuestionInsertData) {
            throw new Error("Can not upload your question!");
        }
        else {
            return res.json({
                success: true,
                message: "Your question has been posted",
                question: QuestionInsertData,
            })
        }
    }
    catch (error) {
        return res.status(404).send(error);
    }
}

export function GetAllQuestion (req, res) {
    try{
        questions.findAll()
            .then(allQuestions => {
                return res.status(200).json({
                    success: true,
                    message: "List of all questions",
                    questions: allQuestions
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    success: false,
                    message: "Can not get questions. Please try again.",
                    error: err.message
                })
            })
    }
    catch (error) {
        return res.status(404).send(error)
    }

}

export function GetQuestionByUserID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.UserID;

        questions.findAll({
            where: {
                UserID: id
            }
        }).then((questions) => {
            return res.status(200).json({
                success: true,
                message: `Questions of user ${id}`,
                questions: questions
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any questions of user ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(err)
    }


}

export function GetQuestionByTag (req, res) {
    try{
        let tagName = req.body.TagName;
        questions.findAll({
            where: {
                TagName: tagName
            }
        }).then((questions) => {
            return res.status(200).json({
                success: true,
                message:  `Found Question(s) with tag ${tagName}`,
                questions: questions
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any questions with tag ${tagName}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(err)
    }
    
}

export function DeleteQuestion (req, res) {
    let accessUserRight = req.query.accessUserRight || '';
    let accessUserId = req.query.accessUserId || '';
    let QuestionId = req.params.QuestionId || '';
    

    QuestionManagement.Delete(QuestionId, accessUserRight, accessUserId, function (errorCode, errorMessage, httpCode, errorDescription) {
        if(errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription)
        }
        let ResultData = {};
        ResultData.id = QuestionId;
        return Rest.SendSuccess(res, ResultData, httpCode, "Deleted a question");
    })
}

export function UpdateQuestion (req, res) {
    let AccessUserId = req.body.accessUserId || '';
    let id = req.params.QuestionId || '';
    let data = req.body || '';
    console.log(data)
    QuestionManagement.Update(AccessUserId, id, data, function (errorCode, errorMessage, httpCode, errorDescription, result) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let outResultData = {};
        outResultData.id = result._id;
        return Rest.SendSuccess(res, outResultData, httpCode, 'Updated a question');
    })
}