import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateRecipeCategoryDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
