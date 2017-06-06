import {Injectable} from "angular2/core";
import {IUserResultItem} from "../contracts/IUserResultItem";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/share';

@Injectable()
export class ScoreTracker {
    todos$: Observable<Array<IUserResultItem>>;
    private _todosObserver: any;
    public totalNotesPlayed: number = 0;
    // Control total number of notes per test round.
    public notesLimit: number = 20;
    constructor(){
        this.todos$ = new Observable(observer => this._todosObserver = observer).share();
    }
    updateTotalNotesPlayed(){
        this.totalNotesPlayed++;
    }
    resetScore() : void {
        this.totalNotesPlayed = 0;
    }

    notesLimitReached() : boolean {
        return this.totalNotesPlayed === this.notesLimit;
    }
}