import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getDetail():string{
        return "user Detail"
    }
}
