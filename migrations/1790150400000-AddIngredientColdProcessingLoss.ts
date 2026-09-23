import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIngredientColdProcessingLoss1790150400000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ingredients" ADD "coldProcessingLoss" double precision`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "coldProcessingLoss"`);
  }
}
