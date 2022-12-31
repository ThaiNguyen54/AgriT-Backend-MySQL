import express from 'express'
import * as TagControl from '../controllers/tagControl.js'


const router = express.Router();


/**
 * @api {POST} /ver1/authenticate/tag Add a Tag to the system
 * @apiVersion 1.0.0
 * @apiName AddTag
 * @apiGroup Tag
 * @apiPermission Administrator
 *
 * @apiDescription Administrator use this api to add a new tag to the system
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiParam {string} TagName Name of the tag
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/tag
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} tags Information of the new tags
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *    "success": true,
 *     "message": "Add tags successfully",
 *     "tags": [
 *         {
 *             "UserID": "6368bcb887e84601d546dcc4",
 *             "TagName": "web dev",
 *             "_id": "6388e2d12852d2ab527db475",
 *             "CreatedDate": "2022-12-01T17:22:25.305Z"
 *         }
 *     ]
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
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/tag
 */
router.post("/ver1/authenticate/tag", TagControl.AddTag)


/**
 * @api {GET} /ver1/tags View all tags in the system
 * @apiVersion 1.0.0
 * @apiName GetAllTag
 * @apiGroup Tag
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to view all tag in the system
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/tags
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} tags Information of the tags in the system
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "List of all tags",
 *     "tags": [
 *         {
 *             "_id": "636f11ae4ba3289a11a0a55e",
 *             "TagName": "Javscript",
 *             "CreatedDate": "2022-11-12T03:23:26.554Z",
 *             "UserID": "6369c88a8beabd9ff21e16b8"
 *         }
 *     ]
 * }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/tags
 */
router.get("/ver1/tags", TagControl.GetAllTag)





/**
 * @api {DELETE} /ver1/authenticate/tags/:TagID Delete a tag
 * @apiVersion 1.0.0
 * @apiName DeleteTag
 * @apiGroup Tag
 * @apiPermission Administrator
 *
 * @apiDescription Administrator use this api to delete a tag
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiParam {string} TagID Id of the tag
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/tags/:TagID
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data id of the deleted tags
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "message": "Deleted a tag",
 *     "data": {
 *         "id": "6388e2d12852d2ab527db475"
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
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/tags/:TagID
 */
router.delete("/ver1/authenticate/tags/:TagID", TagControl.DeleteTag)



// router.get("/ver1/tags/question/:QuestionID", TagControl.GetTagByQuestionID)
// router.get("/ver1/tags/user/:UserID", TagControl.GetTagByUserID)
// router.get("/ver1/tags/answer/:AnswerID", TagControl.GetTagByAnswerID)
// router.get("/ver1/tags/comment/:CommentID", TagControl.GetTagByCommentID)





export default router;