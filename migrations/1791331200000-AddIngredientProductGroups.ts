import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIngredientProductGroups1791331200000 implements MigrationInterface {
  name = 'AddIngredientProductGroups1791331200000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ingredient_product_groups" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_d4b7a64371987e1cc4e91155c3e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`ALTER TABLE "ingredients" ADD "productGroupId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "ingredients" ADD CONSTRAINT "FK_9a9756c2e7e4659c51c63ecce67" FOREIGN KEY ("productGroupId") REFERENCES "ingredient_product_groups"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ingredients" DROP CONSTRAINT "FK_9a9756c2e7e4659c51c63ecce67"`
    );
    await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "productGroupId"`);
    await queryRunner.query(`DROP TABLE "ingredient_product_groups"`);
  }
}
