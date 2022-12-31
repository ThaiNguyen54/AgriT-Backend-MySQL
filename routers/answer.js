import express from 'express'
import * as AnswerControl from '../controllers/answerControl.js'
import * as QuestionControl from "../controllers/questionControl.js";

const router = express.Router();
/**
 * @api {POST} /ver1/authenticate/answer Post a new answer
 * @apiVersion 1.0.0
 * @apiName AddAnswer
 * @apiGroup Answer
 * @apiPermission Every type of user
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription User use this api to post a new answer
 *
 * @apiParam {string} QuestionID Id of the question that is being answered
 * @apiParam {string} AContent Content of the answer
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/answer
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of the posted answer
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *          "success": true,
 *          "message": "Your answer has been posted",
 *          "answer": [
 *              {
 *                  "QuestionID": "6363c1ec3e42dd9f6b868f17",
 *                  "AContent": "xcbsdretbdxv4534542324",
 *                  "_id": "6388afef4df25d5fe90d6718",
 *                  "PostedDate": "2022-12-01T13:45:19.952Z",
 *                  "UserID": "6368bcb887e84601d546dcc4"
 *              }
 *          ]
 *     }
 *
 * @apiError  400_Bad_Request Authenticate failed
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *          "success": false,
 *          "code": 9,
 *          "message": "Invalid Token",
 *          "description": "You need to log in to perform the request"
 *      }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/answer
 */
router.post("/ver1/authenticate/answer", AnswerControl.AddAnswer)


/**
 * @api {GET} /ver1/answers View all answers in the system
 * @apiVersion 1.0.0
 * @apiName GetAllAnswer
 * @apiGroup Answer
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all answers in the system
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/answers
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of all answers in the system
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "List of all answers",
 *     "questions": [
 *         {
 *             "_id": "63861bc856a3400057b10dcb",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "QuestionID": "6382fdce304737db6dddd97f",
 *             "AContent": "ae ơi",
 *             "PostedDate": "2022-11-29T14:48:40.265Z"
 *         }
 *      ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/answers
 *
 */
router.get("/ver1/answers", AnswerControl.GetAllAnswer)

/**
 * @api {GET} /ver1/answers/:UserID View all answers of a user
 * @apiVersion 1.0.0
 * @apiName GetAnswerByUserID
 * @apiGroup Answer
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all answers of a user
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/answers/:UserID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of all answers of a user
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Answers of user 6368bcb887e84601d546dcc4",
 *     "answers": [
 *         {
 *             "_id": "63880cd9a00121e3f0f8a88d",
 *             "UserID": "6368bcb887e84601d546dcc4",
 *             "QuestionID": "6378566e4683c153e4e34534",
 *             "AContent": "ây do",
 *             "PostedDate": "2022-12-01T02:09:29.517Z"
 *         }
 *      ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/answers/:UserID
 *
 */
router.get("/ver1/answers/:UserID", AnswerControl.GetAnswerByUserID)


/**
 * @api {DELETE} /ver1/authenticate/answers/:AnswerId Delete an answer
 * @apiVersion 1.0.0
 * @apiName DeleteAnswer
 * @apiGroup Answer
 * @apiPermission Owner of the answer
 *
 * @apiDescription User use this api to delete an answer
 *
 * @apiParam {string} AnswerId Id of the answer the need to be deleted
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/answers/:AnswerId
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of the deleted answer
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Deleted a answer",
 *     "data": {
 *         "id": "63882a1ca00121e3f0f8aa3e"
 *     }
 * }
 *
 * @apiError  403_Forbidden Permission error
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 * {
 *     "success": false,
 *     "code": 8,
 *     "message": "Permission error",
 *     "description": "You have no permission to perform this request"
 * }
 * 
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/answers/:AnswerId
 */
router.delete("/ver1/authenticate/answers/:AnswerId", AnswerControl.DeleteAnswer)


/**
 * @api {PUT} /ver1/authenticate/answers/:AnswerId Update an answer
 * @apiVersion 1.0.0
 * @apiName UpdateAnswer
 * @apiGroup Answer
 * @apiPermission Owner of the answer
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription User use this api to update an answer
 *
 * @apiParam {string} AnswerId Id of the answer the need to be updated
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/answers/:AnswerId
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of the updated answer
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Updated an answer",
 *     "data": {
 *         "id": "63882a21a00121e3f0f8aa42"
 *     }
 * }
 *
 * @apiError  403_Forbidden Permission error
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 * {
 *     "success": false,
 *     "code": 8,
 *     "message": "Permission error",
 *     "description": "You have no permission to perform this request"
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/answers/:AnswerId
 */
router.put("/ver1/authenticate/answers/:AnswerId", AnswerControl.UpdateAnswer)


export default router;