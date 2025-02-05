import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    all(): Promise<(import("mongoose").Document<unknown, {}, ProductDocument> & Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
