import { IsNotEmpty, IsString } from "class-validator";

export class CreateBlogPostDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    is_main_post: boolean

    @IsNotEmpty()
    featured: boolean

    @IsNotEmpty()
    is_popular: boolean
    
    @IsString()
    @IsNotEmpty()
    written_by: string;

    @IsString()
    @IsNotEmpty()
    image_url: string
}