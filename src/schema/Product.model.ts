import mongoose, {Schema} from "mongoose";
import { Gender, ProductCollection, ProductStatus, ProductType} from "../libs/enums/product.enum";

//ProductSchema, Code first

const productSchema = new Schema({
    productStatus: {
        type: String,
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
    },

    productType:{
        type: String,
        enum: ProductType,
        required: true,
    },

    productName:{
        type: String,
        required: true,
    },

    productPrice:{
        type: Number,
        required: true,
    },

    productGender:{
        type: String,
        enum: Gender,
        required: true,
    },
    
    productCollection:{
        type:String,
        enum: ProductCollection,
        required: true,
    },
   
    productDesc:{
        type: String,
        
    },

    productImages:{
        type: [String],
        default:[],
    },

    productView:{
        type:Number,
        default: 0,
    },

    salePrice: {
        type: Number,
        default: 0,
    }
},
{timestamps: true}  //UpdateAt CreatedAt
);
productSchema.index({productName:1,productType:1},{unique:true})
export default mongoose.model("Product",productSchema);