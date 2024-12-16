import * as express from 'express';
import {
  StatusCodes,
} from 'http-status-codes';
import ApiError from '../abstractions/ApiError';
import Joi = require('joi');

const schemaValidationHandler = (
  schemaName: Joi.ObjectSchema<any>,
  req: express.Request,
  res: express.Response,  
  next: express.NextFunction
): any  => {
  const { error, value} = schemaName.validate(req.body , {abortEarly : false});
  
  if (error) {
        const status: number = StatusCodes.BAD_REQUEST;   
        const err = new ApiError(error.message , status , error.name);
        
        res.status(status).json(err);
  }
  console.log("api validated sucessfully");
  
  next();
};

export default schemaValidationHandler;
