import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIngredientWarehouse1739711049022 implements MigrationInterface {
    name = 'AddIngredientWarehouse1739711049022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ingredient_warehouse" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "createdBy" character varying NOT NULL DEFAULT 'system', "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying NOT NULL DEFAULT 'system', "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_b81f850a9db4519dc5a5d986dec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD "warehouseId" uuid`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD CONSTRAINT "FK_4c003bd27a14fa93481c04c17ac" FOREIGN KEY ("warehouseId") REFERENCES "ingredient_warehouse"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" DROP CONSTRAINT "FK_4c003bd27a14fa93481c04c17ac"`);
        await queryRunner.query(`ALTER TABLE "ingredients" DROP COLUMN "warehouseId"`);
        await queryRunner.query(`DROP TABLE "ingredient_warehouse"`);
    }

}
