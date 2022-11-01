import { Controller, Body, Get, Req, Post } from '@nestjs/common';
// import console from 'console';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entitiy/user.entitiy';
import { UsersService } from './users.service';

@Controller('kontol')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post('panjang')
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            console.log(createUserDto);
            return await this.usersService.create(createUserDto);
        }
        catch (e) {
            console.log(e);
        }

    }

    @Get('kecil')
    findAll() {
        return this.usersService.findAll();
    }
}