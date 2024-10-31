import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

export interface User {
    name: String,
    age: Number
}

@Injectable()
export class UsersService {

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
        return this.users;
    }

    createUser(user: CreateUserDto){
        return {
            ...user,
            id: this.users.length+1
        }
    }
}
