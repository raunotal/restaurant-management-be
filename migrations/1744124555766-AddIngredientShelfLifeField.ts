import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIngredientShelfLifeField1744124555766 implements MigrationInterface {
  name = 'AddIngredientShelfLifeField1744124555766';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ingredients" ADD "shelfLife" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "shelfLife"`);
  }
}
