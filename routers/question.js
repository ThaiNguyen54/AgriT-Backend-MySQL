import express from 'express'
import * as QuestionControl from '../controllers/questionControl.js'

const router = express.Router();
/**
 * @api {POST} /ver1/authenticate/question Post a new question
 * @apiVersion 1.0.0
 * @apiName AddQuestion
 * @apiGroup Question
 * @apiPermission Every type of user
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription User use this api to post a question to the system
 * 
 * @apiParam {string} Title Title of the question
 * @apiParam {string} QContent Content of the question
 * @apiParam {string} TagName Tag name of the question
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/question
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message message from the server
 * @apiSuccess {Object[]} question the information of the posted question
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *     "success": true,"success": true,
 *     "message": "Your question has been posted",
 *     "question": [
 *         {
 *             "Title": "Web development",
 *             "QContent": "I want to become a fullstack developer. Where to start?",
 *             "_id": "636a183466f6a1bf9959148f",
 *             "PostedDate": "2022-11-08T08:49:56.062Z",
 *             "UserID": "6369c88a8beabd9ff21e16b8"
 *         }
 *     ]
 * }
 *
 * @apiError  400_Bad_Request User need to log in into the system to post a question
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 404 Bad Request
 * {
 *     "success": false,
 *     "code": 9,
 *     "message": "Invalid Token",
 *     "description": "You need to log in to perform the request"
 * }
 * 
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/question
 */
router.post("/ver1/authenticate/question", QuestionControl.AddQuestion)


/**
 * @api {GET} /ver1/questions Get all questions
 * @apiVersion 1.0.0
 * @apiName GetAllQuestion
 * @apiGroup Question
 * @apiPermission Every type of user
 *
 * @apiDescription user use this api to get all questions in the system
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/questions
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message message from the server
 * @apiSuccess {Object[]} question the information of all questions in the system
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "List of all questions",
 *     "questions": [
 *         {
 *             "_id": "6363c1ec3e42dd9f6b868f17",
 *             "QContent": "How to learn Python??",
 *             "PostedDate": "2022-11-03T13:28:12.684Z",
 *             "UserID": "634fc9cecbc7f9f402d76e07",
 *             "Title": "Python"
 *         }
 *     ]
 * }
 *
 * 
 * @apiSampleRequest http://localhost:3001/ver1/questions
 */
router.get("/ver1/questions", QuestionControl.GetAllQuestion)

/**
 * @api {GET} /ver1/questions/:UserID Get all questions of a user
 * @apiVersion 1.0.0
 * @apiName GetQuestionByUserID
 * @apiGroup Question
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to get all questions of other users
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/questions/123
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message message from the server
 * @apiSuccess {Object[]} question the information of all questions of a user
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Questions of user 634fc9cecbc7f9f402d76e07",
 *     "questions": [
 *         {
 *             "_id": "6363c1ec3e42dd9f6b868f17",
 *             "QContent": "How to learn Python??",
 *             "PostedDate": "2022-11-03T13:28:12.684Z",
 *             "UserID": "634fc9cecbc7f9f402d76e07",
 *             "Title": "Python"
 *         }
 *     ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/questions/:UserID
 */
router.get("/ver1/questions/:UserID", QuestionControl.GetQuestionByUserID)

/**
 * @api {DELETE} /ver1/authenticate/questions/:QuestionId Delete a question
 * @apiVersion 1.0.0
 * @apiName DeleteQuestion
 * @apiGroup Question
 * @apiPermission Every type of user
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription User use this api to delete a question
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/questions/123
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message message from the server
 * @apiSuccess {Object[]} data the id of the deleted question
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Deleted a question",
 *     "data": {
 *         "id": "636a1f99b271b3895b3d2853"
 *     }
 * }
 *
 * @apiError  403 Forbidden Either administrator or owner can delete this question
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 403 Forbidden
 * {
 *     "success": false,
 *     "code": 8,
 *     "message": "Permission error",
 *     "description": "You have no permission to perform this request"
 * }
 * 
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/questions/:QuestionId
 */
router.delete("/ver1/authenticate/questions/:QuestionId", QuestionControl.DeleteQuestion)



/**
 * @api {PUT} /ver1/authenticate/questions/:QuestionId Update a question
 * @apiVersion 1.0.0
 * @apiName UpdateQuestion
 * @apiGroup Question
 * @apiPermission Every type of user
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription User use this api to update a question
 *
 * @apiParam {string} QuestionId Id of the question that need to be updated
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/questions/123
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message message from the server
 * @apiSuccess {Object[]} data the id of the updated question
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Updated a question",
 *     "data": {
 *         "id": "6363c1ec3e42dd9f6b868f17"
 *     }
 * }
 *
 * @apiError  403_Forbidden Either administrator or owner can delete this question
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 403 Forbidden
 * {
 *     "success": false,
 *     "code": 8,
 *     "message": "Permission error",
 *     "description": "Only the owner can edit the question"
 * }
 * 
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/questions/:QuestionId
 */
router.put("/ver1/authenticate/questions/:QuestionId", QuestionControl.UpdateQuestion)



/**
 * @api {GET} /ver1/questionsbytag Search questions by tag
 * @apiVersion 1.0.0
 * @apiName GetQuestionByTag
 * @apiGroup Question
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to search question by tag
 *
 * @apiParam {String} TagName Name of a tag
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/questionsbytag
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message message from the server
 * @apiSuccess {Object[]} questions questions related to input tag
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Found Question(s) with tag Trồng trọt",
 *     "questions": [
 *        {
 *          "_id": "63881628a00121e3f0f8a961",
 *          "Title": "Trồng cây",
 *           "TagName": "Trồng trọt",
 *           "QContent": "cây thơm ngon bổ dưỡng, hít vào là phê, lê thê tới nóc",
 *           "PostedDate": "2022-12-01T02:49:12.501Z",
 *           "UserID": "63424a31bfeed9be13fd9e65"
 *         }
 *      ]
 * }
 *
 * 
 * 
 * @apiSampleRequest http://localhost:3001/ver1/questionsbytag
 */
router.get("/ver1/questionsbytag", QuestionControl.GetQuestionByTag)

export default router;