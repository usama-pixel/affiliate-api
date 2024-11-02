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
    writtenBy: string;
}