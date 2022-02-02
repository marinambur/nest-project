import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {articles} from "./articles";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index() {
    return { articles };
  }
}
