import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateIngredientCategoryDto } from './dto/create-ingredient-category.dto';
import { UpdateIngredientCategoryDto } from './dto/update-ingredient-category.dto';
import { IngredientCategoryRepository } from 'src/repositories/ingredient-categories.repository';
import { IIngredientCategoryRepository } from 'src/repositories/interfaces/ingredient-category.interface';

@Injectable()
export class IngredientCategoriesService {
  private readonly logger: Logger = new Logger(IngredientCategoriesService.name);

  constructor(
    @Inject(IngredientCategoryRepository)
    private readonly ingredientCategoriesRepository: IIngredientCategoryRepository
  ) {}

  create(createIngredientCategoryDto: CreateIngredientCategoryDto) {
    this.logger.log(`Creating ingredient category ${createIngredientCategoryDto.name}`, {
      createIngredientCategoryDto,
    });

    return this.ingredientCategoriesRepository.create(createIngredientCategoryDto);
  }

  findAll() {
    this.logger.log('Finding all ingredient categories');

    return this.ingredientCategoriesRepository.findAll();
  }

  findOne(id: string) {
    this.logger.log(`Finding ingredient category ${id}`);

    return this.ingredientCategoriesRepository.findOneById(id);
  }

  update(id: string, updateIngredientCategoryDto: UpdateIngredientCategoryDto) {
    this.logger.log(`Updating ingredient category ${id}`, { updateIngredientCategoryDto });

    return this.ingredientCategoriesRepository.update(id, updateIngredientCategoryDto);
  }

  remove(id: string) {
    this.logger.log(`Removing ingredient category ${id}`);

    return this.ingredientCategoriesRepository.remove(id);
  }
}
