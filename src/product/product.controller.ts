import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,

} from '@nestjs/common';
import { ProductInterface } from './product.interface';
import { ProductService } from './product.service';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Product } from './product';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @ApiOperation({
    summary: 'Add new product',
  })
  @ApiCreatedResponse({
    description: 'The product has been successfully created.',
    type: Product,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async Create(@Body() product: Product) {
    this.productService.create(product);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update existing product',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({
    description: 'Product updated',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async Update(@Param('id') id: string, @Body() product: ProductInterface) {
    this.productService.update(product);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete product',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({
    description: 'Product deleted',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async DeleteById(@Param('id') id: string) {
    this.productService.delete(id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find product by id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiFoundResponse({
    description: 'Product found',
    type: Product,
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async findById(@Param('id') id: string) {
    this.productService.findById(id);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all products',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async findAll() {
    this.productService.findAll();
  }
}
