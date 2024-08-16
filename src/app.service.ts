import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private name : string = " Michaeil"

  getName(): string {
    return this.name;
  }

  setname (name : string):void{
    this.name=name
  }
}
