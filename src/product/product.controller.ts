import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ProductModel } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {

    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) {
    
    }
    
     @Get(':id')
    async get(@Param('id') id: string) {

    }

    @Delete('id')
    async delete(@Param('id') id: string) {

    }
    
    @HttpCode(200)
    @Post('')
    async find(@Body() dto: CreateProductDto) {

    }
}

