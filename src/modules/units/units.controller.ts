import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  async create(@Body() createUnitDto: CreateUnitDto) {
    return await this.unitsService.create(createUnitDto);
  }

  @Get()
  async findAll() {
    return await this.unitsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.unitsService.findOneById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUnitDto: UpdateUnitDto) {
    return this.unitsService.update(id, updateUnitDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.unitsService.remove(id);
  }
}
