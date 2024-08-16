import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("getname")
  getname():string {
    const name : string =this.appService.getName()
    return name
  }

  @Post("setname")
  setName ():string {
    const name :string="ali"
    console.log(name)
    this.appService.setname(name);
    return this.appService.getName()
  }
}
