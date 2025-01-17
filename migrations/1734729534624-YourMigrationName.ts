import { MigrationInterface, QueryRunner } from 'typeorm';

export class YourMigrationName1734729534624 implements MigrationInterface {
  name = 'YourMigrationName1734729534624';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ingredient_categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_c8efa29d4848b2abaea47237a87" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "suppliers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "name" character varying NOT NULL, CONSTRAINT "PK_b70ac51766a9e3144f778cfe81e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "ingredients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "name" character varying NOT NULL, "grossQuantity" integer, "netQuantity" integer, "purchasePrice" integer, "categoryId" uuid, "supplierId" uuid, CONSTRAINT "PK_9240185c8a5507251c9f15e0649" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "recipe_categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_d2c6cdb5aca8199edabe4e4f08d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "recipe_recipes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "quantity" integer NOT NULL, "comments" character varying, "recipeId" uuid, "inRecipeId" uuid, "unitId" uuid, CONSTRAINT "PK_c602668ba73eeb4a6e579acac00" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "stages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "name" character varying NOT NULL, CONSTRAINT "PK_16efa0f8f5386328944769b9e6d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "preparation_instructions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "instructions" character varying NOT NULL, "stepNumber" integer NOT NULL, "recipeId" uuid, "stageId" uuid, CONSTRAINT "PK_c46add2612d836a6172bf3d960e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "recipes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "name" character varying NOT NULL, "imageUrl" character varying, "comments" character varying, "preparationTime" integer, "isActive" boolean NOT NULL DEFAULT false, "categoryId" uuid, CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "recipe_ingredients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "quantity" integer NOT NULL, "comments" character varying, "recipeId" uuid, "ingredientId" uuid, "unitId" uuid, CONSTRAINT "PK_8f15a314e55970414fc92ffb532" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "ingredients" ADD CONSTRAINT "FK_8f7060de1f9dc5d70ed029a1747" FOREIGN KEY ("categoryId") REFERENCES "ingredient_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "ingredients" ADD CONSTRAINT "FK_c647395028351795765fefe6a3d" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_recipes" ADD CONSTRAINT "FK_cce2f92c8b3e0cc64bcf31fee8a" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_recipes" ADD CONSTRAINT "FK_8f6f1a884b6be3af812ec51163f" FOREIGN KEY ("inRecipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_recipes" ADD CONSTRAINT "FK_d5d3f89f4957b197feec28ac940" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "preparation_instructions" ADD CONSTRAINT "FK_ec7af403d74de071eed505c3b37" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "preparation_instructions" ADD CONSTRAINT "FK_5376a23648f7ce06c930dd11fe1" FOREIGN KEY ("stageId") REFERENCES "stages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "recipes" ADD CONSTRAINT "FK_d4097844785f4a027db682aa671" FOREIGN KEY ("categoryId") REFERENCES "recipe_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "FK_2d7f407ae694e91bb3da1798c61" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "FK_05a2b62604dfd9840f4cda76a93" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredients" ADD CONSTRAINT "FK_bc6db8e16899337b95bcb69afb0" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredients" DROP CONSTRAINT "FK_bc6db8e16899337b95bcb69afb0"`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredients" DROP CONSTRAINT "FK_05a2b62604dfd9840f4cda76a93"`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_ingredients" DROP CONSTRAINT "FK_2d7f407ae694e91bb3da1798c61"`
    );
    await queryRunner.query(
      `ALTER TABLE "recipes" DROP CONSTRAINT "FK_d4097844785f4a027db682aa671"`
    );
    await queryRunner.query(
      `ALTER TABLE "preparation_instructions" DROP CONSTRAINT "FK_5376a23648f7ce06c930dd11fe1"`
    );
    await queryRunner.query(
      `ALTER TABLE "preparation_instructions" DROP CONSTRAINT "FK_ec7af403d74de071eed505c3b37"`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_recipes" DROP CONSTRAINT "FK_d5d3f89f4957b197feec28ac940"`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_recipes" DROP CONSTRAINT "FK_8f6f1a884b6be3af812ec51163f"`
    );
    await queryRunner.query(
      `ALTER TABLE "recipe_recipes" DROP CONSTRAINT "FK_cce2f92c8b3e0cc64bcf31fee8a"`
    );
    await queryRunner.query(
      `ALTER TABLE "ingredients" DROP CONSTRAINT "FK_c647395028351795765fefe6a3d"`
    );
    await queryRunner.query(
      `ALTER TABLE "ingredients" DROP CONSTRAINT "FK_8f7060de1f9dc5d70ed029a1747"`
    );
    await queryRunner.query(`DROP TABLE "recipe_ingredients"`);
    await queryRunner.query(`DROP TABLE "recipes"`);
    await queryRunner.query(`DROP TABLE "preparation_instructions"`);
    await queryRunner.query(`DROP TABLE "stages"`);
    await queryRunner.query(`DROP TABLE "recipe_recipes"`);
    await queryRunner.query(`DROP TABLE "recipe_categories"`);
    await queryRunner.query(`DROP TABLE "ingredients"`);
    await queryRunner.query(`DROP TABLE "suppliers"`);
    await queryRunner.query(`DROP TABLE "ingredient_categories"`);
  }
}
