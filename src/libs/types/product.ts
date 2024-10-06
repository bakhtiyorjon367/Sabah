import { ProductCollection, ProductStatus, ProductType,} from "../enums/product.enum";
import {ObjectId} from "mongoose";

export interface Product {
    _id: ObjectId;
    productStatus:    ProductStatus;
    productType:ProductType;
    productName:      string;
    productPrice:     number;
    productGender: string;
    productCollection:ProductCollection,
    productDesc?:      string;
    productImages:   string[];
    productView:     number;
    createdAt: Date;
    updatedAt: Date;

}

export interface ProductInquiry{
    order: string;
    page: number;
    limit:number;
    productType?:ProductType;
    search?:string;

}

export interface ProductInput {
    productStatus?:    ProductStatus;
    productType:ProductType;
    productName:      string;
    productPrice:     number;
    productGender?: string;
    productCollection?:ProductCollection,
    productDesc?:      string;
    productImages?:   string[];
    productView?:     number;
}

export interface ProductUpdateInput {
    _id: ObjectId;
    productStatus?:    ProductStatus;
    productType?:ProductType;
    productName?:      string;
    productPrice?:     number;
    productGender?: string;
    productDesc?:      string;
    productImages?:   string[];
    productView?:     number;
}


