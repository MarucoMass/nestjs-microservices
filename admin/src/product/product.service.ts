import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository : Repository<Product>
    ){
    }

    async all(): Promise<Product[]>
    {
        return this.productRepository.find();
    }

    async create(data:any): Promise<Product>
    {
        return this.productRepository.save(data);
    }

    async get(id: number): Promise<Product | null> {
        return this.productRepository.findOneBy({ id });
    }

    async update(id:number, data:any): Promise<any>{
        return this.productRepository.update(id, data);
    }

    async delete(id:number): Promise<any>{
        return this.productRepository.delete(id);
    }
}
