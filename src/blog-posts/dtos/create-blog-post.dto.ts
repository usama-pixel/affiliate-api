import { IsNotEmpty, IsString } from "class-validator";

export class CreateBlogPostDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    written_by: string;

    @IsString()
    @IsNotEmpty()
    image_url: string
}