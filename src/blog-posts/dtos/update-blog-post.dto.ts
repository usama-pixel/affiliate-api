import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateBlogPostDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    content: string;

    @IsString()
    @IsOptional()
    written_by: string;

    @IsString()
    @IsOptional()
    is_published: boolean;

    @IsString()
    @IsOptional()
    featured: boolean;
}