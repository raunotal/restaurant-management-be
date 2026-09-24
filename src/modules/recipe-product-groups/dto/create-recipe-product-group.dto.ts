import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateRecipeProductGroupDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
