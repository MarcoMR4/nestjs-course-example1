import { IsEmail, IsNotEmpty, IsNumber, isString, IsString, Max, MAX } from "class-validator"

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email:string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @Max(100)
    age: number
}