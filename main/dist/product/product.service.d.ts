import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    all(): Promise<Product[]>;
    create(data: any): Promise<Product>;
    findOne(id: number): Promise<Product | null>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<void>;
}
