import { Injectable } from 'angular2/core';
import { PLAYERS } from './mock-players';

@Injectable()
export class LeaderBoardService {

    getPlayers() {
        return Promise.resolve(PLAYERS);
    }

    reset(): void{
    	let i: number;
    	for(i=0; i<PLAYERS.length; i++){
    		PLAYERS[i].points = 0;
    	}
    }

    update(winner: number): void{
        PLAYERS[winner-1].points += 2 ;
        return;
        var i: number;
        for(i=0; i<PLAYERS.length; i++){
        	var j: number;
        	for(j=(i+1); j<PLAYERS.length; j++){
				if(PLAYERS[j].points > PLAYERS[i].points){
					var tmp: any;
					tmp = PLAYERS[i];
					PLAYERS[i] = PLAYERS[j];
					PLAYERS[j] = tmp;
				}
        	}
        }
    }
}

