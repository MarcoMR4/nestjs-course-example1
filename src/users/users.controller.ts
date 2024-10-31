import { Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get('users/')
    getAllUsers() {
        return this.usersService.getTasks();
    }

    @Post('users/')
    createUser(@Body() user : CreateUserDto){
        return this.usersService.createUser(user);
    }
}
