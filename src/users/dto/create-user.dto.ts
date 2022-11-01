import { IsEmail, IsInt, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    email: string;
    slug: string;
    name: string;
    password: string;
}