import { IsString, IsOptional } from 'class-validator';

export class UpdateIngredientCategoryDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
