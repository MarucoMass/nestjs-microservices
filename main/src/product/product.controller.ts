import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';
import { HttpService } from '@nestjs/axios';

@Controller('products')
export class ProductController {
    constructor(
        private productService: ProductService,
        private HttpService: HttpService
    ){}

    @Get()
    async all(){
        return this.productService.all();
    }

    @Post(':id/like')
    async like(@Param('id') id:number){
        const product = await this.productService.findOne(id);

        if(product)
        {
            this.HttpService.post(`http://localhost:8000/api/products/${id}/like`, {}).subscribe(
                res => {
                    console.log(res)
                }
            )

            return this.productService.update(id, {
                likes: product.likes + 1
            });
        }
    }

    @EventPattern('product_created')
    async productCreated(product:any){
        await this.productService.create({
            id: product.id,
            title: product.title,
            image: product.image,
            likes: product.likes
        });
        console.log('Product created', product)  
    }

    @EventPattern('product_updated')
    async productUpdated(product:any){
        await this.productService.update(product.id, {
            title: product.title,
            image: product.image,
            likes: product.likes
        });
        console.log('Product updated', product)  
    }

    @EventPattern('product_deleted')
    async productDeleted(id:number){
        await this.productService.delete(id);
        console.log('Product deleted with ID:', id)  
    }
}
