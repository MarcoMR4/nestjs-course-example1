import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TaskModule, ProjectsModule, UsersModule, PaymentsModule],
  controllers: [HelloController, AuthController],
  providers: [AuthService],
})
export class AppModule {}
