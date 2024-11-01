import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from './prisma.service';

export interface User {
    name: String,
    age: Number
}

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService){}

    getTasks(): User {
        return {
            name: 'John', 
            age: 40
        }     
    }

    private users : any = [
        {
            id : 1,
            name : "Marco", 
            phone : "443311"
        },
        {
            id : 2,
            name : "Diego", 
            phone : "443312"
        }
    ]

    getUsers(){
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDto){
        return this.prisma.user.create({data:user});
    }
}
