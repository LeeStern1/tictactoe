import { Injectable } from '@nestjs/common';
import * as users from '../users.json';

@Injectable()
export class ScoreService {
    getScore() {
        let array = Object.keys(users).map( key => { if(key !== undefined) return { name: key, value: users[key] }});
        array.sort(function(a, b) { return b.value - a.value });
        return array.slice(0, 10);
    }
    sign(name: string): void {
        if(!users[name])
            users[name]=0;

    }
    win(name: string): void {
        users[name]+=100;
    }
    tie(name: string): void {
        users[name]+=10;
    }
}
