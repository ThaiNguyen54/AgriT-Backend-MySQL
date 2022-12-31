import express from "express"
import * as UserControl from "../controllers/userControll.js"

const router = express.Router();

/**
 * @api {POST} /login Login to the system
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup User
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to login into the system
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/login
 * 
 * @apiParam {string} LoginName a string with length <= 64
 * @apiParam {String} Password a string with 4 < length < 64
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} token User's token
 * @apiSuccess {String} id id of the user
 * @apiSuccess {String} LoginName Login name of the user
 * @apiSuccess {String} UserName User name of the user
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "success": true,
 *          "token": "abc",
 *          "id": "634fc9cecbc7f9f402d76e07",
 *          "LoginName": "Thai",
 *          "UserName": "Thai"
 *      }
 *
 * @apiError  404_Not_Found User does not exist in the system
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *      {
 *          "success": false,
 *          "code": 8,
 *          "mess": "unavailable",
 *          "description": "Cannot find your account"
 *      }
 * 
 * @apiSampleRequest http://localhost:3001/login
 */
router.post('/login', UserControl.Login)

/**
 * @api {POST} /ver1/user Create a new user account
 * @apiVersion 1.0.0
 * @apiName AddUserAccount
 * @apiGroup User
 * @apiPermission Every type of user
 *
 * @apiDescription User use this api to create a new account
 *
 * @apiParam {string} UserName Name of a user
 * @apiParam {string} loginName a unique string
 * @apiParam {string} email unique email
 * @apiParam {String} password a string indicate password of the user's account
 * @apiParam {String} UserRight a string indicate permission of a user in the system
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/user
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message Something from the server
 * @apiSuccess {Object[]} data Information of created users
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "success": true,
 *      "message": "Created Successfully",
 *      "data": [
 *          {
 *              "UserName": "Trong",
 *              "LoginName": "Trong",
 *              "Password": "$2a$10$prj7fTAILea2kUhptzGAf.jJe3.asOaRP62i0ATdZRQRVb0.rTzge",
 *              "Email": "trong123@gmail.com",
 *              "_id": "63424a31bfeed9be13fd9e65"
 *          }
 *      ]
 *     }
 *
 * @apiError  409_Conflict Email Conflict
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *          "success": false,
 *          "code": 7,
 *          "message": "Email conflict",
 *          "description": "There is another account using this Email."
 *      }
 * 
 * 
 * @apiSampleRequest http://localhost:3001/ver1/user
 */
router.post("/ver1/user", UserControl.AddUserAccount)

/**
 * @api {GET} /ver1/authenticate/users Get a list of all users
 * @apiVersion 1.0.0
 * @apiName GetAllUser
 * @apiGroup User
 * @apiPermission Every type of users
 *
 * @apiDescription Get all users
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/users
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message something from the server
 * @apiSuccess {Object[]} data the list of all users' data
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "success": true,
 *      "message": "List of all users",
 *      "Users": [
 *          {
 *              "_id": "633e90e356881a06993559f3",
 *              "UserName": "Thanh Le",
 *              "Email": "ThanhVe@gmail.com",
 *              "RegisterDate": "2022-11-17T15:31:20.692Z"
 *              "Avatar": "https://demoda.vn/wp-con…-truc-bua-trung-quoc.jpg"
 *              "BackgroundImg": "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?crop=16:9
 *          },
 *       ]
 *      }
 *
 * @apiError 400_Bad_Request invalid token
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *      {
 *          "success": false,
 *          "code": 9,
 *          "message": "Invalid Token"
 *          "description": "You need to log in to perform the request"
 *      }
 * 
 * 
 * @apiSampleRequest http://localhost:3001/ver1/users
 */
router.get("/ver1/users", UserControl.GetAllUser)

/**
 * @api {GET} /ver1/users/:UserID Get a user by ID
 * @apiVersion 1.0.0
 * @apiName GetUserById
 * @apiGroup User
 * @apiPermission Every type of user
 *
 * @apiDescription Get one user
 *
 * @apiParam {string} UserID ID of a user, on params
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/users/633eb8f0069528b78658b656
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message something from the server
 * @apiSuccess {Object[]} data the list of all users' data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "success": true,
 *          "message": "Found one user with id: 633e90e356881a06993559f3",
 *          "Users": {
 *              "_id": "633e90e356881a06993559f3",
 *              "UserName": "Thanh Le",
 *              "Email": "ThanhVe@gmail.com",
 *              "RegisterDate": "2022-11-17T15:31:20.692Z"
 *              "Avatar": "https://demoda.vn/wp-con…-truc-bua-trung-quoc.jpg"
 *              "BackgroundImg": "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?crop=16:9
 *          }
 *      }
 *
 *
 * 
 * @apiSampleRequest http://localhost:3001/ver1/users/633eb8f0069528b78658b656
 */
router.get("/ver1/users/:UserID", UserControl.GetUserById)


/**
 * @api {DELETE} /ver1/authenticate/user/:UserID Delete a user by ID
 * @apiVersion 1.0.0
 * @apiName DeleteUser
 * @apiGroup User
 * @apiPermission Every type of user
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription Delete one user
 *
 * @apiParam {string} UserID ID of a user, on params
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message something from the server
 * @apiSuccess {Object[]} data id of the deleted user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "success": true,
 *          "message": "Deleted a user",
 *          "data": {
 *              "id": "63691d8b63bf541dcbe339a5"
 *           }
 *      }
 *
 * @apiError 400_Bad_Request Bad Request
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *      {
 *          "success": false,
 *          "code": 8,
 *          "message": "invalid_id",
 *          "description": "The inputted user id is in wrong format"
 *      }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656
 */
router.delete('/ver1/authenticate/user/:UserID', UserControl.DeleteUser)


/**
 * @api {PUT} ver1/authenticate/user/:UserID Update information of a user by ID
 * @apiVersion 1.0.0
 * @apiName UpdateUser
 * @apiGroup User
 * @apiPermission Every type of user
 * @apiHeader {String} access_token json web token to access to data
 *
 * @apiDescription Update one user
 *
 * @apiParam {string} UserID ID of a user, on params
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656
 *
 * @apiSuccess {Boolean} success state of the request
 * @apiSuccess {String} message something from the server
 * @apiSuccess {Object[]} data id of the updated user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "success": true,
 *          "message": "Updated a user",
 *          "data": {
 *              "id": "63691d8b63bf541dcbe339a5"
 *           }
 *      }
 *
 * @apiError 403_Forbidden Forbidden
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Forbidden
 *      {
 *          "success": false,
 *          "code": 8,
 *          "message": "invalid_user_right",
 *          "description": "you don't have permission to perform this request"
 *      }
 * 
 * @apiSampleRequest http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656
 */
router.put('/ver1/authenticate/user/:UserID', UserControl.UpdateUser)

export default router;