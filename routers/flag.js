import express from 'express'
import * as FlagControl from '../controllers/flagControl.js'
import * as QuestionControl from "../controllers/questionControl.js";

const router = express.Router();


/**
 * @api {POST} /ver1/authenticate/flag Add a flag to a comment, a question or an answer
 * @apiVersion 1.0.0
 * @apiName AddFlag
 * @apiGroup Flag
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to flag a comment, a question or an answer
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiParam {string} CommentID Id of the comment that is being flagged
 * @apiParam {string} AnswerID Id of the answer that is being flagged
 * @apiParam {string} QuestionID Id of the question that is being flagged
 * @apiParam {string} FlagName Name of the flag
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/flag
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} flag Information of the flag
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Flag successfully",
 *     "flag": [
 *         {
 *             "CommentID": "636e57cd711b869f157330b2",
 *             "FlagName": "asdfxcvzxcvzxcv",
 *             "_id": "6388db952852d2ab527db441",
 *             "FlagDate": "2022-12-01T16:51:33.128Z",
 *             "UserID": "6368bcb887e84601d546dcc4"
 *         }
 *     ]
 * }
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
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/flag
 */
router.post("/ver1/authenticate/flag", FlagControl.AddFlag)


/**
 * @api {GET} /ver1/flags View all flags in the system
 * @apiVersion 1.0.0
 * @apiName GetAllFlag
 * @apiGroup Flag
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all flags in the system
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/flags
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of all flags in the system
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "List of all flags",
 *     "flags": [
 *         {
 *             "_id": "636e71cdbe6e0ec9de6a022a",
 *             "QuestionID": "6363c1ec3e42dd9f6b868f17",
 *             "FlagName": "Ambiguous content",
 *             "FlagDate": "2022-11-11T16:01:17.613Z",
 *             "UserID": "6369c88a8beabd9ff21e16b8"
 *         }
 *      ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/flags
 *
 */
router.get("/ver1/flags", FlagControl.GetAllFlag)


/**
 * @api {GET} /ver1/flags/user/:UserID View all flags of a user
 * @apiVersion 1.0.0
 * @apiName GetFlagByUserID
 * @apiGroup Flag
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all flags of a user
 *
 * @apiParam {string} UserID Id of the user
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/flags/user/:UserID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} flags Information of all flags of a user
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Flags of user 6369c88a8beabd9ff21e16b8",
 *     "flags": [
 *         {
 *             "_id": "636e71cdbe6e0ec9de6a022a",
 *             "QuestionID": "6363c1ec3e42dd9f6b868f17",
 *             "FlagName": "Ambiguous content",
 *             "FlagDate": "2022-11-11T16:01:17.613Z",
 *             "UserID": "6369c88a8beabd9ff21e16b8"
 *         }
 *      ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/flags/user/:UserID
 *
 */
router.get("/ver1/flags/user/:UserID", FlagControl.GetFlagByUserID)


/**
 * @api {GET} /ver1/flags/question/:QuestionID View all flags of a question
 * @apiVersion 1.0.0
 * @apiName GetFlagByQuestionID
 * @apiGroup Flag
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all flags of a question
 *
 * @apiParam {string} QuestionID Id of the question
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/flags/question/:QuestionID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} flags Information of all flags of a question
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Flags on question 6363c1ec3e42dd9f6b868f17",
 *     "flags": [
 *         {
 *             "_id": "636e71cdbe6e0ec9de6a022a",
 *             "QuestionID": "6363c1ec3e42dd9f6b868f17",
 *             "FlagName": "Ambiguous content",
 *             "FlagDate": "2022-11-11T16:01:17.613Z",
 *             "UserID": "6369c88a8beabd9ff21e16b8"
 *         }
 *     ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/flags/question/:QuestionID
 *
 */
router.get("/ver1/flags/question/:QuestionID", FlagControl.GetFlagByQuestionID)

/**
 * @api {GET} /ver1/flags/answer/:AnswerID View all flags of an answer
 * @apiVersion 1.0.0
 * @apiName GetFlagByAnswerID
 * @apiGroup Flag
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all flags of an answer
 *
 * @apiParam {string} AnswerID Id of the answer
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/flags/answer/:AnswerID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} flags Information of all flags of an answer
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Flags on answer 636e580f970f1debe3b66394",
 *     "flags": [
 *         {
 *             "_id": "636e7213be6e0ec9de6a022d",
 *             "AnswerID": "636e580f970f1debe3b66394",
 *             "FlagName": "Useful answer",
 *             "FlagDate": "2022-11-11T16:02:27.811Z",
 *             "UserID": "6369c88a8beabd9ff21e16b8"
 *         }
 *     ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/flags/answer/:AnswerID
 *
 */
router.get("/ver1/flags/answer/:AnswerID", FlagControl.GetFlagByAnswerID)

/**
 * @api {GET} /ver1/flags/comment/:CommentID View all flags of a comment
 * @apiVersion 1.0.0
 * @apiName GetFlagByCommentID
 * @apiGroup Flag
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all flags of a comment
 *
 * @apiParam {string} CommentID Id of the comment
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/flags/comment/:CommentID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} flags Information of all flags of a comment
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Flags on comment 636e57cd711b869f157330b2",
 *     "flags": [
 *         {
 *             "_id": "636e794254b22499baf5e23e",
 *             "CommentID": "636e57cd711b869f157330b2",
 *             "FlagName": "Spam",
 *             "FlagDate": "2022-11-11T16:33:06.785Z",
 *             "UserID": "6369c88a8beabd9ff21e16b8"
 *     ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/flags/comment/:CommentID
 *
 */
router.get("/ver1/flags/comment/:CommentID", FlagControl.GetFlagByCommentID)


/**
 * @api {DELETE} /ver1/authenticate/flags/:FlagID Delete a flag of a comment, a question or an answer
 * @apiVersion 1.0.0
 * @apiName DeleteFlag
 * @apiGroup Flag
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to un-flag a comment, a question or an answer
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiParam {string} FlagID Id of the flag

 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/flags/:FlagID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data id of the flag
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Deleted a flag",
 *     "data": {
 *         "id": "6388db952852d2ab527db441"
 *     }
 * }
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
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/flags/:FlagID
 */
router.delete("/ver1/authenticate/flags/:FlagID", FlagControl.DeleteFlag)




export default router;