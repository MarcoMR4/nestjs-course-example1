import {
    IsString, 
    MinLength
} from "class-validator"

export class CreateTaskDto {
    @IsString()
    title: string

    @IsString()
    @MinLength(5)
    description: string
}