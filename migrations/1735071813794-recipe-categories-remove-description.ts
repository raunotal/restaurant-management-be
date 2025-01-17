import { MigrationInterface, QueryRunner } from "typeorm";

export class RecipeCategoriesRemoveDescription1735071813794 implements MigrationInterface {
    name = 'RecipeCategoriesRemoveDescription1735071813794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe_categories" DROP COLUMN "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe_categories" ADD "description" character varying`);
    }

}
