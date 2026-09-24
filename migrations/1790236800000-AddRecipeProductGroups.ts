import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRecipeProductGroups1790236800000 implements MigrationInterface {
  name = 'AddRecipeProductGroups1790236800000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "recipe_product_groups" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_recipe_product_groups_id" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`ALTER TABLE "recipes" ADD "productGroupId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "recipes" ADD CONSTRAINT "FK_cb4335a34ad50b6ca40d7589daf" FOREIGN KEY ("productGroupId") REFERENCES "recipe_product_groups"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recipes" DROP CONSTRAINT "FK_cb4335a34ad50b6ca40d7589daf"`
    );
    await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "productGroupId"`);
    await queryRunner.query(`DROP TABLE "recipe_product_groups"`);
  }
}
