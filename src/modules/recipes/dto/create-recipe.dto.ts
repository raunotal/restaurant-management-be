import { IsString, IsInt, Min, IsBoolean } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  name: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  categoryId: string;

  @IsInt()
  @Min(0)
  preparationTime: number;
}
