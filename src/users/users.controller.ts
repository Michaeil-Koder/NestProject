import { Controller, Get, Post, RawBodyRequest, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly _userService:UsersService){}
    @Get("detail")
    getUser ():string {
        return this._userService.getDetail()
    }

    @Post("/:name")
    create(@Req() req:RawBodyRequest<Request>):string{
        return req.params.name
    }
}
