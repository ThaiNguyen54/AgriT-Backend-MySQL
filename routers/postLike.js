import express from 'express'
import * as PostLikeControl from '../controllers/postLikeControl.js'



const router = express.Router();


/**
 * @api {POST} /ver1/authenticate/post-like Like a post (question, comment or answer). If already liked, this api will delete the like
 * @apiVersion 1.0.0
 * @apiName AddPostLike
 * @apiGroup Post Like
 * @apiPermission Every type of user
 * @apiHeader {String} access_token json web token to access to data
 * 
 * 
 * @apiParam {string} CommentID Id of the comment that is being liked
 * @apiParam {string} AnswerID Id of the answer that is being liked
 * @apiParam {string} QuestionID Id of the question that is being liked
 *
 * @apiDescription User use this api to like or unlike a post (question, comment or answer)
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/post-like
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message message from the server
 * @apiSuccess {Object[]} data the id of the deleted question
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "success": true,
 *   "message": "Like successfully",
 *   "like": [
 *       {
 *           "CommentID": "63880cdfa00121e3f0f8a891",
 *           "_id": "638f55012891d4b3ed391bc7",
 *           "PostLikeDate": "2022-12-06T14:43:13.915Z",
 *           "UserID": "63424a31bfeed9be13fd9e65"
 *       }
 *   ]
 * }
 *
 * @apiError 400_Bad_Request User need to login
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 400 Bad_Request
 * {
 *      "success": false,
 *      "code": 9,
 *      "message": "Invalid Token",
 *      "description": "You need to log in to perform the request"
 * }
 * 
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/post-like
 */
router.post("/ver1/authenticate/post-like", PostLikeControl.AddPostLike)


/**
 * @api {GET} /ver1/post-like View all likes in the system
 * @apiVersion 1.0.0
 * @apiName GetAllPostLike
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post like in the system
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes in the system
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "List of all likes",
 *     "likes": [
 *         {
 *             "_id": "63887dd9061cd89d6376d706",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "QuestionID": "63785e884683c153e4e3453b",
 *             "PostLikeDate": "2022-12-01T10:11:37.502Z"
 *          }
 *
 *      ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/post-like
 *
 */
router.get("/ver1/post-like", PostLikeControl.GetAllPostLike)


/**
 * @api {GET} /ver1/post-like/user/:UserID View all post likes of a user
 * @apiVersion 1.0.0
 * @apiName GetPostLikeByUserID
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post likes of another user
 *
 * @apiParam {string} UserID Id of a user
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like/user/:UserID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes of a user
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Likes of user 637653c86faa44c3c5dd964a",
 *     "likes": [
 *         {
 *             "_id": "63887dd9061cd89d6376d706",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "QuestionID": "63785e884683c153e4e3453b",
 *             "PostLikeDate": "2022-12-01T10:11:37.502Z"
 *         }
 *      ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/post-like/user/:UserID
 *
 */
router.get("/ver1/post-like/user/:UserID", PostLikeControl.GetPostLikeByUserID)


/**
 * @api {GET} /ver1/post-like/question/:QuestionID View all post likes of a question
 * @apiVersion 1.0.0
 * @apiName GetPostLikeByQuestionID
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post likes of a question
 *
 * @apiParam {string} QuestionID Id of a question
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like/question/:QuestionID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes of a question
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Likes on question 63785e884683c153e4e3453b",
 *     "likes": [
 *         {
 *             "_id": "63887dd9061cd89d6376d706",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "QuestionID": "63785e884683c153e4e3453b",
 *             "PostLikeDate": "2022-12-01T10:11:37.502Z"
 *         }
 *     ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/post-like/question/:QuestionID
 *
 */
router.get("/ver1/post-like/question/:QuestionID", PostLikeControl.GetPostLikeByQuestionID)


/**
 * @api {GET} /ver1/post-like/answer/:AnswerID View all post likes of an answer
 * @apiName GetPostLikeByAnswerID
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post likes of an answer
 *
 * @apiParam {string} AnswerID Id of a answer
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like/answer/:AnswerID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes of an answer
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Likes on question 63785e884683c153e4e3453b",
 *     "likes": [
 *         {
 *             "_id": "63887dd9061cd89d6376d706",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "AnswerID": "63785e884683c153e4e3453b",
 *             "PostLikeDate": "2022-12-01T10:11:37.502Z"
 *         }
 *     ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/post-like/answer/:AnswerID
 *
 */
router.get("/ver1/post-like/answer/:AnswerID", PostLikeControl.GetPostLikeByAnswerID)


/**
 * @api {GET} /ver1/post-like/comment/:CommentID View all post likes of a comment
 * @apiVersion 1.0.0
 * @apiName GetPostLikeByCommentID
 * @apiGroup Post Like
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all post likes of a comment
 *
 * @apiParam {string} CommentID Id of a comment
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/post-like/comment/:CommentID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} likes Information of all likes of a comment
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Flags on comment 6387764f05d1aa0e48681629",
 *     "likes": [
 *         {
 *             "_id": "6388e0262852d2ab527db466",
 *             "CommentID": "6387764f05d1aa0e48681629",
 *             "PostLikeDate": "2022-12-01T17:11:02.638Z",
 *             "UserID": "6368bcb887e84601d546dcc4"
 *         }
 *     ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/post-like/comment/:CommentID
 *
 */
router.get("/ver1/post-like/comment/:CommentID", PostLikeControl.GetPostLikeByCommentID)



// router.delete("/ver1/authenticate/post-like/:PostLikeId", PostLikeControl.DeletePostLike)


export default router;