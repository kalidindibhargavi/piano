import {Component} from "angular2/core";

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
export class ScoreComponent {}