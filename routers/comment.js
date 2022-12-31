import express from 'express'
import * as CommentControl from '../controllers/commentControl.js'
import * as QuestionControl from "../controllers/questionControl.js";

const router = express.Router();


/**
 * @api {POST} /ver1/authenticate/comment Post a new comment
 * @apiVersion 1.0.0
 * @apiName AddComment
 * @apiGroup Comment
 * @apiPermission Every type of user
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription User use this api to post a new comment
 *
 * @apiParam {string} AnswerID Id of the answer that is being commented
 * @apiParam {string} CContent Content of the comment
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/comment
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of the posted comment
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Your comment has been posted",
 *     "question": [
 *         {
 *             "CContent": "vbnvercvbfdggsdtretcvb",
 *             "_id": "6388d7b32852d2ab527db43b",
 *             "PostedDate": "2022-12-01T16:34:59.331Z",
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
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/comment
 */
router.post("/ver1/authenticate/comment", CommentControl.AddComment)


/**
 * @api {GET} /ver1/comments View all comments in the system
 * @apiVersion 1.0.0
 * @apiName GetAllComment
 * @apiGroup Comment
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all comments in the system
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/comments
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of all comments in the system
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "List of all comment",
 *     "comments": [
 *         {
 *             "_id": "6386dd56292fe11e92fffd93",
 *             "UserID": "637653c86faa44c3c5dd964a",
 *             "AnswerID": "63861bc856a3400057b10dcb",
 *             "CContent": "Buồn",
 *             "PostedDate": "2022-11-30T04:34:30.581Z"
 *         }
 *      ]
 * }
 * @apiSampleRequest http://localhost:3001/ver1/comments
 *
 */
router.get("/ver1/comments", CommentControl.GetAllComment)

/**
 * @api {GET} /ver1/comments/:UserID View all comments of a user
 * @apiVersion 1.0.0
 * @apiName GetCommentByUserID
 * @apiGroup Comment
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all comments of a user
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/comments/:UserID
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
 * @apiSampleRequest http://localhost:3001/ver1/comments/:UserID
 *
 */
router.get("/ver1/comments/:UserID", CommentControl.GetCommentByUserID)

/**
 * @api {DELETE} /ver1/authenticate/comments/:CommentId Delete a comment
 * @apiVersion 1.0.0
 * @apiName DeleteComment
 * @apiGroup Comment
 * @apiPermission Owner of the comment
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription User use this api to delete a comment
 *
 * @apiParam {string} CommentId Id of the comment that need to be deleted
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/comments/:CommentId
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of the deleted answer
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Deleted a comment",
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
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/comments/:CommentId
 */
router.delete("/ver1/authenticate/comments/:CommentId", CommentControl.DeleteComment)


/**
 * @api {PUT} /ver1/authenticate/comments/:CommentId Update a comment
 * @apiVersion 1.0.0
 * @apiName UpdateComment
 * @apiGroup Comment
 * @apiPermission Owner of the comment
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription User use this api to update a comment
 *
 * @apiParam {string} CommentId Id of the comment that need to be updated
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/comments/:CommentId
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of the updated answer
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Updated an comment",
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
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/comments/:CommentId
 */
router.put("/ver1/authenticate/comments/:CommentId", CommentControl.UpdateComment)

export default router;