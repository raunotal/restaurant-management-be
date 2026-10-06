import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateIngredientProductGroupDto } from './dto/create-ingredient-product-group.dto';
import { UpdateIngredientProductGroupDto } from './dto/update-ingredient-product-group.dto';
import { IngredientProductGroupRepository } from 'src/repositories/ingredient-product-group.repository';
import { IIngredientProductGroupRepository } from 'src/repositories/interfaces/ingredient-product-group.interface';

@Injectable()
export class IngredientProductGroupsService {
  private readonly logger: Logger = new Logger(IngredientProductGroupsService.name);

  constructor(
    @Inject(IngredientProductGroupRepository)
    private readonly ingredientProductGroupRepository: IIngredientProductGroupRepository
  ) {}

  async create(createIngredientProductGroupDto: CreateIngredientProductGroupDto) {
    this.logger.log(`Creating ingredient product group ${createIngredientProductGroupDto.name}`, {
      createIngredientProductGroupDto,
    });

    return await this.ingredientProductGroupRepository.create(createIngredientProductGroupDto);
  }

  async findAll() {
    this.logger.log('Finding all ingredient product groups');

    return await this.ingredientProductGroupRepository.findAll();
  }

  async findOneById(id: string) {
    this.logger.log(`Finding ingredient product group ${id}`);

    return await this.ingredientProductGroupRepository.findOneById(id);
  }

  async update(id: string, updateIngredientProductGroupDto: UpdateIngredientProductGroupDto) {
    this.logger.log(`Updating ingredient product group ${id}`, { updateIngredientProductGroupDto });

    return await this.ingredientProductGroupRepository.update(id, updateIngredientProductGroupDto);
  }

  remove(id: string) {
    this.logger.log(`Removing ingredient product group ${id}`);

    return this.ingredientProductGroupRepository.remove(id);
  }
}
