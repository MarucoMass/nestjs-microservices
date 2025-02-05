import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<(import("mongoose").Document<unknown, {}, import("./product.model").ProductDocument> & import("./product.model").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    hello(data: string): Promise<void>;
}
