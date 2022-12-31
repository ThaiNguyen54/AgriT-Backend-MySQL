import * as Utils from '../utils/utilFuncs.js'
import User from '../models/user.js'
import bcrypt  from "bcryptjs";
import Validator from 'validator';



export function Authenticate (LoginName, Password, callback) {
    try {
        if(!Utils.VariableTypeChecker(LoginName, 'string')){
            return callback(8, "invalid login name", 422, "Your login name is not a string", null);
        }

        if(!Utils.VariableTypeChecker(Password, 'string')){
            return callback(8, 'invalid password', 422, 'Your password is not a string', null);
        }

        User.findOne({
            where: {
                LoginName: LoginName
            },
        })
            .then((user) => {
                "use strict"
                if(user) {
                    bcrypt.compare(Password, user.Password, function (error, result) {
                        if (result === true) {
                            return callback(null, null, 200, null, user);
                        }
                        else {
                            return callback(8, 'Wrong Password', 422, "Password is not match with this account", null);
                        }
                    });
                }
                else
                {
                    return callback(8, 'unavailable', 404, "Cannot find your account", null);
                }
            })
            .catch(function(error) {
                return callback(8, 'Not found', 420, error, null);
            });
    }
    catch (error) {
        "use strict"
        return callback(8, 'authenticate failed', 400, error, null);
    }

}

export function Delete(AccessUserId, AccessUserRight, UserID, callback) {
    try{
        if(AccessUserRight !== "ADMIN" && AccessUserId !== UserID)
        {
            return callback(8, 'invalid_user_right', 403, "you don't have permission to perform this request", null);
        }
        console.log('hello')
        // if(!Utils.VariableTypeChecker(UserID, 'string') || !Validator.isMongoId(UserID)) {
        //     return callback(8, 'invalid_id', 400, 'The inputted user id is in wrong format');
        // }

        let where = {UserID: {UserID}};

        User.destroy({
            where: {
                UserID: UserID
            }})
            .then((result) => {
            if(result){
                return callback(null, null, 200, null);
            }
            else{
                return callback(8, 'Remove failed', 420, error);
            }
        })
            .catch(function(error) {
                return callback(8, 'Cannot find the user', 420, error);
            })
    } catch (error) {
        return callback(8, 'Delete failed', 400, error);
    }
}

export function Update(AccessUserID, AccessUserRight, UserID, UpdateData, callback) {
    try{
        if(AccessUserRight !== "ADMIN" && AccessUserID !== UserID){
            return callback(8, 'invalid_user_right', 403, "you don't have permission to perform this request", null);
        }

        // if(!Utils.VariableTypeChecker(UserID, 'string') || !Validator.isMongoId(UserID)) {
        //     return callback(8, 'invalid id', 400, 'User id is not a string', null);
        // }

        let query = {};
        query.UserID = UserID;
        let update = {};
        update.UpdatedBy = AccessUserID;

        if(Utils.VariableTypeChecker(UpdateData.LoginName, 'string') &&
            Validator.isAlphhanumeric(UpdateData.LoginName)) {
            update.LoginName = UpdateData.LoginName;
        }

        if(Utils.VariableTypeChecker(UpdateData.UserName, 'string')) {
            update.UserName = UpdateData.UserName;
        }

        if(Utils.VariableTypeChecker(UpdateData.Email, 'string')) {
            update.Email = UpdateData.Email
        }

        if(Utils.VariableTypeChecker(UpdateData.Avatar, 'string')) {
            update.Avatar = UpdateData.Avatar
        }

        if(Utils.VariableTypeChecker(UpdateData.BackgroundImg, 'string')) {
            update.BackgroundImg = UpdateData.BackgroundImg
        }

        let options = {
            upsert: false,
            new: true,
            setDefaultsOnInsert: true,
            projection: {password: false}
        };

        User.update(update, {
            where:{
                UserID: UserID
            }})
            .then((user) => {
                if (user) {
                    return callback(null, null, 200, null, user);
                }
                else{
                    return callback(8, 'User is Unavailable', 400, null, null);
                }
            })
            .catch(function(error) {
                return callback(8, 'Find and Update failed', 420, error, null);
            });
    }
    catch (error){
        return callback(8, 'Update failed', 400, error, null);
    }
}

export function CheckUserAvailability (accessUserId, accessUserRight, accessLoginName, callback){
    try {
        // if (!Utils.VariableTypeChecker(accessUserId, 'string')
        //     || !Validator.isMongoId(accessUserId)
        //     || !Utils.VariableTypeChecker(accessUserRight, 'string')
        //     || !Utils.VariableTypeChecker(accessLoginName, 'string')) {
        //     return callback(8, 'invalid data', 400, 'User information is not a string', null)
        // }

        User.findOne({
            where: {
                LoginName: accessLoginName, UserID: accessUserId, UserRight: accessUserRight
            }
        })
            .then((user) => {
                if(user) {
                    return callback(null, null, 200, null, user);
                }
                else {
                    return callback(8, 'User is Unavailable', 404, 'Not Found Any User', null);
                }
            })
            .catch(function(error) {
                return callback(8, 'Find User Failed', 420, error, null);
            });
    }
    catch (error) {
        return callback(8, 'Check User Availability Failed', 400, error, null);
    }
}












