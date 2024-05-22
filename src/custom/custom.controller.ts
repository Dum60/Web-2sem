import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CustomInterface } from './custom.interface';
import { CustomService } from './custom.service';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Custom } from './custom';

@ApiTags('customOrder')
@Controller('custom')
export class CustomController {
  constructor(private customService: CustomService) {}
  @Get(':id')
  @ApiOperation({
    summary: 'Find customs by user id',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiFoundResponse({
    description: 'Customs found',
    type: [Custom],
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async findByUserId(@Param('id') id: string) {
    this.customService.findByUserId(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create custom',
  })
  @ApiCreatedResponse({
    description: 'Custom has been successfully created.',
    type: Custom,
  })
  @ApiUnauthorizedResponse({ description: 'Register or login' })
  async Create(@Body() custom: CustomInterface) {
    this.customService.create();
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete custom',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({
    description: 'Custom deleted',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiUnauthorizedResponse({ description: 'Register or login' })
  async DeleteById(@Param() id: string) {
    this.customService.delete(id);
  }
}
