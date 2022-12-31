import * as Utils from '../utils/utilFuncs.js'
import Answer from '../models/answer.js'
import Validator from 'validator';
import Question from "../models/question.js";


export function Delete(AnswerId, accessUserRight, accessUserId, callback) {
    try{
        // if(!Utils.VariableTypeChecker(AnswerId, 'string') || !Validator.isMongoId(AnswerId)) {
        //     return callback(8, 'invalid_id', 400, 'Answer id is not a string');
        // }
        let query = {AnswerID: AnswerId};
        Answer.findOne({
            where: {
                AnswerID: AnswerId
            }
        })
            .then((answer) => {
                if(accessUserRight !== "ADMIN" && accessUserId !== answer.UserID) {
                    return callback (8, 'Permission error', 403, "You have no permission to perform this request")
                }
                else if ((accessUserRight === "ADMIN" &&  accessUserId !== answer.UserID) ||
                    (accessUserRight !== "ADMIN" &&  accessUserId === answer.UserID)){
                    answer.destroy().on(function(error) {
                        if(error) {
                            return callback(8, 'Remove failed', 420, error);
                        }
                        return  callback(null, null, 200, null, answer);
                    });
                }
                else {
                    return callback(null, null, 200, null);
                }
            })
            .catch(function(error) {
                return callback(8, 'The answer is not exist', 420, error);
            });
    }
    catch (error) {
        return callback(8, 'Delete answer failed', 400, error)
    }
}

export function Update (AccessUserId, AnswerId, UpdateData, callback) {
    try {

        Answer.findOne ({
            where: {
                AnswerID: AnswerId
            }
        })
            .then((answer) => {
                if(AccessUserId !== answer.UserID) {
                    return callback(8, 'Permission error', 403, 'Only the owner can edit the question');
                }
                else {
                    let update = {};

                    let options = {
                        upsert: false,
                        new: true,
                        setDefaultsOnInsert: true
                    };

                    if(Utils.VariableTypeChecker(UpdateData.AContent, 'string')) {
                        update.AContent = UpdateData.AContent;
                    }

                    Answer.update(update, {
                        where: {
                            AnswerID: AnswerId
                        }
                    })
                        .then((updatedAnswer) => {
                            if (updatedAnswer) {
                                console.log(updatedAnswer)
                                return callback(null, null, 200, null, updatedAnswer)
                            }
                            else {
                                return callback(8, 'Answer is not available', 400, null, null)
                            }
                        })
                        .catch(function(error) {
                            return callback(8, 'Update failed', 420, error, null);
                        });
                }
            })
            .catch(function(error) {
                return callback(8, 'The answer is not exist', 420, error);
            })
    } catch (err) {
        return callback(8, 'Update failed', 400, err, null)
    }
}
