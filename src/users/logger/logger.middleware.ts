import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: () => void) {
    console.log(req.originalUrl);

    next();
  }
}
