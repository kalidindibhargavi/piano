import {Component} from "angular2/core";
import {IUserResultItem} from "../../contracts/IUserResultItem";
import {ScoreTracker} from "../../services/ScoreTracker";
import {OnInit} from 'angular2/core';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'score',
    styleUrls: ['app/components/score/score.component.css'],
    template: `
    <div class="score-wrapper">
        <div class="score-wrapper__content">
            <p>Total Notes: {{ scoreTracker.totalNotesPlayed }} of {{ scoreTracker.notesLimit }}</p>
        </div>
    </div>
    `,
    inputs: ['generatedNote', 'userIsCorrect', 'gameIsStarted']
})
export class ScoreComponent implements OnInit {
    public scoreTracker: ScoreTracker;
    public notes = [];
    constructor(private tracker: ScoreTracker){
        this.scoreTracker = tracker;
    }
    ngOnInit() {
        var note : IUserResultItem;
        this.scoreTracker.todos$.subscribe(notes => {
            note = <IUserResultItem>notes[notes.length - 1];
            this.notes.push(note);
        });
    }
    resetScore() {
        this.scoreTracker.resetScore();
    }
}