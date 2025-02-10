import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { IngredientRepository } from 'src/repositories/ingredient.repository';
import { IIngredientRepository } from 'src/repositories/interfaces/ingredient.interface';
import { IngredientCategoryRepository } from 'src/repositories/ingredient-categories.repository';
import { IIngredientCategoryRepository } from 'src/repositories/interfaces/ingredient-category.interface';
import { SupplierRepository } from 'src/repositories/supplier.repository';
import { ISupplierRepository } from 'src/repositories/interfaces/supplier.interface';

@Injectable()
export class IngredientsService {
  private readonly logger: Logger = new Logger(IngredientsService.name);

  constructor(
    @Inject(IngredientRepository)
    private readonly ingredientsRepository: IIngredientRepository,
    @Inject(IngredientCategoryRepository)
    private readonly ingredientCategoryRepository: IIngredientCategoryRepository,
    @Inject(SupplierRepository)
    private readonly supplierRepository: ISupplierRepository
  ) {}

  async create(createIngredientDto: CreateIngredientDto) {
    this.logger.log(`Creating ingredient ${createIngredientDto.name}`, {
      createIngredientDto,
    });

    const ingredientCategory = await this.ingredientCategoryRepository.findOneById(
      createIngredientDto.categoryId
    );
    const supplier = await this.supplierRepository.findOneById(createIngredientDto.supplierId);

    return this.ingredientsRepository.create({
      ...createIngredientDto,
      category: ingredientCategory,
      supplier,
    });
  }

  async findAll() {
    this.logger.log('Finding all ingredients');

    return this.ingredientsRepository.findAll({ relations: ['category', 'supplier'] });
  }

  async findOne(id: string) {
    this.logger.log(`Finding ingredient ${id}`);

    return this.ingredientsRepository.findOne({
      where: { id },
      relations: ['category', 'supplier'],
    });
  }

  async update(id: string, updateIngredientDto: UpdateIngredientDto) {
    this.logger.log(`Updating ingredient ${id}`, { updateIngredientDto });

    const ingredientCategory = await this.ingredientCategoryRepository.findOneById(
      updateIngredientDto.categoryId
    );
    const supplier = await this.supplierRepository.findOneById(updateIngredientDto.supplierId);

    return this.ingredientsRepository.update(id, {
      ...updateIngredientDto,
      category: ingredientCategory,
      supplier,
    });
  }

  async remove(id: string) {
    this.logger.log(`Removing ingredient ${id}`);

    return this.ingredientsRepository.remove(id);
  }
}
