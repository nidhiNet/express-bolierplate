import { Application, NextFunction, Request, Response, request, response } from "express";
import BaseApi from "../BaseApi";
import { IProductList } from "./product.types";
import * as responseHandler from "../../lib/response-handler";
import schemaValidationHandler from "../../lib/schema-validation-handler";
import { productValidation } from "../../lib/apiValidation/productSchemaValidation";


/**
 * product controller
 */
export default class ProductController extends BaseApi {
    constructor(express:Application) {
        super();
        console.log("Into product controller.");        
        this.register(express);        
    }

    /**
     * register
     */
    public register(express: Application) {
        express.use('/api/product' , this.router);
        this.router.get('/list' , this.getProductList);
        this.router.post('/add' , this.validateAPI, this.addProduct)
    }

    public validateAPI (req:Request , res:Response , next:NextFunction){
        console.log("pathhh" , req.path);
        let validator ;
        switch (req.path) {
            case '/add' :
                validator = productValidation;
                break;
        
            default:
                validator = productValidation;
                break;
        }        
        return schemaValidationHandler(validator , req , res , next);
    }
    /**
     * getProductList
   */
    public getProductList(req:Request , res: Response , next: NextFunction) {
        try {
            console.log("get product list");            
            const response : IProductList = {
                list: [
                    'product1',
                    'product2',
                    'product3',
                    'product4',
                    'product5'
                ]
            };
            res.locals.data = response;
            responseHandler.send(res);
        } catch (error) {
            next(error)
        }
    }

    /**
     * addProduct
     */
    public addProduct(req:Request , res: Response , next: NextFunction) {
        try {
            console.log("request body to save the data into the db" , req.body);            
            let response = {
                "message": "Product Successfully Added." 
            };
            res.locals.data = response;
            responseHandler.send(res);
        } catch (error) {
            next(error)
        }        
    }
}