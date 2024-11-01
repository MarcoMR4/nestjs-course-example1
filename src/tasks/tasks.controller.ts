import { Controller, Delete, Get, Patch, Post, Put, Body, Query, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskServices } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('/tasks')
@ApiTags('Taks')
export class TaskController {
    tasksService: TaskServices; //crear una instancia de taskServices

    constructor(tasksService:TaskServices) {
        this.tasksService = tasksService; //asignar la instancia en constructor 
    }

    @Get() // <----- Aquí iría la ruta pero no se define porque es una ruta común definida en el controller
    @ApiOperation({summary: 'Get a list of all tasks'})
    @ApiResponse({ status: 200, description: 'Not forbidden. ñ.ñ'})
    getAllTasks(@Query() query:any){
        //Podemos buscar en una DB
        //Podemos obtener datos de una API 
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id')        // <------ Se recibe un parametro que se comcatena a la ruta general del controller 
    getTask(@Param('id') id: string){
        console.log(id)
        return this.tasksService.getTask(parseInt(id));
    }

    // @Get('/greet')
    // getGreet(){
    //     return this.tasksService.getGreet();
    // }

    @Post()
    @UsePipes(new ValidationPipe)
    createTasks(@Body() task : CreateTaskDto){
        return this.tasksService.createTasks(task);
    }

    @Put()
    updateTasks(){
        return this.tasksService.updateTasks();
    }

    @Delete()
    deleteTasks(){
        return this.tasksService.deleteTasks();
    }

    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateStatusTask();
    }


}
