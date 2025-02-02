import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { IRecipeRepository } from 'src/repositories/interfaces/recipe.interface';
import { RecipeRepository } from 'src/repositories/recipe.repository';
import { IRecipeCategoryRepository } from 'src/repositories/interfaces/recipe-category.interface';
import { RecipeCategoryRepository } from 'src/repositories/recipe-category.repository';
import { Recipe } from 'src/entity/recipe.entity';

@Injectable()
export class RecipeService {
  private readonly logger: Logger = new Logger(RecipeService.name);

  constructor(
    @Inject(RecipeRepository)
    private readonly recipesRepository: IRecipeRepository,
    @Inject(RecipeCategoryRepository)
    private readonly recipeCategoryRepository: IRecipeCategoryRepository
  ) {}

  async create(createRecipeDto: CreateRecipeDto) {
    this.logger.log(`Creating recipe ${createRecipeDto.name}`, {
      createRecipeDto,
    });

    const recipeCategory = await this.recipeCategoryRepository.findOneById(
      createRecipeDto.categoryId
    );
    const recipe = new Recipe({ ...createRecipeDto, category: recipeCategory });
    return this.recipesRepository.create(recipe);
  }

  async findAll() {
    return `This action returns all recipe`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    this.logger.log(`Updating recipe ${id}`, { updateRecipeDto });

    const recipeCategory = await this.recipeCategoryRepository.findOneById(
      updateRecipeDto.categoryId
    );
    const recipe = new Recipe({ ...updateRecipeDto, category: recipeCategory });
    return this.recipesRepository.update(id, recipe);
  }

  async remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
