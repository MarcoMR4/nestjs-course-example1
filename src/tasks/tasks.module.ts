import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { TaskServices } from "./tasks.service";

@Module({
    controllers: [TaskController],
    providers: [TaskServices]
})
export class TaskModule {}
