import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Render,
  UseGuards,
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
import { RolesGuard } from '../guards/roles.guard';

@ApiTags('Product')
@Controller('product')
@UseGuards(RolesGuard)
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
    return this.productService.create(product);
  }

  @Patch(':id/:price')
  @ApiOperation({
    summary: 'Update price of existing product',
  })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiOkResponse({
    description: 'Product price updated',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async UpdatePrice(
    @Param('id') targetId: number,
    @Param('price') price: number,
  ) {
    return this.productService.update(targetId, price);
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
  async DeleteById(@Param('id') targetId: number) {
    this.productService.delete(targetId);
    return ApiOkResponse;
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
  @Render('gallery')
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async findById(@Param('id') targetId: number) {
    return { products: [await this.productService.findById(targetId)] };
  }

  @Get()
  @ApiOperation({
    summary: 'Find all products',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Render('gallery')
  async findAll() {
    return { products: await this.productService.findAll() };
  }
}
