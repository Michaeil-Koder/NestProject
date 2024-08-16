import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("getname")
  getname():string {
    const name : string ="michaeil"
    return name
  }

  @Post("setname")
  setName ():string {
    const msg :string ="set name successfully"
    return msg
  }

  @Put("setname")
  resetName ():string {
    const msg :string ="set name successfully"
    return msg
  }
}
