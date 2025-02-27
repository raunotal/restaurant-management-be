import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { IngredientRepository } from 'src/repositories/ingredient.repository';
import { IIngredientRepository } from 'src/repositories/interfaces/ingredient.interface';
import { IngredientCategoryRepository } from 'src/repositories/ingredient-categories.repository';
import { IIngredientCategoryRepository } from 'src/repositories/interfaces/ingredient-category.interface';
import { SupplierRepository } from 'src/repositories/supplier.repository';
import { ISupplierRepository } from 'src/repositories/interfaces/supplier.interface';
import { IUnitRepository } from 'src/repositories/interfaces/unit.interface';
import { UnitRepository } from 'src/repositories/unit.repository';
import { Ingredient } from 'src/entity/ingredient.entity';
import { IngredientWarehouseRepository } from 'src/repositories/ingredient-warehouse.repository';
import { IIngredientWarehouseRepository } from 'src/repositories/interfaces/ingredient-warehouse.interface';

@Injectable()
export class IngredientsService {
  private readonly logger: Logger = new Logger(IngredientsService.name);

  constructor(
    @Inject(IngredientRepository)
    private readonly ingredientsRepository: IIngredientRepository,
    @Inject(IngredientCategoryRepository)
    private readonly ingredientCategoryRepository: IIngredientCategoryRepository,
    @Inject(SupplierRepository)
    private readonly supplierRepository: ISupplierRepository,
    @Inject(UnitRepository)
    private readonly unitRepository: IUnitRepository,
    @Inject(IngredientWarehouseRepository)
    private readonly ingredientWarehouseRepository: IIngredientWarehouseRepository
  ) {}

  async create(createIngredientDto: CreateIngredientDto) {
    this.logger.log(`Creating ingredient ${createIngredientDto.name}`, {
      createIngredientDto,
    });

    const ingredient = new Ingredient(createIngredientDto);
    const category = await this.ingredientCategoryRepository.findOneById(
      createIngredientDto.categoryId
    );
    const supplier = await this.supplierRepository.findOneById(createIngredientDto.supplierId);
    const unit = await this.unitRepository.findOneById(createIngredientDto.unitId);
    const warehouse = await this.ingredientWarehouseRepository.findOneById(
      createIngredientDto.warehouseId
    );

    console.log('warehouse', warehouse);

    return this.ingredientsRepository.create({
      ...ingredient,
      category,
      supplier,
      unit,
      warehouse,
    });
  }

  async findAll() {
    this.logger.log('Finding all ingredients');

    return this.ingredientsRepository.findAll({
      relations: ['category', 'supplier', 'unit', 'warehouse'],
    });
  }

  async findOne(id: string) {
    this.logger.log(`Finding ingredient ${id}`);

    return this.ingredientsRepository.findOne({
      where: { id },
      relations: ['category', 'supplier', 'unit', 'warehouse'],
    });
  }

  async update(id: string, updateIngredientDto: UpdateIngredientDto) {
    this.logger.log(`Updating ingredient ${id}`, { updateIngredientDto });

    const category = await this.ingredientCategoryRepository.findOneById(
      updateIngredientDto.categoryId
    );
    const supplier = await this.supplierRepository.findOneById(updateIngredientDto.supplierId);
    const unit = await this.unitRepository.findOneById(updateIngredientDto.unitId);
    const warehouse = await this.ingredientWarehouseRepository.findOneById(
      updateIngredientDto.warehouseId
    );
    return this.ingredientsRepository.update(id, {
      ...updateIngredientDto,
      category,
      supplier,
      unit,
      warehouse,
    });
  }

  async remove(id: string) {
    this.logger.log(`Removing ingredient ${id}`);

    return this.ingredientsRepository.remove(id);
  }
}
