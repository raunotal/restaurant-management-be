import { IsOptional, IsString } from 'class-validator';

export class CreateIngredientCategoryDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
