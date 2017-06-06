import {Component} from "angular2/core";
import {PianoComponent} from "../piano/piano.component";
import {NoteCanvasComponent} from "../note-canvas/note-canvas.component";
import {INotePosition} from "../../contracts/INotePosition";
import {ViewChild} from "angular2/core";
import {IKeyPressed} from "../../contracts/IKeyPressed";
import {NoteFactory} from "../../services/NoteFactory";
import {ScoreComponent} from "../score/score.component";
import {ScoreTracker} from "../../services/ScoreTracker";

@Component({
    selector: 'piano-app',
    styleUrls: ['app/components/app/app.component.css'],
    template: `
        <div id="gameWrapper">
            <div id="canvasPanel">
                <note-canvas [keyPressed]="pressed"></note-canvas>
                <button (click)="toggleGame()" id="beginButton">{{ buttonLabel }}</button>
            </div>
            <piano (key-pressed)="notePlayed($event)"></piano>
        </div>
    `,
    directives: [PianoComponent, NoteCanvasComponent, ScoreComponent],
    providers: [NoteFactory, ScoreTracker]
})
export class AppComponent {
    private noteFactory: NoteFactory;
    private scoreTracker: ScoreTracker;
    public generatedNote: INotePosition;
    public userIsCorrect: any;
    public gameIsStarted: boolean;
    public buttonLabel: string;
    @ViewChild(NoteCanvasComponent) noteCanvas: NoteCanvasComponent;
    @ViewChild(ScoreComponent) scoreComponent: ScoreComponent;
    constructor(private noteGenerator: NoteFactory, private tracker: ScoreTracker){
        this.noteFactory = noteGenerator;
        this.scoreTracker = tracker;
        this.userIsCorrect = null;
        this.buttonLabel = "Click to start test";
    }
    notePlayed(noteData : IKeyPressed) {
        if (!this.gameIsStarted) return;
        var note = <INotePosition>this.noteFactory.keyToNoteConverter(noteData);
        if (!note) return;
        this.userIsCorrect = note.keyNumber === this.generatedNote.keyNumber;
        this.scoreTracker.updateTotalNotesPlayed();
        this.scoreTracker.notesLimitReached() ? this.endGame() : this.generateNote();
    }
    private generateNote(){
        this.generatedNote = <INotePosition>this.noteFactory.getRandomNote();
        this.noteCanvas.updateCanvas(this.generatedNote);
    }
    toggleGame(){
        (this.gameIsStarted) ? this.endGame() : this.startGame();
    }
    startGame(){
        this.gameIsStarted = true;
        this.userIsCorrect = null;
        this.buttonLabel = "Click to end test";
        this.generateNote();
    }
    endGame() {
        this.gameIsStarted = false;
        this.buttonLabel = "Click to start test";
        this.noteCanvas.clearCanvas();
    }
}