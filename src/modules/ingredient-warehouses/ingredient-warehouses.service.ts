import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateIngredientWarehouseDto } from './dto/create-ingredient-warehouse.dto';
import { UpdateIngredientWarehouseDto } from './dto/update-ingredient-warehouse.dto';
import { IngredientWarehouseRepository } from 'src/repositories/ingredient-warehouse.repository';
import { IIngredientWarehouseRepository } from 'src/repositories/interfaces/ingredient-warehouse.interface';

@Injectable()
export class IngredientWarehousesService {
  private readonly logger: Logger = new Logger(IngredientWarehousesService.name);

  constructor(
    @Inject(IngredientWarehouseRepository)
    private readonly ingredientWarehouseRepository: IIngredientWarehouseRepository
  ) {}

  async create(createIngredientWarehouseDto: CreateIngredientWarehouseDto) {
    this.logger.log(`Creating ingredientWarehouse ${createIngredientWarehouseDto.name}`, {
      createIngredientWarehouseDto,
    });
  }

  async findAll() {
    this.logger.log('Finding all ingredientWarehouses');

    return this.ingredientWarehouseRepository.findAll();
  }

  async findOne(id: string) {
    this.logger.log(`Finding ingredientWarehouse ${id}`);

    return this.ingredientWarehouseRepository.findOneById(id);
  }

  async update(id: string, updateIngredientWarehouseDto: UpdateIngredientWarehouseDto) {
    this.logger.log(`Updating ingredientWarehouse ${id}`, { updateIngredientWarehouseDto });

    return this.ingredientWarehouseRepository.update(id, updateIngredientWarehouseDto);
  }

  async remove(id: string) {
    this.logger.log(`Removing ingredientWarehouse ${id}`);

    return this.ingredientWarehouseRepository.remove(id);
  }
}
