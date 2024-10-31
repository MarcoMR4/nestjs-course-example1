import { Controller, Get, HttpCode, Param, ParseIntPipe, Req, Res, Query, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('')
export class HelloController {

    @Get('/hello')
    index(@Req() request:Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message: 'Hello World Example'
        });
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 Not Found'
    }

    @Get('error')
    @HttpCode(500)
    error(){
        return 'Error'
    }

    @Get('new')
    @HttpCode(201)
    new(){
        return 'Something new'
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num : number){
        console.log(typeof num)
        return num + 14;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
        console.log(typeof query.name)
        console.log(typeof query.age)
        return `Hello: ${query.name} with an age of ${query.age}`
    }
}