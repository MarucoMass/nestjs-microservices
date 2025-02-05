import { ProductService } from './product.service';
import { HttpService } from '@nestjs/axios';
export declare class ProductController {
    private productService;
    private HttpService;
    constructor(productService: ProductService, HttpService: HttpService);
    all(): Promise<import("./product.model").Product[]>;
    like(id: number): Promise<any>;
    productCreated(product: any): Promise<void>;
    productUpdated(product: any): Promise<void>;
    productDeleted(id: number): Promise<void>;
}
