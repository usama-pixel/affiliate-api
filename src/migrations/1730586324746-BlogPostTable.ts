import { MigrationInterface, QueryRunner } from "typeorm";

export class BlogPostTable1730586324746 implements MigrationInterface {
    name = 'BlogPostTable1730586324746'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blog_posts" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "writtenBy" character varying NOT NULL, "isPublished" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_dd2add25eac93daefc93da9d387" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog_posts"`);
    }

}
