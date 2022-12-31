import JsonWebToken from "jsonwebtoken";

import MongodbConfig from "../configs/MongodbConfig.js";
import * as UserManagement from "../Management/UserManagement.js"
import * as Rest from "../utils/Rest.js"

export function Validate(req, res, next) {
    if(req.method === 'OPTIONS') {
        next()
    }
    let outToken = (req.body && req.body.access_token) || req.headers['access_token'] || (req.query && req.query.access_token);

    if (outToken){
        try {
            JsonWebToken.verify(outToken, MongodbConfig.authenticationkey, function(error, decoded) {
                if(error) {
                    return Rest.SendError(res, 9, 'Verify token failed', 400, error);
                }

                UserManagement.CheckUserAvailability(decoded.UserID, decoded.UserRight, decoded.LoginName, function(errorCode, errorMessage, httpCode, errorDescription, user) {
                    if(errorCode) {
                        return Rest.SendError(res, errorCode, errorMessage, httpCode, errorDescription);
                    }

                    if(req.method === 'GET' || req.method === 'POST' || req.method === 'DELETE') {
                        req.query.accessUserId = decoded.UserID;
                        req.query.accessUserRight = decoded.UserRight;
                        req.query.accessLoginName = decoded.LoginName;
                    }
                    else {
                        req.body.accessUserId = decoded.UserID;
                        req.body.accessUserRight = decoded.UserRight;
                        req.body.accessLoginName = decoded.LoginName;
                    }
                    next();
                });
            });
        }
        catch (error) {
            return Rest.SendError(res, 9, 'Authenticate Failed', 400, error);
        }
    }
    else{
        return Rest.SendError(res, 9, 'Invalid Token', 400, "You need to log in to perform the request")
    }
}