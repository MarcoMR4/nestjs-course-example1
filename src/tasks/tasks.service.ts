import { Injectable,  Param, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
export class TaskServices{

    private tasks = [];

    getTasks(){
        return this.tasks;
    }

    getTask(id: number){
        const taskFound = this.tasks.find((task) => task.id === id);

        if(!taskFound){
            return new NotFoundException(`Task not found with id: ${id}`)
        }

        return taskFound
    }

    getGreet(){
        return 'Saludando';
    }

    createTasks(task: CreateTaskDto){
        console.log(task);
        let newTask = {
            ...task,
            id: this.tasks.length + 1
        }
        this.tasks.push(newTask);
        return newTask;
    }

    updateTasks(){
        return 'Actualizando tarea...';
    }

    deleteTasks(){
        return 'Eliminando tarea....';
    }

    updateStatusTask(){
        return 'Actualizando estado de tarea...';
    }
}