import users from "../models/user.js"
import bcrypt from 'bcryptjs';
import * as UserManagement from '../Management/UserManagement.js';
import JsonWebToken from 'jsonwebtoken';
import * as Rest from '../utils/Rest.js';
import MongoConfig from '../configs/MongodbConfig.js'
import Validator from 'validator';

export const AddUserAccount = async(req, res) =>{

    try{
        // Hash Password
        const hashedPassowrd = await bcrypt.hash(req.body.Password, 10);

        let newUser = {};
        newUser = req.body;
        newUser.Password = hashedPassowrd;

        const CheckUserData = await users.findOne({
            where: {
                Email: req.body.Email
            }
        });
        if(CheckUserData){
            return (
                res.status(409).send({
                    success: false,
                    code: 7,
                    message: "Email conflict",
                    description: "There is another account using this Email."

                })
            )

        }
        else{
            const UserInsertData = await users.create(newUser);
            if(!UserInsertData){
                throw new Error("Can not create your account");
            }else{
                return (
                    res.json({
                        success: true,
                        message: "Created your account successfully",
                        User: UserInsertData,
                    })
                )
            }
        }
    }catch(err){
        res.status(404).send();
    }
}

export function GetAllUser(req, res){
    let accessUserId = req.query.accessUserId || '';
    let accessUserRight = req.query.accessUserRight || '';

    users.findAll({
        attributes:  ['UserID', 'UserName', 'Avatar', 'BackgroundImg', 'Email', 'RegisterDate']
    })
        .then(allUsers => {
            return res.status(200).json({
                success: true,
                message: 'List of all users',
                Users: allUsers,
            });
        })
        .catch((err) => {
            return(
                res.status(500).json({
                    success: false,
                    code: 8,
                    message: 'Can not get users. Please try again.',
                    description: err.message
                })
            )

        });
}

export function GetUserById(req, res){
    let accessUserId = req.query.accessUserId || '';
    let accessUserRight = req.query.accessUserRight || '';
    const id = parseInt(req.params.UserID);

    if(!Number.isInteger(id)) {
        return res.status(400).json({
            "success": false,
            "code": 8,
            "message": "Invalid user id",
            "description": "The inputted user id is in wrong format"
        })
    }

    // if (accessUserId != id) {
    //     return res.status(403).json({
    //         "success": false,
    //         "code": 9,
    //         "message": "Not available",
    //         "description": "This content is not available"
    //     })
    // }


    users.findAll({
        where:{
            UserID: id
        },
        attributes:  ['UserID', 'UserName', 'Avatar', 'BackgroundImg', 'Email', 'RegisterDate']
    })
        .then((user) => {
            return res.status(200).json({
                success: true,
                message: `Found one user with id: ${id}`,
                users: user,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                code: 8,
                message: 'Not Found.',
                description: err.message,
            });
        });
}

export function Login (req, res) {
    let LoginName = req.body.LoginName || '';
    let Password = req.body.Password || '';
    UserManagement.Authenticate(LoginName, Password, function (ErrorCode, ErrorMess, httpCode, ErrorDescription, user) {
        if (ErrorCode) {
            return Rest.SendError(res, ErrorCode, ErrorMess, httpCode, ErrorDescription);
        }

        JsonWebToken.sign({UserID: user.UserID, LoginName: user.LoginName, Email: user.Email, UserRight: user.UserRight}, MongoConfig.authenticationkey, {expiresIn: '10 days'}, function(error, token) {
            if(error) {
                return Rest.SendError(res, 1, 'Creating Token Failed', 400, error);
            }
            else{
                return Rest.SendSuccessToken(res, token, user);
            }
        });
    });
}

export function DeleteUser (req, res) {
    let UserID = req.params.UserID || '';
    let accessUserId = req.query.accessUserId || '';
    let accessUserRight = req.query.accessUserRight || '';
    UserManagement.Delete(accessUserId, accessUserRight, UserID, function (errorCode, errorMessage, httpCode, errorDescription) {
        if (errorCode) {
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let ResultData = {};
        ResultData.id = UserID;
        return Rest.SendSuccess(res, ResultData, httpCode, "Deleted a user");
    });
}

export function UpdateUser (req, res){

    let AccessUserId = req.body.accessUserId || '';
    let AccessUserRight = req.body.accessUserRight || '';


    let id = req.params.UserID || '';
    let data = req.body || '';

    UserManagement.Update(AccessUserId, AccessUserRight, id, data, function(errorCode, errorMessage, httpCode, errorDescription, result){
        if(errorCode){
            return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
        }
        let outResultData = {};
        outResultData.id = result._id;
        return Rest.SendSuccess(res, outResultData, httpCode, "Updated a user");
    });

}


