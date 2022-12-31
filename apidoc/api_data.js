define({ "api": [
  {
    "type": "POST",
    "url": "/ver1/authenticate/answer",
    "title": "Post a new answer",
    "version": "1.0.0",
    "name": "AddAnswer",
    "group": "Answer",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to post a new answer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "QuestionID",
            "description": "<p>Id of the question that is being answered</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AContent",
            "description": "<p>Content of the answer</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/answer",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of the posted answer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"success\": true,\n      \"message\": \"Your answer has been posted\",\n      \"answer\": [\n          {\n              \"QuestionID\": \"6363c1ec3e42dd9f6b868f17\",\n              \"AContent\": \"xcbsdretbdxv4534542324\",\n              \"_id\": \"6388afef4df25d5fe90d6718\",\n              \"PostedDate\": \"2022-12-01T13:45:19.952Z\",\n              \"UserID\": \"6368bcb887e84601d546dcc4\"\n          }\n      ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>Authenticate failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"success\": false,\n     \"code\": 9,\n     \"message\": \"Invalid Token\",\n     \"description\": \"You need to log in to perform the request\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/answer"
      }
    ],
    "filename": "routers/answer.js",
    "groupTitle": "Answer"
  },
  {
    "type": "DELETE",
    "url": "/ver1/authenticate/answers/:AnswerId",
    "title": "Delete an answer",
    "version": "1.0.0",
    "name": "DeleteAnswer",
    "group": "Answer",
    "permission": [
      {
        "name": "Owner of the answer"
      }
    ],
    "description": "<p>User use this api to delete an answer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AnswerId",
            "description": "<p>Id of the answer the need to be deleted</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/answers/:AnswerId",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of the deleted answer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Deleted a answer\",\n    \"data\": {\n        \"id\": \"63882a1ca00121e3f0f8aa3e\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Permission error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"You have no permission to perform this request\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/answers/:AnswerId"
      }
    ],
    "filename": "routers/answer.js",
    "groupTitle": "Answer"
  },
  {
    "type": "GET",
    "url": "/ver1/answers",
    "title": "View all answers in the system",
    "version": "1.0.0",
    "name": "GetAllAnswer",
    "group": "Answer",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all answers in the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/answers",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of all answers in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"List of all answers\",\n    \"questions\": [\n        {\n            \"_id\": \"63861bc856a3400057b10dcb\",\n            \"UserID\": \"637653c86faa44c3c5dd964a\",\n            \"QuestionID\": \"6382fdce304737db6dddd97f\",\n            \"AContent\": \"ae ơi\",\n            \"PostedDate\": \"2022-11-29T14:48:40.265Z\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/answers"
      }
    ],
    "filename": "routers/answer.js",
    "groupTitle": "Answer"
  },
  {
    "type": "GET",
    "url": "/ver1/answers/:UserID",
    "title": "View all answers of a user",
    "version": "1.0.0",
    "name": "GetAnswerByUserID",
    "group": "Answer",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all answers of a user</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/answers/:UserID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of all answers of a user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Answers of user 6368bcb887e84601d546dcc4\",\n    \"answers\": [\n        {\n            \"_id\": \"63880cd9a00121e3f0f8a88d\",\n            \"UserID\": \"6368bcb887e84601d546dcc4\",\n            \"QuestionID\": \"6378566e4683c153e4e34534\",\n            \"AContent\": \"ây do\",\n            \"PostedDate\": \"2022-12-01T02:09:29.517Z\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/answers/:UserID"
      }
    ],
    "filename": "routers/answer.js",
    "groupTitle": "Answer"
  },
  {
    "type": "PUT",
    "url": "/ver1/authenticate/answers/:AnswerId",
    "title": "Update an answer",
    "version": "1.0.0",
    "name": "UpdateAnswer",
    "group": "Answer",
    "permission": [
      {
        "name": "Owner of the answer"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to update an answer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AnswerId",
            "description": "<p>Id of the answer the need to be updated</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/answers/:AnswerId",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of the updated answer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Updated an answer\",\n    \"data\": {\n        \"id\": \"63882a21a00121e3f0f8aa42\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Permission error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"You have no permission to perform this request\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/answers/:AnswerId"
      }
    ],
    "filename": "routers/answer.js",
    "groupTitle": "Answer"
  },
  {
    "type": "POST",
    "url": "/ver1/authenticate/comment",
    "title": "Post a new comment",
    "version": "1.0.0",
    "name": "AddComment",
    "group": "Comment",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to post a new comment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AnswerID",
            "description": "<p>Id of the answer that is being commented</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CContent",
            "description": "<p>Content of the comment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/comment",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of the posted comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Your comment has been posted\",\n    \"question\": [\n        {\n            \"CContent\": \"vbnvercvbfdggsdtretcvb\",\n            \"_id\": \"6388d7b32852d2ab527db43b\",\n            \"PostedDate\": \"2022-12-01T16:34:59.331Z\",\n            \"UserID\": \"6368bcb887e84601d546dcc4\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>Authenticate failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"success\": false,\n     \"code\": 9,\n     \"message\": \"Invalid Token\",\n     \"description\": \"You need to log in to perform the request\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/comment"
      }
    ],
    "filename": "routers/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "DELETE",
    "url": "/ver1/authenticate/comments/:CommentId",
    "title": "Delete a comment",
    "version": "1.0.0",
    "name": "DeleteComment",
    "group": "Comment",
    "permission": [
      {
        "name": "Owner of the comment"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to delete a comment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CommentId",
            "description": "<p>Id of the comment that need to be deleted</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/comments/:CommentId",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of the deleted answer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Deleted a comment\",\n    \"data\": {\n        \"id\": \"63882a1ca00121e3f0f8aa3e\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Permission error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"You have no permission to perform this request\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/comments/:CommentId"
      }
    ],
    "filename": "routers/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "GET",
    "url": "/ver1/comments",
    "title": "View all comments in the system",
    "version": "1.0.0",
    "name": "GetAllComment",
    "group": "Comment",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all comments in the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/comments",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of all comments in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"List of all comment\",\n    \"comments\": [\n        {\n            \"_id\": \"6386dd56292fe11e92fffd93\",\n            \"UserID\": \"637653c86faa44c3c5dd964a\",\n            \"AnswerID\": \"63861bc856a3400057b10dcb\",\n            \"CContent\": \"Buồn\",\n            \"PostedDate\": \"2022-11-30T04:34:30.581Z\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/comments"
      }
    ],
    "filename": "routers/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "GET",
    "url": "/ver1/comments/:UserID",
    "title": "View all comments of a user",
    "version": "1.0.0",
    "name": "GetCommentByUserID",
    "group": "Comment",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all comments of a user</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/comments/:UserID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of all answers of a user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Answers of user 6368bcb887e84601d546dcc4\",\n    \"answers\": [\n        {\n            \"_id\": \"63880cd9a00121e3f0f8a88d\",\n            \"UserID\": \"6368bcb887e84601d546dcc4\",\n            \"QuestionID\": \"6378566e4683c153e4e34534\",\n            \"AContent\": \"ây do\",\n            \"PostedDate\": \"2022-12-01T02:09:29.517Z\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/comments/:UserID"
      }
    ],
    "filename": "routers/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "PUT",
    "url": "/ver1/authenticate/comments/:CommentId",
    "title": "Update a comment",
    "version": "1.0.0",
    "name": "UpdateComment",
    "group": "Comment",
    "permission": [
      {
        "name": "Owner of the comment"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to update a comment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CommentId",
            "description": "<p>Id of the comment that need to be updated</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/comments/:CommentId",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of the updated answer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Updated an comment\",\n    \"data\": {\n        \"id\": \"63882a21a00121e3f0f8aa42\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Permission error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"You have no permission to perform this request\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/comments/:CommentId"
      }
    ],
    "filename": "routers/comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "POST",
    "url": "/ver1/authenticate/flag",
    "title": "Add a flag to a comment, a question or an answer",
    "version": "1.0.0",
    "name": "AddFlag",
    "group": "Flag",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to flag a comment, a question or an answer</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CommentID",
            "description": "<p>Id of the comment that is being flagged</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AnswerID",
            "description": "<p>Id of the answer that is being flagged</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "QuestionID",
            "description": "<p>Id of the question that is being flagged</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FlagName",
            "description": "<p>Name of the flag</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/flag",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "flag",
            "description": "<p>Information of the flag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Flag successfully\",\n    \"flag\": [\n        {\n            \"CommentID\": \"636e57cd711b869f157330b2\",\n            \"FlagName\": \"asdfxcvzxcvzxcv\",\n            \"_id\": \"6388db952852d2ab527db441\",\n            \"FlagDate\": \"2022-12-01T16:51:33.128Z\",\n            \"UserID\": \"6368bcb887e84601d546dcc4\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>Authenticate failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"success\": false,\n     \"code\": 9,\n     \"message\": \"Invalid Token\",\n     \"description\": \"You need to log in to perform the request\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/flag"
      }
    ],
    "filename": "routers/flag.js",
    "groupTitle": "Flag"
  },
  {
    "type": "DELETE",
    "url": "/ver1/authenticate/flags/:FlagID",
    "title": "Delete a flag of a comment, a question or an answer",
    "version": "1.0.0",
    "name": "DeleteFlag",
    "group": "Flag",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to un-flag a comment, a question or an answer</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FlagID",
            "description": "<p>Id of the flag</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/flags/:FlagID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>id of the flag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Deleted a flag\",\n    \"data\": {\n        \"id\": \"6388db952852d2ab527db441\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>Authenticate failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"success\": false,\n     \"code\": 9,\n     \"message\": \"Invalid Token\",\n     \"description\": \"You need to log in to perform the request\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/flags/:FlagID"
      }
    ],
    "filename": "routers/flag.js",
    "groupTitle": "Flag"
  },
  {
    "type": "GET",
    "url": "/ver1/flags",
    "title": "View all flags in the system",
    "version": "1.0.0",
    "name": "GetAllFlag",
    "group": "Flag",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all flags in the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/flags",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of all flags in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"List of all flags\",\n    \"flags\": [\n        {\n            \"_id\": \"636e71cdbe6e0ec9de6a022a\",\n            \"QuestionID\": \"6363c1ec3e42dd9f6b868f17\",\n            \"FlagName\": \"Ambiguous content\",\n            \"FlagDate\": \"2022-11-11T16:01:17.613Z\",\n            \"UserID\": \"6369c88a8beabd9ff21e16b8\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/flags"
      }
    ],
    "filename": "routers/flag.js",
    "groupTitle": "Flag"
  },
  {
    "type": "GET",
    "url": "/ver1/flags/answer/:AnswerID",
    "title": "View all flags of an answer",
    "version": "1.0.0",
    "name": "GetFlagByAnswerID",
    "group": "Flag",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all flags of an answer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AnswerID",
            "description": "<p>Id of the answer</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/flags/answer/:AnswerID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "flags",
            "description": "<p>Information of all flags of an answer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"Flags on answer 636e580f970f1debe3b66394\",\n    \"flags\": [\n        {\n            \"_id\": \"636e7213be6e0ec9de6a022d\",\n            \"AnswerID\": \"636e580f970f1debe3b66394\",\n            \"FlagName\": \"Useful answer\",\n            \"FlagDate\": \"2022-11-11T16:02:27.811Z\",\n            \"UserID\": \"6369c88a8beabd9ff21e16b8\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/flags/answer/:AnswerID"
      }
    ],
    "filename": "routers/flag.js",
    "groupTitle": "Flag"
  },
  {
    "type": "GET",
    "url": "/ver1/flags/comment/:CommentID",
    "title": "View all flags of a comment",
    "version": "1.0.0",
    "name": "GetFlagByCommentID",
    "group": "Flag",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all flags of a comment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CommentID",
            "description": "<p>Id of the comment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/flags/comment/:CommentID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "flags",
            "description": "<p>Information of all flags of a comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"Flags on comment 636e57cd711b869f157330b2\",\n    \"flags\": [\n        {\n            \"_id\": \"636e794254b22499baf5e23e\",\n            \"CommentID\": \"636e57cd711b869f157330b2\",\n            \"FlagName\": \"Spam\",\n            \"FlagDate\": \"2022-11-11T16:33:06.785Z\",\n            \"UserID\": \"6369c88a8beabd9ff21e16b8\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/flags/comment/:CommentID"
      }
    ],
    "filename": "routers/flag.js",
    "groupTitle": "Flag"
  },
  {
    "type": "GET",
    "url": "/ver1/flags/question/:QuestionID",
    "title": "View all flags of a question",
    "version": "1.0.0",
    "name": "GetFlagByQuestionID",
    "group": "Flag",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all flags of a question</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "QuestionID",
            "description": "<p>Id of the question</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/flags/question/:QuestionID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "flags",
            "description": "<p>Information of all flags of a question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"Flags on question 6363c1ec3e42dd9f6b868f17\",\n    \"flags\": [\n        {\n            \"_id\": \"636e71cdbe6e0ec9de6a022a\",\n            \"QuestionID\": \"6363c1ec3e42dd9f6b868f17\",\n            \"FlagName\": \"Ambiguous content\",\n            \"FlagDate\": \"2022-11-11T16:01:17.613Z\",\n            \"UserID\": \"6369c88a8beabd9ff21e16b8\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/flags/question/:QuestionID"
      }
    ],
    "filename": "routers/flag.js",
    "groupTitle": "Flag"
  },
  {
    "type": "GET",
    "url": "/ver1/flags/user/:UserID",
    "title": "View all flags of a user",
    "version": "1.0.0",
    "name": "GetFlagByUserID",
    "group": "Flag",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all flags of a user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>Id of the user</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/flags/user/:UserID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "flags",
            "description": "<p>Information of all flags of a user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"Flags of user 6369c88a8beabd9ff21e16b8\",\n    \"flags\": [\n        {\n            \"_id\": \"636e71cdbe6e0ec9de6a022a\",\n            \"QuestionID\": \"6363c1ec3e42dd9f6b868f17\",\n            \"FlagName\": \"Ambiguous content\",\n            \"FlagDate\": \"2022-11-11T16:01:17.613Z\",\n            \"UserID\": \"6369c88a8beabd9ff21e16b8\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/flags/user/:UserID"
      }
    ],
    "filename": "routers/flag.js",
    "groupTitle": "Flag"
  },
  {
    "type": "POST",
    "url": "/ver1/authenticate/post-like",
    "title": "Like a post (question, comment or answer). If already liked, this api will delete the like",
    "version": "1.0.0",
    "name": "AddPostLike",
    "group": "Post_Like",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CommentID",
            "description": "<p>Id of the comment that is being liked</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AnswerID",
            "description": "<p>Id of the answer that is being liked</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "QuestionID",
            "description": "<p>Id of the question that is being liked</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to like or unlike a post (question, comment or answer)</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/post-like",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>the id of the deleted question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Like successfully\",\n  \"like\": [\n      {\n          \"CommentID\": \"63880cdfa00121e3f0f8a891\",\n          \"_id\": \"638f55012891d4b3ed391bc7\",\n          \"PostLikeDate\": \"2022-12-06T14:43:13.915Z\",\n          \"UserID\": \"63424a31bfeed9be13fd9e65\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>User need to login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad_Request\n{\n     \"success\": false,\n     \"code\": 9,\n     \"message\": \"Invalid Token\",\n     \"description\": \"You need to log in to perform the request\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/post-like"
      }
    ],
    "filename": "routers/postLike.js",
    "groupTitle": "Post_Like"
  },
  {
    "type": "GET",
    "url": "/ver1/post-like",
    "title": "View all likes in the system",
    "version": "1.0.0",
    "name": "GetAllPostLike",
    "group": "Post_Like",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all post like in the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/post-like",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Information of all likes in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"List of all likes\",\n    \"likes\": [\n        {\n            \"_id\": \"63887dd9061cd89d6376d706\",\n            \"UserID\": \"637653c86faa44c3c5dd964a\",\n            \"QuestionID\": \"63785e884683c153e4e3453b\",\n            \"PostLikeDate\": \"2022-12-01T10:11:37.502Z\"\n         }\n\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/post-like"
      }
    ],
    "filename": "routers/postLike.js",
    "groupTitle": "Post_Like"
  },
  {
    "type": "GET",
    "url": "/ver1/post-like/answer/:AnswerID",
    "title": "View all post likes of an answer",
    "name": "GetPostLikeByAnswerID",
    "group": "Post_Like",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all post likes of an answer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AnswerID",
            "description": "<p>Id of a answer</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/post-like/answer/:AnswerID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Information of all likes of an answer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"Likes on question 63785e884683c153e4e3453b\",\n    \"likes\": [\n        {\n            \"_id\": \"63887dd9061cd89d6376d706\",\n            \"UserID\": \"637653c86faa44c3c5dd964a\",\n            \"AnswerID\": \"63785e884683c153e4e3453b\",\n            \"PostLikeDate\": \"2022-12-01T10:11:37.502Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/post-like/answer/:AnswerID"
      }
    ],
    "version": "0.0.0",
    "filename": "routers/postLike.js",
    "groupTitle": "Post_Like"
  },
  {
    "type": "GET",
    "url": "/ver1/post-like/comment/:CommentID",
    "title": "View all post likes of a comment",
    "version": "1.0.0",
    "name": "GetPostLikeByCommentID",
    "group": "Post_Like",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all post likes of a comment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "CommentID",
            "description": "<p>Id of a comment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/post-like/comment/:CommentID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Information of all likes of a comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"Flags on comment 6387764f05d1aa0e48681629\",\n    \"likes\": [\n        {\n            \"_id\": \"6388e0262852d2ab527db466\",\n            \"CommentID\": \"6387764f05d1aa0e48681629\",\n            \"PostLikeDate\": \"2022-12-01T17:11:02.638Z\",\n            \"UserID\": \"6368bcb887e84601d546dcc4\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/post-like/comment/:CommentID"
      }
    ],
    "filename": "routers/postLike.js",
    "groupTitle": "Post_Like"
  },
  {
    "type": "GET",
    "url": "/ver1/post-like/question/:QuestionID",
    "title": "View all post likes of a question",
    "version": "1.0.0",
    "name": "GetPostLikeByQuestionID",
    "group": "Post_Like",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all post likes of a question</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "QuestionID",
            "description": "<p>Id of a question</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/post-like/question/:QuestionID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Information of all likes of a question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"Likes on question 63785e884683c153e4e3453b\",\n    \"likes\": [\n        {\n            \"_id\": \"63887dd9061cd89d6376d706\",\n            \"UserID\": \"637653c86faa44c3c5dd964a\",\n            \"QuestionID\": \"63785e884683c153e4e3453b\",\n            \"PostLikeDate\": \"2022-12-01T10:11:37.502Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/post-like/question/:QuestionID"
      }
    ],
    "filename": "routers/postLike.js",
    "groupTitle": "Post_Like"
  },
  {
    "type": "GET",
    "url": "/ver1/post-like/user/:UserID",
    "title": "View all post likes of a user",
    "version": "1.0.0",
    "name": "GetPostLikeByUserID",
    "group": "Post_Like",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all post likes of another user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>Id of a user</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/post-like/user/:UserID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "likes",
            "description": "<p>Information of all likes of a user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"Likes of user 637653c86faa44c3c5dd964a\",\n    \"likes\": [\n        {\n            \"_id\": \"63887dd9061cd89d6376d706\",\n            \"UserID\": \"637653c86faa44c3c5dd964a\",\n            \"QuestionID\": \"63785e884683c153e4e3453b\",\n            \"PostLikeDate\": \"2022-12-01T10:11:37.502Z\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/post-like/user/:UserID"
      }
    ],
    "filename": "routers/postLike.js",
    "groupTitle": "Post_Like"
  },
  {
    "type": "POST",
    "url": "/ver1/authenticate/question",
    "title": "Post a new question",
    "version": "1.0.0",
    "name": "AddQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to post a question to the system</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Title",
            "description": "<p>Title of the question</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "QContent",
            "description": "<p>Content of the question</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "TagName",
            "description": "<p>Tag name of the question</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/question",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "question",
            "description": "<p>the information of the posted question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\"success\": true,\n    \"message\": \"Your question has been posted\",\n    \"question\": [\n        {\n            \"Title\": \"Web development\",\n            \"QContent\": \"I want to become a fullstack developer. Where to start?\",\n            \"_id\": \"636a183466f6a1bf9959148f\",\n            \"PostedDate\": \"2022-11-08T08:49:56.062Z\",\n            \"UserID\": \"6369c88a8beabd9ff21e16b8\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>User need to log in into the system to post a question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n    \"success\": false,\n    \"code\": 9,\n    \"message\": \"Invalid Token\",\n    \"description\": \"You need to log in to perform the request\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/question"
      }
    ],
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "DELETE",
    "url": "/ver1/authenticate/questions/:QuestionId",
    "title": "Delete a question",
    "version": "1.0.0",
    "name": "DeleteQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to delete a question</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/questions/123",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>the id of the deleted question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Deleted a question\",\n    \"data\": {\n        \"id\": \"636a1f99b271b3895b3d2853\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden Either administrator or owner can delete this question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"You have no permission to perform this request\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/questions/:QuestionId"
      }
    ],
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "GET",
    "url": "/ver1/questions",
    "title": "Get all questions",
    "version": "1.0.0",
    "name": "GetAllQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>user use this api to get all questions in the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/questions",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "question",
            "description": "<p>the information of all questions in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"List of all questions\",\n    \"questions\": [\n        {\n            \"_id\": \"6363c1ec3e42dd9f6b868f17\",\n            \"QContent\": \"How to learn Python??\",\n            \"PostedDate\": \"2022-11-03T13:28:12.684Z\",\n            \"UserID\": \"634fc9cecbc7f9f402d76e07\",\n            \"Title\": \"Python\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/questions"
      }
    ],
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "GET",
    "url": "/ver1/questionsbytag",
    "title": "Search questions by tag",
    "version": "1.0.0",
    "name": "GetQuestionByTag",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to search question by tag</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TagName",
            "description": "<p>Name of a tag</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/questionsbytag",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "questions",
            "description": "<p>questions related to input tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Found Question(s) with tag Trồng trọt\",\n    \"questions\": [\n       {\n         \"_id\": \"63881628a00121e3f0f8a961\",\n         \"Title\": \"Trồng cây\",\n          \"TagName\": \"Trồng trọt\",\n          \"QContent\": \"cây thơm ngon bổ dưỡng, hít vào là phê, lê thê tới nóc\",\n          \"PostedDate\": \"2022-12-01T02:49:12.501Z\",\n          \"UserID\": \"63424a31bfeed9be13fd9e65\"\n        }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/questionsbytag"
      }
    ],
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "GET",
    "url": "/ver1/questions/:UserID",
    "title": "Get all questions of a user",
    "version": "1.0.0",
    "name": "GetQuestionByUserID",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to get all questions of other users</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/questions/123",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "question",
            "description": "<p>the information of all questions of a user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Questions of user 634fc9cecbc7f9f402d76e07\",\n    \"questions\": [\n        {\n            \"_id\": \"6363c1ec3e42dd9f6b868f17\",\n            \"QContent\": \"How to learn Python??\",\n            \"PostedDate\": \"2022-11-03T13:28:12.684Z\",\n            \"UserID\": \"634fc9cecbc7f9f402d76e07\",\n            \"Title\": \"Python\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/questions/:UserID"
      }
    ],
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "PUT",
    "url": "/ver1/authenticate/questions/:QuestionId",
    "title": "Update a question",
    "version": "1.0.0",
    "name": "UpdateQuestion",
    "group": "Question",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>User use this api to update a question</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "QuestionId",
            "description": "<p>Id of the question that need to be updated</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/questions/123",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>the id of the updated question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Updated a question\",\n    \"data\": {\n        \"id\": \"6363c1ec3e42dd9f6b868f17\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Either administrator or owner can delete this question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"Only the owner can edit the question\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/questions/:QuestionId"
      }
    ],
    "filename": "routers/question.js",
    "groupTitle": "Question"
  },
  {
    "type": "POST",
    "url": "/ver1/authenticate/tag",
    "title": "Add a Tag to the system",
    "version": "1.0.0",
    "name": "AddTag",
    "group": "Tag",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "description": "<p>Administrator use this api to add a new tag to the system</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "TagName",
            "description": "<p>Name of the tag</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/tag",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Information of the new tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n    \"message\": \"Add tags successfully\",\n    \"tags\": [\n        {\n            \"UserID\": \"6368bcb887e84601d546dcc4\",\n            \"TagName\": \"web dev\",\n            \"_id\": \"6388e2d12852d2ab527db475\",\n            \"CreatedDate\": \"2022-12-01T17:22:25.305Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Permission error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"You have no permission to perform this request\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/tag"
      }
    ],
    "filename": "routers/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "DELETE",
    "url": "/ver1/authenticate/tags/:TagID",
    "title": "Delete a tag",
    "version": "1.0.0",
    "name": "DeleteTag",
    "group": "Tag",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "description": "<p>Administrator use this api to delete a tag</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "TagID",
            "description": "<p>Id of the tag</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/tags/:TagID",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>id of the deleted tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Deleted a tag\",\n    \"data\": {\n        \"id\": \"6388e2d12852d2ab527db475\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Permission error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Forbidden\n{\n    \"success\": false,\n    \"code\": 8,\n    \"message\": \"Permission error\",\n    \"description\": \"You have no permission to perform this request\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/tags/:TagID"
      }
    ],
    "filename": "routers/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "GET",
    "url": "/ver1/tags",
    "title": "View all tags in the system",
    "version": "1.0.0",
    "name": "GetAllTag",
    "group": "Tag",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to view all tag in the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/tags",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Information of the tags in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"List of all tags\",\n    \"tags\": [\n        {\n            \"_id\": \"636f11ae4ba3289a11a0a55e\",\n            \"TagName\": \"Javscript\",\n            \"CreatedDate\": \"2022-11-12T03:23:26.554Z\",\n            \"UserID\": \"6369c88a8beabd9ff21e16b8\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/tags"
      }
    ],
    "filename": "routers/tag.js",
    "groupTitle": "Tag"
  },
  {
    "type": "POST",
    "url": "/ver1/user",
    "title": "Create a new user account",
    "version": "1.0.0",
    "name": "AddUserAccount",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to create a new account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>Name of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loginName",
            "description": "<p>a unique string</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>unique email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>a string indicate password of the user's account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserRight",
            "description": "<p>a string indicate permission of a user in the system</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/user",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Information of created users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Created Successfully\",\n  \"data\": [\n      {\n          \"UserName\": \"Trong\",\n          \"LoginName\": \"Trong\",\n          \"Password\": \"$2a$10$prj7fTAILea2kUhptzGAf.jJe3.asOaRP62i0ATdZRQRVb0.rTzge\",\n          \"Email\": \"trong123@gmail.com\",\n          \"_id\": \"63424a31bfeed9be13fd9e65\"\n      }\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409_Conflict",
            "description": "<p>Email Conflict</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n     \"success\": false,\n     \"code\": 7,\n     \"message\": \"Email conflict\",\n     \"description\": \"There is another account using this Email.\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/user"
      }
    ],
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/ver1/authenticate/user/:UserID",
    "title": "Delete a user by ID",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>Delete one user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>ID of a user, on params</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>id of the deleted user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"success\": true,\n     \"message\": \"Deleted a user\",\n     \"data\": {\n         \"id\": \"63691d8b63bf541dcbe339a5\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>Bad Request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"success\": false,\n     \"code\": 8,\n     \"message\": \"invalid_id\",\n     \"description\": \"The inputted user id is in wrong format\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656"
      }
    ],
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/ver1/authenticate/users",
    "title": "Get a list of all users",
    "version": "1.0.0",
    "name": "GetAllUser",
    "group": "User",
    "permission": [
      {
        "name": "Every type of users"
      }
    ],
    "description": "<p>Get all users</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/users",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>the list of all users' data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"List of all users\",\n \"Users\": [\n     {\n         \"_id\": \"633e90e356881a06993559f3\",\n         \"UserName\": \"Thanh Le\",\n         \"Email\": \"ThanhVe@gmail.com\",\n         \"RegisterDate\": \"2022-11-17T15:31:20.692Z\"\n         \"Avatar\": \"https://demoda.vn/wp-con…-truc-bua-trung-quoc.jpg\"\n         \"BackgroundImg\": \"https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?crop=16:9\n     },\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>invalid token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"success\": false,\n     \"code\": 9,\n     \"message\": \"Invalid Token\"\n     \"description\": \"You need to log in to perform the request\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/users"
      }
    ],
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/ver1/users/:UserID",
    "title": "Get a user by ID",
    "version": "1.0.0",
    "name": "GetUserById",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>Get one user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>ID of a user, on params</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/users/633eb8f0069528b78658b656",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>the list of all users' data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"success\": true,\n     \"message\": \"Found one user with id: 633e90e356881a06993559f3\",\n     \"Users\": {\n         \"_id\": \"633e90e356881a06993559f3\",\n         \"UserName\": \"Thanh Le\",\n         \"Email\": \"ThanhVe@gmail.com\",\n         \"RegisterDate\": \"2022-11-17T15:31:20.692Z\"\n         \"Avatar\": \"https://demoda.vn/wp-con…-truc-bua-trung-quoc.jpg\"\n         \"BackgroundImg\": \"https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?crop=16:9\n     }\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/users/633eb8f0069528b78658b656"
      }
    ],
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "Login to the system",
    "version": "1.0.0",
    "name": "Login",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "description": "<p>User use this api to login into the system</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/login",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "LoginName",
            "description": "<p>a string with length &lt;= 64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>a string with 4 &lt; length &lt; 64</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LoginName",
            "description": "<p>Login name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserName",
            "description": "<p>User name of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"token\": \"abc\",\n    \"id\": \"634fc9cecbc7f9f402d76e07\",\n    \"LoginName\": \"Thai\",\n    \"UserName\": \"Thai\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404_Not_Found",
            "description": "<p>User does not exist in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n     \"success\": false,\n     \"code\": 8,\n     \"mess\": \"unavailable\",\n     \"description\": \"Cannot find your account\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/login"
      }
    ],
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "ver1/authenticate/user/:UserID",
    "title": "Update information of a user by ID",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>Update one user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>ID of a user, on params</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>id of the updated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"success\": true,\n     \"message\": \"Updated a user\",\n     \"data\": {\n         \"id\": \"63691d8b63bf541dcbe339a5\"\n      }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403_Forbidden",
            "description": "<p>Forbidden</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n {\n     \"success\": false,\n     \"code\": 8,\n     \"message\": \"invalid_user_right\",\n     \"description\": \"you don't have permission to perform this request\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/ver1/authenticate/user/633eb8f0069528b78658b656"
      }
    ],
    "filename": "routers/user.js",
    "groupTitle": "User"
  }
] });
