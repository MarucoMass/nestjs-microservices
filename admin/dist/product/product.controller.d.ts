import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private readonly productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    all(): Promise<import("./product.entity").Product[]>;
    create(title: string, image: string): Promise<import("./product.entity").Product>;
    get(id: number): Promise<import("./product.entity").Product | null>;
    update(id: number, title: string, image: string): Promise<any>;
    delete(id: number): Promise<any>;
}
