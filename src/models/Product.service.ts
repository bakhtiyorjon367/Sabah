import Errors from "../libs/Errors";
import { Product, ProductInput, ProductInquiry } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { HttpCode } from "../libs/Errors";
import { Message } from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { T } from "../libs/types/common";
import { ProductStatus, ProductType } from "../libs/enums/product.enum";
import {ObjectId} from "mongoose";
import ViewService from "./View.service";
import { ViewInput } from "../libs/types/view";
import { ViewGroup } from "../libs/enums/view.enum";

class ProductService{
  private readonly productModel;
  public viewService;
  constructor(){
    this.productModel= ProductModel; 
    this.viewService = new ViewService();
  }


  /** SPA ________________________________________________________________*/
  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {

    const match: T ={productStatus: ProductStatus.PROCESS};
  
    if(inquiry.productType) 
      match.productType = inquiry.productType;
    if(inquiry.search){
      match.productName = { $regex: new RegExp(inquiry.search, "i") };
    }
    if(inquiry.productType === ProductType.BEAUTYUNDER20$){
      delete(match.productType);
      match.productPrice = {$gte: 0, $lte:20 }
    } 
    const sort: T =
      inquiry.order === "productPrice" 
      ? {[inquiry.order]: 1} 
      : {[inquiry.order]: -1};
      
    const result = await this.productModel
            .aggregate([
              { $match: match },
              { $sort:  sort  },
              { $skip:  (inquiry.page * 1 - 1) * inquiry.limit },
              { $limit: inquiry.limit * 1 },
            ]).exec();
      
    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }//_______________________________________________________________________________________________________________________


  public async getProduct(memberId:ObjectId | null, id:string):Promise<Product>{
    const productId = shapeIntoMongooseObjectId(id);

    let result = await this.productModel.findOne({_id: productId, productStatus: ProductStatus.PROCESS}).exec();

    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    
    if(memberId){

      //CHECK EXISTANCE
      const input: ViewInput = {
        memberId:  memberId,
        viewRefId: productId,
        viewGroup: ViewGroup.PRODUCT,
      };

      const existView = await this.viewService.checkViewExistence(input);
      console.log("existView: ", !!existView);
      if(!existView){

        //INSERT VIEW
        await this.viewService.insertMemberView(input);

        //INCREASE COUNTS
        result = await this.productModel
            .findByIdAndUpdate(
              productId, 
              { $inc: { productView: +1 } }, 
              { new:true }
            )
              .exec();
      }
    };

    return result;
  }//_______________________________________________________________________________________________________________________











  //** SSR ____________________________________________________________________________________________________________________________________________________________________________________________*/

  public async getAllProducts() : Promise<Product[]>{

    const result = await this.productModel.find().exec();
    if(!result) 
        throw new Errors (HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    
    return result;
    }//____________________________________________________________________________________________________________________


  public async createNewProduct(input:ProductInput) : Promise<Product>{
    try{
        return await this.productModel.create(input);
    }catch(err){
        console.log("Error: model:createNewProduct", err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }//_______________________________________________________________________________________________________________________




  public async updateChosenProduct(id: string, input:ProductInput) : Promise<Product>{
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel.findOneAndUpdate({_id:id},input,{ new: true}).exec();
    if(!result) 
        throw new Errors (HttpCode.NOT_FOUND, Message.UPDATE_FAILED);

    return result;
  }//_______________________________________________________________________________________________________________________



};

export default ProductService;