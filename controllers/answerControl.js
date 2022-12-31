import answer from "../models/answer.js";
import MongodbConfig from "../configs/MongodbConfig.js";
import * as AnswerManagement from '../Management/AnswerManagement.js'
import * as Rest from '../utils/Rest.js';

export async function AddAnswer(req, res) {
    try {
        let accessUerId = req.query.accessUserId || '';
        const NewAnswer = new answer(req.body);
        NewAnswer.UserID = accessUerId;
        const AnswerInsertData = await answer.create(NewAnswer);
        if(!AnswerInsertData) {
            throw new Error("Can not upload your answer!");
        }
        else {
            return res.json({
                success: true,
                message: "Your answer has been posted",
                answer: AnswerInsertData,
            })
        }
    }
    catch (error) {
        return res.status(404).send(error);
    }
}

export function GetAllAnswer (req, res) {
    try{
        answer.findAll()
            .then(allAnswer => {
                return res.status(200).json({
                    success: true,
                    message: "List of all answers",
                    questions: allAnswer
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    success: false,
                    message: "Can not get answers. Please try again.",
                    error: err.message
                })
            })
    }
    catch (error) {
        return res.status(404).send(error)
    }

}

export function GetAnswerByUserID (req, res) {
    try {
        let accessUserId = req.query.accessUserId || '';
        let id = req.params.UserID;

        answer.findAll({
            where: {
                UserID: id
            }
        }).then((answers) => {
            return res.status(200).json({
                success: true,
                message: `Answers of user ${id}`,
                answers: answers
            });
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                message: `Not Found any answers of user ${id}`,
                error: err.message,
            })
        })
    }
    catch (err) {
        return res.status(404).send(error)
    }


}


export function DeleteAnswer (req, res) {
    let accessUserRight = req.query.accessUserRight || '';
    let accessUserId = req.query.accessUserId || '';
    let AnswerId = req.params.AnswerId || '';

    AnswerManagement.Delete(AnswerId, accessUserRight, accessUserId, function (errorCode, errorMessage, httpCode, errorDescription) {
        if(errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription)
        }
        let ResultData = {};
        ResultData.id = AnswerId;
        return Rest.SendSuccess(res, ResultData, httpCode, "Deleted a answer");
    })
}

export function UpdateAnswer (req, res) {
    let AccessUserId = req.body.accessUserId || '';
    let id = req.params.AnswerId || '';
    let data = req.body || '';

    AnswerManagement.Update(AccessUserId, id, data, function (errorCode, errorMessage, httpCode, errorDescription, result) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let outResultData = {};
        outResultData.id = result._id;
        return Rest.SendSuccess(res, outResultData, httpCode, 'Updated an answer');
    })
}