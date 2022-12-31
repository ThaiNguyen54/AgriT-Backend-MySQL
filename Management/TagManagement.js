import * as Utils from '../utils/utilFuncs.js'
import Tag from '../models/tag.js'
import Validator from 'validator';


export function Delete(TagID, accessUserRight, accessUserId, callback) {
    try{
        // if(!Utils.VariableTypeChecker(TagID, 'string') || !Validator.isMongoId(TagID)) {
        //     return callback(8, 'invalid_id', 400, 'Tag id is not a string');
        // }

        Tag.findOne({
            where: {
                TagID: TagID
            }
        })
            .then((tag) => {
                if(accessUserRight !== 'ADMIN') {
                    return callback (8, 'Permission error', 403, "You don't have permission to perform this action")
                }
                else if (accessUserRight === 'ADMIN'){
                    tag.destroy().on(function(error) {
                        if(error) {
                            return callback(8, 'Remove failed', 420, error);
                        }
                        return  callback(null, null, 200, null, tag);
                    });
                }
                else {
                    return callback(null, null, 200, null);
                }
            })
            .catch(function(error) {
                return callback(8, 'The tag is not exist', 420, error);
            });
    }
    catch (error) {
        return callback(8, 'Delete tag failed', 400, error)
    }
}

